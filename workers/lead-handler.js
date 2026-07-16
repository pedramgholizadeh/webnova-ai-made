/**
 * Cloudflare Worker - WebNova Lead Handler
 * 
 * HOW TO DEPLOY:
 * 1. Go to https://dash.cloudflare.com → Workers & Pages → Create Worker
 * 2. Name it something like "webnova-leads"
 * 3. Paste this code
 * 4. Create a KV namespace:
 *    - Workers & Pages → KV → Create a namespace named "LEADS"
 *    - Go back to your worker → Settings → Variables → KV Namespace Bindings → Add "LEADS"
 * 5. Deploy
 * 6. Your worker URL will be: https://webnova-leads.your-subdomain.workers.dev
 * 7. Update the WORKER_URL in ServiceLanding.astro
 *
 * Features:
 * - Stores leads in KV with timestamp
 * - Easy to extend (add email, Telegram, etc.)
 */

export default {
  async fetch(request, env) {
    // CORS for form submissions
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const data = await request.json();

      if (!data.email || !data.service || !data.name) {
        return new Response(JSON.stringify({ error: 'Missing required fields (name, email, service)' }), { 
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      }

      // Store in KV
      const leadId = `lead_${Date.now()}_${data.service}`;
      const leadRecord = {
        id: leadId,
        ...data,
        timestamp: new Date().toISOString(),
        source: 'webnova-service-landing'
      };

      await env.LEADS.put(leadId, JSON.stringify(leadRecord));

      console.log('[WebNova] New lead stored:', leadId);

      // === EXTENSIONS (uncomment and configure as needed) ===
      // 1. Send Telegram notification
      // if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      //   await sendToTelegram(leadRecord, env);
      // }

      // 2. Send email via Resend or Mailchannels
      // await sendEmail(leadRecord, env);

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Lead registered successfully',
        id: leadId 
      }), {
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' 
        }
      });

    } catch (error) {
      console.error('[WebNova] Lead processing error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }
  }
};

// Helper examples (add your own keys in Worker environment variables)
/*
async function sendToTelegram(lead, env) {
  const text = `🆕 لید جدید از وب‌نوا\n\nسرویس: ${lead.service}\nنام: ${lead.name}\nایمیل: ${lead.email}\nتلفن: ${lead.phone || '-'}\nشرکت: ${lead.company || '-'}\nپلن: ${lead.package || '-'}`;
  
  await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: env.TELEGRAM_CHAT_ID,
      text: text
    })
  });
}
*/
