require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const path = require('path');
const { searchJobs } = require('./services/jobSearch');
const { sendDigestEmail } = require('./services/mailer');
const { loadConfig, saveConfig } = require('./services/config');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── API: Get current config ───────────────────────────────────────────────
app.get('/api/config', (req, res) => {
  res.json(loadConfig());
});

// ─── API: Save config + reschedule cron ────────────────────────────────────
app.post('/api/config', (req, res) => {
  const config = req.body;
  saveConfig(config);
  reschedule(config);
  res.json({ ok: true, message: 'Settings saved.' });
});

// ─── API: Manual trigger ───────────────────────────────────────────────────
app.post('/api/run-now', async (req, res) => {
  try {
    const config = loadConfig();
    res.json({ ok: true, message: 'Job search started. Email will arrive shortly.' });
    // run async after response
    runPipeline(config).catch(console.error);
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// ─── API: Last run log ─────────────────────────────────────────────────────
app.get('/api/log', (req, res) => {
  const fs = require('fs');
  const logPath = path.join(__dirname, 'last_run.json');
  if (fs.existsSync(logPath)) {
    res.json(JSON.parse(fs.readFileSync(logPath, 'utf-8')));
  } else {
    res.json({ ran: false });
  }
});

// ─── Core pipeline ─────────────────────────────────────────────────────────
async function runPipeline(config) {
  console.log(`[${new Date().toISOString()}] Running job search pipeline...`);
  const jobs = await searchJobs(config);
  await sendDigestEmail(config, jobs);
  const fs = require('fs');
  fs.writeFileSync(path.join(__dirname, 'last_run.json'), JSON.stringify({
    ran: true,
    timestamp: new Date().toISOString(),
    jobCount: jobs.length,
    sentTo: config.email
  }));
  console.log(`[${new Date().toISOString()}] Done. Sent ${jobs.length} jobs to ${config.email}`);
}

// ─── Cron scheduler ────────────────────────────────────────────────────────
let cronJob = null;
function reschedule(config) {
  if (cronJob) { cronJob.stop(); cronJob = null; }
  const schedules = {
    daily:      '0 8 * * *',    // every day 8 AM
    every2days: '0 8 */2 * *',  // every 2 days 8 AM
    weekly:     '0 8 * * MON',  // every Monday 8 AM
    now:        null
  };
  const expr = schedules[config.frequency];
  if (expr) {
    cronJob = cron.schedule(expr, () => runPipeline(config), { timezone: 'Asia/Kolkata' });
    console.log(`Scheduled: ${config.frequency} (${expr}) IST`);
  }
}

// Init schedule on startup
reschedule(loadConfig());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`JobMailer running at http://localhost:${PORT}`));
