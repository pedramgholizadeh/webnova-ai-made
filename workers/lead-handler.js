/**
 * Cloudflare Worker - WebNova Lead Handler
 * 
 * Deploy this to Cloudflare Workers.
 * It receives leads from the service landing pages and can:
 * - Store in KV
 * - Send email
 * - Forward to Telegram / CRM
 */

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const data = await request.json();

      // Basic validation
      if (!data.email || !data.service) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      // 1. Store in KV (create a KV namespace called LEADS)
      const leadId = `lead_${Date.now()}_${data.service}`;
      await env.LEADS.put(leadId, JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        id: leadId
      }));

      // 2. (Optional) Send notification (example: Telegram or Email via Resend)
      // await sendNotification(data);

      console.log('New lead received:', data);

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Lead received successfully',
        id: leadId 
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });

    } catch (error) {
      console.error('Error processing lead:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

// Example helper (uncomment and configure)
/*
async function sendNotification(lead) {
  const message = `New Lead from ${lead.service}\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}`;
  
  // Send to Telegram example:
  // await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ chat_id: CHAT_ID, text: message })
  // });
}
*/
