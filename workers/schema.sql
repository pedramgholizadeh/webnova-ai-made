-- WebNova D1 Database Schema
-- Database name: webnova-db

DROP TABLE IF EXISTS leads;

CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  service TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  package TEXT,
  message TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Index for faster filtering by service
CREATE INDEX idx_leads_service ON leads(service);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Optional: Add a simple view for recent leads
-- CREATE VIEW recent_leads AS SELECT * FROM leads ORDER BY created_at DESC LIMIT 50;