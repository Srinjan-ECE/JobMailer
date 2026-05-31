# JobMailer
Get curated job opportunities in your inbox every morning. It automatically searches for fresher job openings in Java and Software Development, filters them strictly for the 2027 graduating batch, and emails you a beautifully formatted digest on a schedule you control. It also tracks GATE 2026 PSU recruitment opportunities based on your score.
📋 Table of Contents
Features
Demo
How It Works
Project Structure
Prerequisites
Installation
Configuration
Running Locally
Deploying for Free (24/7)
Dashboard Usage
Email Digest Preview
API Reference
Customisation
Troubleshooting
Contributing
License
---
✨ Features
Feature	Details
🔍 Smart job search	Uses Anthropic Claude with live web search to find real, currently open positions
🎓 2027 batch filter	Strictly excludes jobs only open to 2024/2025 batch — only shows roles accepting June 2027 graduates
📍 Location filter	Choose any cities; Kolkata is permanently excluded
💰 Salary filter	Set a minimum LPA threshold (default 5 LPA)
🏭 Company type filter	MNCs, product companies, good startups, or government PSUs
📋 GATE 2026 PSU tracker	Automatically includes relevant PSU openings (NTPC, BHEL, IOCL, etc.) based on your GATE score
✅ Difficulty rating	Each job is rated Easy / Moderate to crack — prioritises fresher-friendly hiring processes
⏰ Scheduled emails	Daily, every 2 days, or weekly — powered by `node-cron`, runs at 8 AM IST
🖥️ Web dashboard	Beautiful dark-mode UI to configure everything, trigger manual runs, and view run history
📧 HTML email digest	Rich, formatted email with job table, GATE PSU section, and direct apply links
🔁 Fallback jobs	If live search fails, a curated list of known fresher-friendly companies is used as backup
---
🎬 Demo
```
Dashboard  →  http://localhost:3000
```
The dashboard lets you:
Set your email, frequency, roles, locations, salary floor, and GATE score
Toggle the scheduler on/off with one click
Hit Run Now to get an instant digest
See the last run timestamp and job count
---
🔧 How It Works
```
┌─────────────────────────────────────────────────────────────┐
│                        node-cron                            │
│          (runs at 8 AM IST per your schedule)               │
└────────────────────────┬────────────────────────────────────┘
                         │ triggers
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    jobSearch.js                             │
│                                                             │
│  Sends prompt to Claude (claude-sonnet-4) with:             │
│  • Your role preferences                                    │
│  • 2027 batch requirement (strict)                          │
│  • Location list (Kolkata excluded)                         │
│  • Minimum salary                                           │
│  • GATE score for PSU matching                              │
│                                                             │
│  Claude uses web\_search tool to find live openings          │
│  Returns structured JSON array of matching jobs             │
│                                                             │
│  Post-filter: drops any job without 2026/2027 in            │
│  batchEligible field as a safety net                        │
└────────────────────────┬────────────────────────────────────┘
                         │ job array
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                      mailer.js                              │
│                                                             │
│  Builds a rich HTML email:                                  │
│  • Summary stats bar (total, MNCs, PSUs, easy-to-crack)     │
│  • Full job table with company, role, location, salary,     │
│    type badge, difficulty, deadline, and Apply button        │
│  • GATE 2026 PSU section with eligible companies            │
│                                                             │
│  Sends via Gmail SMTP using nodemailer                      │
└─────────────────────────────────────────────────────────────┘
                         │
                         ▼
              📧 Your inbox
```
---
📁 Project Structure
```
jobmailer/
│
├── server.js                  # Express app, API routes, cron scheduler
│
├── services/
│   ├── jobSearch.js           # Anthropic API call with web search tool
│   ├── mailer.js              # HTML email builder + nodemailer sender
│   └── config.js              # Read/write settings to config.json
│
├── public/
│   └── index.html             # Full dashboard frontend (vanilla JS)
│
├── config.json                # Auto-generated on first save (gitignored)
├── last\_run.json              # Auto-generated after each run (gitignored)
│
├── .env                       # Your secrets (gitignored — never commit)
├── .env.example               # Template to copy from
├── package.json
└── README.md
```
---
📦 Prerequisites
Node.js v18 or higher — nodejs.org
npm v9 or higher (comes with Node)
A Gmail account with 2-Step Verification enabled
An Anthropic API key — console.anthropic.com
---
🚀 Installation
1. Clone the repository
```bash
git clone https://github.com/YOUR\_USERNAME/jobmailer.git
cd jobmailer
```
2. Install dependencies
```bash
npm install
```
This installs:
Package	Purpose
`express`	Web server and API routes
`node-cron`	Cron scheduler for timed email sends
`nodemailer`	Gmail SMTP email sending
`node-fetch`	HTTP requests to Anthropic API
`dotenv`	Load environment variables from `.env`
---
⚙️ Configuration
Step 1 — Copy the environment template
```bash
cp .env.example .env
```
Step 2 — Fill in your `.env` file
```env
# ── Anthropic API ──────────────────────────────────────────
# Get your key at: https://console.anthropic.com/api-keys
ANTHROPIC\_API\_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxx

# ── Gmail SMTP ─────────────────────────────────────────────
# Your Gmail address
SMTP\_USER=your\_gmail@gmail.com

# A Gmail App Password (NOT your normal Gmail password)
# How to generate one:
#   1. Go to https://myaccount.google.com/security
#   2. Enable 2-Step Verification if not already on
#   3. Search "App passwords" → Select app: Mail → Generate
#   4. Copy the 16-character password shown
SMTP\_PASS=abcd efgh ijkl mnop

# ── Server ─────────────────────────────────────────────────
PORT=3000
```
> \*\*Important:\*\* Never commit your `.env` file. It is listed in `.gitignore` by default.
Step 3 — Configure your preferences in the dashboard
Once the server is running, open `http://localhost:3000` and use the dashboard to set:
Your recipient email address
Roles to search (Java developer, software engineer, PSU GATE, etc.)
Preferred company types (MNC, startup, PSU, product)
Locations (any Indian city except Kolkata)
Minimum salary (4, 5, 6, or 7 LPA)
GATE 2026 score (for PSU matching)
Email frequency (daily / every 2 days / weekly / manual)
Settings are saved to `config.json` in the project root.
---
🖥️ Running Locally
```bash
node server.js
```
You should see:
```
Scheduled: daily (0 8 \* \* \*) IST
JobMailer running at http://localhost:3000
```
Open your browser at http://localhost:3000.
Optional: Auto-restart on file changes (development)
```bash
npm install -g nodemon
nodemon server.js
```
---
🌐 Deploying for Free (24/7)
Once deployed, the scheduler runs automatically every morning at 8 AM IST without any action from you.
Option A — Railway (recommended, easiest)
Push your project to a GitHub repository
Go to railway.app and sign in with GitHub
Click New Project → Deploy from GitHub repo
Select your `jobmailer` repository
In the project dashboard, go to Variables and add:
```
   ANTHROPIC\_API\_KEY = your\_key
   SMTP\_USER         = your\_gmail@gmail.com
   SMTP\_PASS         = your\_app\_password
   PORT              = 3000
   ```
Railway auto-detects Node.js and deploys. Your site gets a public URL.
Free tier: Railway gives 500 hours/month free — enough to run 24/7.
---
Option B — Render
Push to GitHub
Go to render.com → New → Web Service
Connect your GitHub repo
Set:
Build command: `npm install`
Start command: `node server.js`
Add environment variables under Environment
Deploy
Free tier: Render's free tier spins down after inactivity — use Railway or Fly.io for uninterrupted scheduling.
---
Option C — Fly.io
```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Launch app
fly launch

# Set secrets
fly secrets set ANTHROPIC\_API\_KEY=xxx SMTP\_USER=xxx SMTP\_PASS=xxx

# Deploy
fly deploy
```
Free tier: 3 shared VMs free — ideal for this lightweight app.
---
Option D — Your own VPS (DigitalOcean, AWS EC2, etc.)
```bash
# On the server
git clone https://github.com/YOUR\_USERNAME/jobmailer.git
cd jobmailer
npm install
cp .env.example .env
nano .env        # fill in your keys

# Keep running with PM2
npm install -g pm2
pm2 start server.js --name jobmailer
pm2 save
pm2 startup      # auto-start on reboot
```
---
🖥️ Dashboard Usage
Control	What it does
Email address	Where the digest is sent
Frequency dropdown	Daily / Every 2 days / Weekly / Manual
Role chips	Toggle which job roles to search for
Company type chips	Filter by MNC, startup, PSU, product company
Location chips	Pick cities to include (Kolkata always excluded)
Salary options	Set minimum LPA (4 / 5 / 6 / 7)
GATE score	Your GATE 2026 CS score — used to match PSU cutoffs
Active toggle	Turns the cron scheduler on or off
Save settings	Persists config and reschedules the cron
Run Now	Immediately triggers a job search and sends the email
The Last Run section shows the timestamp and job count from the most recent execution.
---
📧 Email Digest Preview
Each email contains:
```
┌──────────────────────────────────────────────────────────────┐
│  🎓 Fresher Job Digest — 2027 Batch                          │
│  Sunday, 1 June 2026 • 5+ LPA • Excl. Kolkata               │
├────────────┬────────────┬────────────┬────────────┤
│ 10 Jobs    │ 4 MNCs     │ 3 PSU/Govt │ 8 Easy     │
├──────────────────────────────────────────────────────────────┤
│ ⚠ 2027 batch filter applied                                  │
├──────────────────────────────────────────────────────────────┤
│ Company     │ Role      │ Location │ Salary │ Type │ Apply   │
│ TCS         │ Sys Eng   │ Bengaluru│ 7 LPA  │ MNC  │ Apply → │
│ NTPC        │ Exec Train│ Delhi NCR│ 9 LPA  │ PSU  │ Apply → │
│ Zoho        │ SWE Java  │ Chennai  │ 8 LPA  │ Prod │ Apply → │
│ ...         │ ...       │ ...      │ ...    │ ...  │ ...     │
├──────────────────────────────────────────────────────────────┤
│ 📋 Your GATE 2026 Advantage (Score: 450)                     │
│ NTPC • BHEL • IOCL • HPCL • GAIL • BEL • ONGC • HAL        │
└──────────────────────────────────────────────────────────────┘
```
---
🔌 API Reference
The server exposes three REST endpoints used by the dashboard.
`GET /api/config`
Returns the current saved configuration.
Response:
```json
{
  "email": "user@gmail.com",
  "frequency": "daily",
  "roles": \["Java Developer fresher 2027 batch"],
  "companies": \["MNC", "Government PSU"],
  "locations": \["Bangalore", "Hyderabad"],
  "minSalary": "5",
  "gateScore": "450",
  "active": true
}
```
---
`POST /api/config`
Saves configuration and reschedules the cron job.
Request body: same shape as the response above.
Response:
```json
{ "ok": true, "message": "Settings saved." }
```
---
`POST /api/run-now`
Triggers an immediate job search and email send (async — returns instantly, email arrives ~30s later).
Response:
```json
{ "ok": true, "message": "Job search started. Email will arrive shortly." }
```
---
`GET /api/log`
Returns metadata from the last run.
Response (after a run):
```json
{
  "ran": true,
  "timestamp": "2026-06-01T02:30:00.000Z",
  "jobCount": 10,
  "sentTo": "user@gmail.com"
}
```
Response (no runs yet):
```json
{ "ran": false }
```
---
🎨 Customisation
Change the search prompt
Edit `services/jobSearch.js` — the `prompt` constant. You can:
Add more roles or keywords
Adjust the batch year
Add additional filter criteria (experience level, tech stack, etc.)
Change the email design
Edit `services/mailer.js` — the `html` template string uses inline CSS and is fully customisable.
Change the schedule time
Edit `server.js` — the `schedules` object:
```js
const schedules = {
  daily:      '0 8 \* \* \*',    // 8:00 AM every day
  every2days: '0 8 \*/2 \* \*',  // 8:00 AM every 2 days
  weekly:     '0 8 \* \* MON',  // 8:00 AM every Monday
};
```
Uses standard cron syntax. All times are in `Asia/Kolkata` timezone.
Add more PSUs to the email
Edit the PSU chips array in `services/mailer.js`:
```js
\['NTPC','BHEL','IOCL','HPCL','GAIL','BEL','ONGC','HAL','PGCIL','SAIL']
```
---
🛠️ Troubleshooting
Email not sending
Symptom	Fix
`Invalid login` error	Make sure `SMTP\_PASS` is a Gmail App Password, not your normal password
`Less secure app` error	App Passwords bypass this — make sure 2-Step Verification is ON
No error but no email	Check your spam folder; Gmail may flag automated senders initially
`ECONNREFUSED`	Port 465/587 may be blocked on your host — try switching nodemailer port
To switch nodemailer to port 587:
```js
// In services/mailer.js, replace the transport config with:
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user: process.env.SMTP\_USER, pass: process.env.SMTP\_PASS }
});
```
---
Jobs not found / only fallback jobs shown
This means the Anthropic API call failed or returned unparseable JSON.
Check that `ANTHROPIC\_API\_KEY` is valid and has credits
The fallback list of 10 curated companies is used automatically so you still get an email
Check server logs for the error message
---
Cron not running on deployment
Make sure the server stays alive (use PM2, Railway, or Render — not a serverless platform like Vercel/Netlify which kills processes between requests)
Verify your timezone — the cron uses `Asia/Kolkata`; Railway/Render servers default to UTC
---
`MODULE\_NOT\_FOUND` on startup
```bash
npm install
```
Make sure you ran this after cloning. The `node\_modules` folder is not committed to git.
---
🤝 Contributing
Pull requests are welcome! To contribute:
Fork the repository
Create a feature branch: `git checkout -b feature/my-feature`
Commit your changes: `git commit -m 'Add my feature'`
Push to the branch: `git push origin feature/my-feature`
Open a Pull Request
Ideas for contributions
Add support for LinkedIn Jobs API
Add Naukri.com scraping
Add Telegram bot notifications
Add a multi-user system with separate configs per email
Add job deduplication across runs (track which jobs were already sent)
Add an "auto-apply" feature for supported portals
---
📄 License
MIT License — see LICENSE for details.
---
🙏 Acknowledgements
Anthropic Claude — for the AI-powered job search with live web access
node-cron — for the scheduling backbone
Nodemailer — for reliable Gmail SMTP sending
Railway — for free, zero-config Node.js hosting
---
