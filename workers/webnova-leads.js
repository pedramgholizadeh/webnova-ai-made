/**
 * WebNova Leads Worker
 * Database: webnova-db (D1)
 *
 * Endpoints:
 *   POST /lead          → Submit new lead
 *   GET  /leads         → List all leads (JSON)
 *   GET  /leads?service=ai-landing-page → فیلتر بر اساس سرویس
 *   GET  /              → Simple HTML dashboard to view leads
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;

    // CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // ===================== POST: Submit lead =====================
      if (request.method === 'POST' && pathname === '/lead') {
        const data = await request.json();

        if (!data.name || !data.email || !data.service) {
          return jsonResponse({ error: 'name, email and service are required' }, 400, corsHeaders);
        }

        const stmt = env.webnova_db.prepare(`
          INSERT INTO leads (service, name, email, phone, company, package, message, created_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const result = await stmt.bind(
          data.service,
          data.name,
          data.email,
          data.phone || null,
          data.company || null,
          data.package || null,
          data.message || null,
          new Date().toISOString()
        ).run();

        return jsonResponse({
          success: true,
          id: result.meta.last_row_id,
          message: 'Lead submitted successfully'
        }, 200, corsHeaders);
      }

      // ===================== GET: List leads =====================
      if (request.method === 'GET' && pathname === '/leads') {
        const service = searchParams.get('service');

        let query = 'SELECT * FROM leads ORDER BY created_at DESC';
        let params = [];

        if (service) {
          query = 'SELECT * FROM leads WHERE service = ? ORDER BY created_at DESC';
          params = [service];
        }

        const { results } = await env.webnova_db.prepare(query).bind(...params).all();

        return jsonResponse({
          total: results.length,
          leads: results
        }, 200, corsHeaders);
      }

      // ===================== داشبورد ساده HTML =====================
      if (request.method === 'GET' && (pathname === '/' || pathname === '/dashboard')) {
        const { results } = await env.webnova_db
          .prepare('SELECT * FROM leads ORDER BY created_at DESC LIMIT 100')
          .all();

        const html = generateDashboardHTML(results);
        return new Response(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }

      return jsonResponse({ error: 'Not Found' }, 404, corsHeaders);

    } catch (err) {
      console.error(err);
      return jsonResponse({ error: 'Internal Server Error', details: err.message }, 500, corsHeaders);
    }
  }
};

// ===================== Helper Functions =====================

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders
    }
  });
}

function generateDashboardHTML(leads) {
  const rows = leads.map(lead => `
    <tr>
      <td>${new Date(lead.created_at).toLocaleString('fa-IR')}</td>
      <td><strong>${lead.service}</strong></td>
      <td>${lead.name}</td>
      <td>${lead.email}</td>
      <td>${lead.phone || '-'}</td>
      <td>${lead.company || '-'}</td>
      <td>${lead.package || '-'}</td>
      <td style="max-width:300px; white-space: pre-wrap;">${lead.message || ''}</td>
    </tr>
  `).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WebNova Leads Dashboard</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #111; color: #eee; padding: 20px; }
    table { width: 100%; border-collapse: collapse; background: #1a1a1a; }
    th, td { padding: 10px; border: 1px solid #333; text-align: right; }
    th { background: #222; }
    tr:hover { background: #222; }
    h1 { margin-bottom: 20px; }
    .stats { margin-bottom: 20px; color: #3b82f6; }
  </style>
</head>
<body>
  <h1>WebNova Leads</h1>
  <div class="stats">Total leads: <strong>${leads.length}</strong></div>
  
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Service</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
        <th>Package</th>
        <th>Message</th>
      </tr>
    </thead>
    <tbody>
      ${rows || '<tr><td colspan="8">No leads submitted yet.</td></tr>'}
    </tbody>
  </table>

  <p style="margin-top: 30px; color: #666; font-size: 13px;">
    Filter: <code>/leads?service=ai-landing-page</code><br>
    Raw API: <code>/leads</code>
  </p>
</body>
</html>`;
}
