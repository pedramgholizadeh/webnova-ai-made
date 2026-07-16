# How to Create & Deploy the Cloudflare Worker (Command Line)

This guide shows you exactly how to create the `webnova-leads` Worker using the terminal.

## 1. Install Wrangler (Cloudflare CLI)

```bash
# Install globally
npm install -g wrangler

# Or use npx (no install needed)
npx wrangler --version
```

## 2. Login to Cloudflare

```bash
wrangler login
```

This will open a browser. Log in with your Cloudflare account.

## 3. Create the D1 Database

Run this command from your project root:

```bash
wrangler d1 create webnova-db
```

You will see output like this:

```
✅ Successfully created DB 'webnova-db'
Created your new D1 database.

[[d1_databases]]
binding = "webnova_db"
database_name = "webnova-db"
database_id = "abc123-xxx-xxxx-xxxx-xxxxxxxxxxxx"
```

**Copy the `database_id` value.** You will need it.

## 4. Create `wrangler.toml`

Create a file at `workers/wrangler.toml` with this content:

```toml
name = "webnova-leads"
main = "webnova-leads.js"
compatibility_date = "2024-10-01"

[[d1_databases]]
binding = "webnova_db"
database_name = "webnova-db"
database_id = "PASTE_YOUR_DATABASE_ID_HERE"   # ← Paste the ID from step 3
```

## 5. Apply the Database Schema

```bash
wrangler d1 execute webnova-db --file=./workers/schema.sql
```

This creates the `leads` table.

## 6. Deploy the Worker

From the project root, run:

```bash
wrangler deploy --config workers/wrangler.toml
```

Or go into the workers folder:

```bash
cd workers
wrangler deploy
```

After successful deployment, you will see something like:

```
✨ Success! Deployed webnova-leads
https://webnova-leads.your-username.workers.dev
```

**Copy this URL.**

## 7. Update the Frontend Form

Open this file:
`src/components/ServiceLanding.astro`

Find this line:

```js
const WORKER_URL = 'https://webnova-leads.your-account.workers.dev/lead';
```

Replace it with your real Worker URL:

```js
const WORKER_URL = 'https://webnova-leads.your-username.workers.dev/lead';
```

Then rebuild the site:

```bash
npm run build
```

---

## Useful Commands

| Command | Description |
|-------|-----------|
| `wrangler deploy` | Deploy the worker |
| `wrangler dev` | Run worker locally |
| `wrangler d1 execute webnova-db --command "SELECT * FROM leads;"` | View all leads |
| `wrangler tail webnova-leads` | Live logs from the worker |

## View Your Data

After some form submissions, you can check the data with:

```bash
wrangler d1 execute webnova-db --command "SELECT * FROM leads ORDER BY created_at DESC;"
```

Or visit your worker URL in browser for a simple dashboard:
`https://webnova-leads.your-username.workers.dev`

---

## Troubleshooting

- Make sure you pasted the correct `database_id`
- After changing `wrangler.toml`, always redeploy
- If you get auth errors, run `wrangler login` again
- Use `wrangler whoami` to check you're logged in

Let me know if you want me to help you run any of these commands or fix errors.