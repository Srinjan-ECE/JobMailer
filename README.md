# 🎓 JobMailer — Fresher Job Digest Automation

Automatically searches for Java/Software Developer fresher jobs (2027 batch, 5+ LPA, no Kolkata) and emails you a curated digest on a schedule. Also tracks GATE 2026 PSU opportunities.

---

## ⚡ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
Copy `.env.example` to `.env` and fill in your keys:
```bash
cp .env.example .env
```

Edit `.env`:
```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_16_char_gmail_app_password
PORT=3000
```

**How to get Gmail App Password:**
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Select "Mail" → Copy the 16-char password
4. Paste it as `SMTP_PASS`

**How to get Anthropic API Key:**
1. Go to [console.anthropic.com](https://console.anthropic.com)
2. API Keys → Create Key → Copy it

### 3. Run
```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy Free (24/7 running)

### Option A: Railway (recommended)
1. Push this folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add environment variables in Railway dashboard
4. Done — it runs 24/7 free

### Option B: Render
1. Push to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect repo, set env vars, deploy

### Option C: Fly.io
```bash
npm install -g flyctl
fly launch
fly secrets set ANTHROPIC_API_KEY=xxx SMTP_USER=xxx SMTP_PASS=xxx
fly deploy
```

---

## 📋 Features

- ✅ Searches real job portals using Anthropic web search
- ✅ Strict 2027 batch filter (excludes 2024/2025-only jobs)
- ✅ Filters by location (Kolkata always excluded)
- ✅ Minimum salary filter (default 5 LPA)
- ✅ GATE 2026 PSU tracker (NTPC, BHEL, IOCL, etc.)
- ✅ Easy-to-crack difficulty rating for each job
- ✅ Scheduled emails (daily/every 2 days/weekly) via cron
- ✅ Beautiful dashboard UI
- ✅ Run manually anytime

---

## 📁 Project Structure

```
jobmailer/
├── server.js              # Express server + cron scheduler
├── services/
│   ├── jobSearch.js       # Anthropic API job search
│   ├── mailer.js          # Nodemailer email composer
│   └── config.js          # Settings persistence
├── public/
│   └── index.html         # Dashboard frontend
├── .env.example           # Environment template
├── package.json
└── README.md
```
