<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>JobMailer — Fresher Job Digest Automation</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet" />
<style>
/* ── Reset & tokens ─────────────────────────────────────────────── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --navy:#0a1628;
  --navy2:#0f2040;
  --blue:#1a6fce;
  --blue2:#2485f0;
  --accent:#00d4aa;
  --accent2:#00b896;
  --gold:#f5a623;
  --danger:#e85555;
  --success:#22c97a;
  --surface:#111c2e;
  --surface2:#162235;
  --surface3:#1d2d45;
  --border:#1e3050;
  --border2:#243756;
  --text:#e8eef8;
  --text2:#8ca0be;
  --text3:#546880;
  --radius:12px;
  --radius-sm:8px;
  --radius-lg:18px;
  --shadow:0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg:0 8px 48px rgba(0,0,0,0.5);
}
html{scroll-behavior:smooth;}
body{
  background:var(--navy);
  color:var(--text);
  font-family:'DM Sans',sans-serif;
  font-size:15px;
  line-height:1.6;
  min-height:100vh;
}

/* ── Noise grain overlay ────────────────────────────────────────── */
body::before{
  content:'';
  position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events:none;
  z-index:0;
  opacity:0.6;
}

/* ── Layout ─────────────────────────────────────────────────────── */
.page{
  max-width:960px;
  margin:0 auto;
  padding:0 24px 80px;
  position:relative;
  z-index:1;
}

/* ── Hero header ────────────────────────────────────────────────── */
.hero{
  padding:56px 0 40px;
  display:flex;
  align-items:flex-start;
  gap:24px;
}
.hero-icon{
  width:64px;height:64px;
  background:linear-gradient(135deg,var(--blue),var(--accent));
  border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  font-size:28px;
  flex-shrink:0;
  box-shadow:0 8px 32px rgba(26,111,206,0.4);
}
.hero-text h1{
  font-family:'Syne',sans-serif;
  font-size:32px;
  font-weight:800;
  line-height:1.15;
  color:#fff;
  letter-spacing:-0.5px;
}
.hero-text h1 span{color:var(--accent);}
.hero-text p{
  margin-top:8px;
  color:var(--text2);
  font-size:14px;
  max-width:500px;
}

/* ── Status bar ─────────────────────────────────────────────────── */
.status-bar{
  display:flex;
  align-items:center;
  gap:12px;
  background:var(--surface2);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:14px 18px;
  margin-bottom:28px;
}
.status-dot{
  width:10px;height:10px;
  border-radius:50%;
  background:var(--text3);
  flex-shrink:0;
  transition:background .3s;
}
.status-dot.active{background:var(--success);box-shadow:0 0 8px var(--success);}
.status-dot.running{background:var(--gold);animation:pulse 1s infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.status-text{font-size:13px;color:var(--text2);}
.status-text strong{color:var(--text);}
.status-time{margin-left:auto;font-size:12px;color:var(--text3);}

/* ── Grid ───────────────────────────────────────────────────────── */
.grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;}
.grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:20px;}
@media(max-width:640px){.grid,.grid-3{grid-template-columns:1fr;}}

/* ── Card ───────────────────────────────────────────────────────── */
.card{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:var(--radius-lg);
  padding:24px;
}
.card.full{grid-column:1/-1;}
.card-label{
  font-size:11px;
  font-weight:600;
  letter-spacing:1.5px;
  text-transform:uppercase;
  color:var(--text3);
  margin-bottom:16px;
  display:flex;
  align-items:center;
  gap:8px;
}
.card-label::after{
  content:'';flex:1;
  height:1px;
  background:var(--border);
}

/* ── Input ──────────────────────────────────────────────────────── */
input[type=email],input[type=number],input[type=text],select{
  width:100%;
  background:var(--surface2);
  border:1px solid var(--border2);
  border-radius:var(--radius-sm);
  color:var(--text);
  font-family:'DM Sans',sans-serif;
  font-size:14px;
  padding:11px 14px;
  outline:none;
  transition:border-color .2s,box-shadow .2s;
}
input:focus,select:focus{
  border-color:var(--blue);
  box-shadow:0 0 0 3px rgba(26,111,206,0.15);
}
select option{background:var(--surface2);}
label.field-label{
  display:block;
  font-size:12px;
  color:var(--text2);
  margin-bottom:6px;
  font-weight:500;
}

/* ── Chips ──────────────────────────────────────────────────────── */
.chips{display:flex;flex-wrap:wrap;gap:7px;}
.chip{
  font-size:12px;
  font-weight:500;
  padding:5px 13px;
  border-radius:20px;
  border:1px solid var(--border2);
  color:var(--text2);
  cursor:pointer;
  background:var(--surface2);
  transition:all .15s;
  user-select:none;
}
.chip:hover{border-color:var(--blue);color:var(--text);}
.chip.on{
  background:rgba(26,111,206,0.15);
  border-color:var(--blue);
  color:#7ab8f5;
}
.chip.on-green{
  background:rgba(0,212,170,0.12);
  border-color:var(--accent);
  color:var(--accent);
}

/* ── Salary selector ────────────────────────────────────────────── */
.salary-options{display:flex;gap:8px;flex-wrap:wrap;}
.salary-opt{
  padding:8px 18px;
  border-radius:var(--radius-sm);
  border:1px solid var(--border2);
  background:var(--surface2);
  color:var(--text2);
  cursor:pointer;
  font-size:13px;
  font-weight:500;
  transition:all .15s;
}
.salary-opt.on{
  background:rgba(245,166,35,0.15);
  border-color:var(--gold);
  color:var(--gold);
}

/* ── Buttons ────────────────────────────────────────────────────── */
.btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:12px 24px;
  border-radius:var(--radius-sm);
  font-family:'DM Sans',sans-serif;
  font-size:14px;
  font-weight:600;
  cursor:pointer;
  border:none;
  transition:all .2s;
  text-decoration:none;
}
.btn-primary{
  background:linear-gradient(135deg,var(--blue),var(--blue2));
  color:white;
  box-shadow:0 4px 16px rgba(26,111,206,0.35);
}
.btn-primary:hover{transform:translateY(-1px);box-shadow:0 6px 24px rgba(26,111,206,0.45);}
.btn-primary:active{transform:translateY(0);}
.btn-primary:disabled{opacity:.5;cursor:not-allowed;transform:none;}
.btn-accent{
  background:linear-gradient(135deg,var(--accent2),var(--accent));
  color:#0a2a22;
  box-shadow:0 4px 16px rgba(0,212,170,0.3);
}
.btn-accent:hover{transform:translateY(-1px);}
.btn-ghost{
  background:var(--surface2);
  border:1px solid var(--border2);
  color:var(--text2);
}
.btn-ghost:hover{border-color:var(--blue);color:var(--text);}
.btn-danger{
  background:rgba(232,85,85,0.15);
  border:1px solid rgba(232,85,85,0.4);
  color:var(--danger);
}
.btn-danger:hover{background:rgba(232,85,85,0.25);}
.btn-sm{padding:8px 16px;font-size:13px;}
.btn-full{width:100%;justify-content:center;}

/* ── Toggle switch ──────────────────────────────────────────────── */
.toggle-wrap{display:flex;align-items:center;gap:12px;}
.toggle{
  position:relative;width:48px;height:26px;
  flex-shrink:0;
}
.toggle input{opacity:0;width:0;height:0;}
.toggle-slider{
  position:absolute;inset:0;
  background:var(--surface3);
  border-radius:13px;
  border:1px solid var(--border2);
  cursor:pointer;
  transition:.3s;
}
.toggle-slider::before{
  content:'';
  position:absolute;
  left:3px;top:50%;transform:translateY(-50%);
  width:18px;height:18px;
  background:var(--text3);
  border-radius:50%;
  transition:.3s;
}
.toggle input:checked + .toggle-slider{
  background:rgba(0,212,170,0.2);
  border-color:var(--accent);
}
.toggle input:checked + .toggle-slider::before{
  left:25px;
  background:var(--accent);
  box-shadow:0 0 8px rgba(0,212,170,0.5);
}
.toggle-text{font-size:14px;color:var(--text2);}
.toggle-text strong{color:var(--text);}

/* ── Metric cards ───────────────────────────────────────────────── */
.metric{
  background:var(--surface2);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:18px 20px;
  display:flex;
  flex-direction:column;
  gap:4px;
}
.metric-num{
  font-family:'Syne',sans-serif;
  font-size:28px;
  font-weight:700;
  color:#fff;
}
.metric-label{font-size:12px;color:var(--text3);}

/* ── Alert / toast ──────────────────────────────────────────────── */
.alert{
  padding:12px 16px;
  border-radius:var(--radius-sm);
  font-size:13px;
  margin-top:16px;
  display:none;
  align-items:flex-start;
  gap:10px;
}
.alert.show{display:flex;}
.alert-success{background:rgba(34,201,122,0.12);border:1px solid rgba(34,201,122,0.3);color:#5ce0a8;}
.alert-error{background:rgba(232,85,85,0.12);border:1px solid rgba(232,85,85,0.3);color:#f08080;}
.alert-info{background:rgba(26,111,206,0.12);border:1px solid rgba(26,111,206,0.3);color:#7ab8f5;}

/* ── Progress ───────────────────────────────────────────────────── */
.progress-wrap{display:none;margin-top:14px;}
.progress-wrap.show{display:block;}
.progress-bar{
  height:4px;
  background:var(--surface3);
  border-radius:2px;
  overflow:hidden;
  margin-bottom:6px;
}
.progress-fill{
  height:100%;
  width:0%;
  background:linear-gradient(90deg,var(--blue),var(--accent));
  border-radius:2px;
  transition:width .4s ease;
}
.progress-label{font-size:12px;color:var(--text2);}

/* ── Log table ──────────────────────────────────────────────────── */
.log-row{
  display:flex;
  align-items:center;
  gap:12px;
  padding:12px 0;
  border-bottom:1px solid var(--border);
  font-size:13px;
}
.log-row:last-child{border-bottom:none;}
.log-icon{
  width:32px;height:32px;
  border-radius:8px;
  display:flex;align-items:center;justify-content:center;
  font-size:14px;
  flex-shrink:0;
}
.log-success-icon{background:rgba(34,201,122,0.12);}
.log-info-icon{background:rgba(26,111,206,0.12);}

/* ── GATE badge ─────────────────────────────────────────────────── */
.gate-section{
  background:linear-gradient(135deg,rgba(0,212,170,0.08),rgba(26,111,206,0.08));
  border:1px solid rgba(0,212,170,0.2);
  border-radius:var(--radius);
  padding:20px;
}
.psu-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;}
.psu-chip{
  padding:4px 12px;
  background:rgba(0,212,170,0.1);
  border:1px solid rgba(0,212,170,0.25);
  border-radius:20px;
  font-size:12px;
  font-weight:600;
  color:var(--accent);
}

/* ── Divider ────────────────────────────────────────────────────── */
.divider{border:none;border-top:1px solid var(--border);margin:24px 0;}

/* ── Save indicator ─────────────────────────────────────────────── */
.save-dot{
  width:6px;height:6px;border-radius:50%;
  background:var(--text3);
  display:inline-block;
  margin-right:6px;
  transition:background .3s;
}
.save-dot.saved{background:var(--success);}
</style>
</head>
<body>
<div class="page">

  <!-- ── Hero ─────────────────────────────────────────────────── -->
  <div class="hero">
    <div class="hero-icon">🎓</div>
    <div class="hero-text">
      <h1>JobMailer <span>2027</span></h1>
      <p>Automated fresher job digest — Java &amp; Software Dev, 5+ LPA, GATE PSU tracker. Set it once, get emails forever.</p>
    </div>
  </div>

  <!-- ── Status bar ────────────────────────────────────────────── -->
  <div class="status-bar">
    <div class="status-dot" id="statusDot"></div>
    <div class="status-text" id="statusText"><strong>Inactive</strong> — configure settings and activate below</div>
    <div class="status-time" id="statusTime"></div>
  </div>

  <!-- ── Metrics ───────────────────────────────────────────────── -->
  <div class="grid-3" id="metrics" style="margin-bottom:24px;">
    <div class="metric"><div class="metric-num" id="mTotal">—</div><div class="metric-label">Last jobs found</div></div>
    <div class="metric"><div class="metric-num" id="mSent">—</div><div class="metric-label">Emails sent</div></div>
    <div class="metric"><div class="metric-num" id="mNext">—</div><div class="metric-label">Next run</div></div>
  </div>

  <!-- ── Settings ──────────────────────────────────────────────── -->
  <div class="card full" style="margin-bottom:20px;">
    <div class="card-label">⚙ Your Settings</div>

    <div class="grid">
      <div>
        <label class="field-label">Your email address</label>
        <input type="email" id="emailInput" placeholder="your@gmail.com" />
      </div>
      <div>
        <label class="field-label">Email digest frequency</label>
        <select id="frequency">
          <option value="daily">Daily (every morning 8 AM IST)</option>
          <option value="every2days">Every 2 days</option>
          <option value="weekly">Weekly (Monday 8 AM IST)</option>
          <option value="now">Manual only (use Run Now)</option>
        </select>
      </div>
    </div>

    <div class="divider"></div>

    <div style="margin-bottom:18px;">
      <label class="field-label" style="margin-bottom:10px;">Job roles to search</label>
      <div class="chips" id="roleChips">
        <span class="chip on" data-val="Java Developer fresher 2027 batch">Java Developer (fresher)</span>
        <span class="chip on" data-val="Software Developer fresher 2027 batch">Software Developer (fresher)</span>
        <span class="chip on" data-val="Software Engineer fresher campus 2027">Software Engineer (fresher)</span>
        <span class="chip on" data-val="Backend Developer Java fresher India">Backend Developer — Java</span>
        <span class="chip on-green on" data-val="PSU Executive Trainee GATE CS IT 2026">PSU / Govt via GATE 2026</span>
      </div>
    </div>

    <div style="margin-bottom:18px;">
      <label class="field-label" style="margin-bottom:10px;">Company types</label>
      <div class="chips" id="companyChips">
        <span class="chip on" data-val="MNC">MNCs</span>
        <span class="chip on" data-val="Good Startup">Good startups</span>
        <span class="chip on" data-val="Government PSU">Govt / PSU</span>
        <span class="chip on" data-val="Product company">Product companies</span>
        <span class="chip" data-val="Service company">Service companies</span>
      </div>
    </div>

    <div style="margin-bottom:18px;">
      <label class="field-label" style="margin-bottom:10px;">Locations <span style="color:var(--text3);font-size:11px;">(Kolkata always excluded)</span></label>
      <div class="chips" id="locationChips">
        <span class="chip on" data-val="Bangalore">Bengaluru</span>
        <span class="chip on" data-val="Hyderabad">Hyderabad</span>
        <span class="chip on" data-val="Pune">Pune</span>
        <span class="chip on" data-val="Chennai">Chennai</span>
        <span class="chip on" data-val="Mumbai">Mumbai</span>
        <span class="chip on" data-val="Delhi NCR">Delhi NCR</span>
        <span class="chip on" data-val="Remote">Remote / WFH</span>
        <span class="chip" data-val="Ahmedabad">Ahmedabad</span>
        <span class="chip" data-val="Noida">Noida</span>
      </div>
    </div>

    <div class="grid">
      <div>
        <label class="field-label" style="margin-bottom:10px;">Minimum salary</label>
        <div class="salary-options" id="salaryOpts">
          <span class="salary-opt" data-val="4">4+ LPA</span>
          <span class="salary-opt on" data-val="5">5+ LPA</span>
          <span class="salary-opt" data-val="6">6+ LPA</span>
          <span class="salary-opt" data-val="7">7+ LPA</span>
        </div>
      </div>
      <div>
        <label class="field-label">GATE 2026 score (CS/IT)</label>
        <input type="number" id="gateScore" value="450" min="0" max="1000" />
      </div>
    </div>

    <div class="divider"></div>

    <!-- Activate toggle -->
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
      <label class="toggle-wrap" style="cursor:pointer;">
        <div class="toggle">
          <input type="checkbox" id="activeToggle" onchange="toggleActive()" />
          <div class="toggle-slider"></div>
        </div>
        <div class="toggle-text"><strong id="toggleLabel">Inactive</strong> — click to activate automatic emails</div>
      </label>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-ghost btn-sm" onclick="saveSettings()">
          <span class="save-dot" id="saveDot"></span> Save settings
        </button>
        <button class="btn btn-primary btn-sm" id="runBtn" onclick="runNow()">
          ▶ Run now
        </button>
      </div>
    </div>

    <!-- Alert -->
    <div class="alert" id="alert"></div>

    <!-- Progress -->
    <div class="progress-wrap" id="progress">
      <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
      <div class="progress-label" id="progressLabel">Starting...</div>
    </div>
  </div>

  <!-- ── GATE Info ──────────────────────────────────────────────── -->
  <div class="card full" style="margin-bottom:20px;">
    <div class="card-label">📋 GATE 2026 PSU Tracker</div>
    <div class="gate-section">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <div style="font-family:'Syne',sans-serif;font-size:36px;font-weight:800;color:var(--accent);" id="gateDisplay">450</div>
        <div>
          <div style="color:var(--text);font-weight:600;">Your GATE 2026 Score (CS/IT)</div>
          <div style="color:var(--text2);font-size:13px;">Eligible for most PSU recruitments (cutoff typically 350–550)</div>
        </div>
      </div>
      <div style="font-size:13px;color:var(--text2);margin-bottom:8px;">PSUs you qualify for based on your score:</div>
      <div class="psu-chips">
        <span class="psu-chip">NTPC</span>
        <span class="psu-chip">BHEL</span>
        <span class="psu-chip">IOCL</span>
        <span class="psu-chip">HPCL</span>
        <span class="psu-chip">GAIL</span>
        <span class="psu-chip">BEL</span>
        <span class="psu-chip">ONGC</span>
        <span class="psu-chip">HAL</span>
        <span class="psu-chip">PGCIL</span>
        <span class="psu-chip">SAIL</span>
      </div>
    </div>
  </div>

  <!-- ── Last run log ───────────────────────────────────────────── -->
  <div class="card full">
    <div class="card-label">📬 Last Run</div>
    <div id="logSection">
      <div style="color:var(--text3);font-size:13px;padding:12px 0;">No runs yet. Hit "Run Now" or activate the scheduler.</div>
    </div>
  </div>

  <!-- ── Setup instructions ────────────────────────────────────── -->
  <div class="card full" style="margin-top:20px;">
    <div class="card-label">🚀 How to deploy this website (run 24/7)</div>
    <div style="font-size:13px;color:var(--text2);line-height:2;">
      <div style="margin-bottom:12px;padding:12px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border2);">
        <div style="color:var(--accent);font-weight:600;margin-bottom:6px;">Step 1 — Set up your .env file</div>
        <code style="color:#7ab8f5;font-size:12px;font-family:monospace;">
          ANTHROPIC_API_KEY=your_key_here<br>
          SMTP_USER=your_gmail@gmail.com<br>
          SMTP_PASS=your_16char_app_password
        </code>
        <div style="color:var(--text3);font-size:12px;margin-top:6px;">Get Gmail App Password: myaccount.google.com → Security → 2-Step Verification → App passwords</div>
      </div>
      <div style="margin-bottom:12px;padding:12px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border2);">
        <div style="color:var(--gold);font-weight:600;margin-bottom:6px;">Step 2 — Install &amp; run locally</div>
        <code style="color:#7ab8f5;font-size:12px;font-family:monospace;">
          npm install<br>
          node server.js
        </code>
      </div>
      <div style="padding:12px;background:var(--surface2);border-radius:var(--radius-sm);border:1px solid var(--border2);">
        <div style="color:#c084fc;font-weight:600;margin-bottom:6px;">Step 3 — Deploy free on Railway / Render / Fly.io</div>
        <div style="color:var(--text3);font-size:12px;">Push to GitHub → connect to Railway.app → add env vars → deploy. Free tier runs 24/7.</div>
        <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
          <a href="https://railway.app" target="_blank" class="btn btn-ghost btn-sm">Railway →</a>
          <a href="https://render.com" target="_blank" class="btn btn-ghost btn-sm">Render →</a>
          <a href="https://fly.io" target="_blank" class="btn btn-ghost btn-sm">Fly.io →</a>
        </div>
      </div>
    </div>
  </div>

</div>

<script>
// ── State ──────────────────────────────────────────────────────────
let cfg = {};
let emailsSent = 0;

// ── Init ───────────────────────────────────────────────────────────
async function init() {
  await loadConfig();
  await loadLog();
  document.getElementById('gateScore').addEventListener('input', e => {
    document.getElementById('gateDisplay').textContent = e.target.value;
  });
}

// ── Load config from backend ───────────────────────────────────────
async function loadConfig() {
  try {
    const r = await fetch('/api/config');
    cfg = await r.json();
    applyConfig(cfg);
  } catch(_) { applyConfig({}); }
}

function applyConfig(c) {
  if (c.email)      document.getElementById('emailInput').value = c.email;
  if (c.frequency)  document.getElementById('frequency').value = c.frequency;
  if (c.gateScore) {
    document.getElementById('gateScore').value = c.gateScore;
    document.getElementById('gateDisplay').textContent = c.gateScore;
  }

  if (c.roles) applyChips('roleChips', c.roles);
  if (c.companies) applyChips('companyChips', c.companies);
  if (c.locations) applyChips('locationChips', c.locations);
  if (c.minSalary) applySalary(c.minSalary);

  if (c.active) {
    document.getElementById('activeToggle').checked = true;
    updateToggleUI(true);
  }
  updateStatusBar(c);
}

function applyChips(id, vals) {
  document.querySelectorAll(`#${id} .chip`).forEach(c => {
    c.classList.toggle('on', vals.includes(c.dataset.val));
  });
}

function applySalary(val) {
  document.querySelectorAll('#salaryOpts .salary-opt').forEach(o => {
    o.classList.toggle('on', o.dataset.val === String(val));
  });
}

// ── Chip toggles ───────────────────────────────────────────────────
document.querySelectorAll('.chips').forEach(g => {
  g.querySelectorAll('.chip').forEach(c => {
    c.addEventListener('click', () => {
      c.classList.toggle('on');
      markUnsaved();
    });
  });
});

document.querySelectorAll('#salaryOpts .salary-opt').forEach(o => {
  o.addEventListener('click', () => {
    document.querySelectorAll('#salaryOpts .salary-opt').forEach(x => x.classList.remove('on'));
    o.classList.add('on');
    markUnsaved();
  });
});

['emailInput','frequency','gateScore'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => {
    markUnsaved();
    if (id === 'gateScore') document.getElementById('gateDisplay').textContent = document.getElementById('gateScore').value;
  });
});

// ── Collect current form values ────────────────────────────────────
function collectConfig() {
  return {
    email:     document.getElementById('emailInput').value.trim(),
    frequency: document.getElementById('frequency').value,
    gateScore: document.getElementById('gateScore').value,
    roles:     [...document.querySelectorAll('#roleChips .chip.on')].map(c => c.dataset.val),
    companies: [...document.querySelectorAll('#companyChips .chip.on')].map(c => c.dataset.val),
    locations: [...document.querySelectorAll('#locationChips .chip.on')].map(c => c.dataset.val),
    minSalary: document.querySelector('#salaryOpts .salary-opt.on')?.dataset.val || '5',
    active:    document.getElementById('activeToggle').checked
  };
}

// ── Save settings ──────────────────────────────────────────────────
async function saveSettings() {
  const c = collectConfig();
  if (!c.email) { showAlert('Please enter your email address.', 'error'); return; }
  try {
    const r = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(c)
    });
    const d = await r.json();
    if (d.ok) {
      cfg = c;
      markSaved();
      showAlert('Settings saved! Scheduler updated.', 'success');
      updateStatusBar(c);
    }
  } catch(e) {
    showAlert('Failed to save: ' + e.message, 'error');
  }
}

// ── Toggle active ──────────────────────────────────────────────────
function toggleActive() {
  const on = document.getElementById('activeToggle').checked;
  updateToggleUI(on);
  saveSettings();
}

function updateToggleUI(on) {
  document.getElementById('toggleLabel').textContent = on ? 'Active' : 'Inactive';
}

// ── Run now ────────────────────────────────────────────────────────
async function runNow() {
  const c = collectConfig();
  if (!c.email) { showAlert('Enter your email first.', 'error'); return; }

  // save first
  await fetch('/api/config', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(c) });

  const btn = document.getElementById('runBtn');
  btn.disabled = true;
  btn.textContent = '⏳ Running...';
  showProgress(0, 'Triggering job search...');
  showAlert('Job search started! Email will arrive in ~30 seconds.', 'info');

  try {
    const r = await fetch('/api/run-now', { method: 'POST' });
    const d = await r.json();
    if (d.ok) {
      animateProgress();
      emailsSent++;
      document.getElementById('mSent').textContent = emailsSent;
    } else {
      showAlert('Error: ' + d.message, 'error');
      hideProgress();
    }
  } catch(e) {
    showAlert('Server error: ' + e.message, 'error');
    hideProgress();
  }
  btn.disabled = false;
  btn.textContent = '▶ Run now';

  setTimeout(async () => {
    await loadLog();
    hideProgress();
  }, 35000);
}

// ── Load last run log ──────────────────────────────────────────────
async function loadLog() {
  try {
    const r = await fetch('/api/log');
    const d = await r.json();
    const el = document.getElementById('logSection');
    if (d.ran) {
      document.getElementById('mTotal').textContent = d.jobCount || '—';
      emailsSent = d.emailsTotal || emailsSent;
      document.getElementById('mSent').textContent = emailsSent || 1;
      const dt = new Date(d.timestamp);
      el.innerHTML = `
        <div class="log-row">
          <div class="log-icon log-success-icon">✅</div>
          <div>
            <div style="font-weight:500;color:var(--text);">${d.jobCount} jobs found &amp; emailed to ${d.sentTo}</div>
            <div style="font-size:12px;color:var(--text3);">${dt.toLocaleString('en-IN',{timeZone:'Asia/Kolkata'})} IST</div>
          </div>
        </div>`;
      document.getElementById('statusDot').className = 'status-dot active';
      document.getElementById('statusText').innerHTML = `<strong>Active</strong> — last ran successfully, ${d.jobCount} jobs sent`;
      document.getElementById('statusTime').textContent = dt.toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'}) + ' IST';
    }
  } catch(_) {}
}

// ── Status bar ─────────────────────────────────────────────────────
function updateStatusBar(c) {
  const dot  = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  const next = document.getElementById('mNext');

  if (c.active && c.frequency !== 'now') {
    dot.className = 'status-dot active';
    const schedMap = { daily:'Every day 8 AM IST', every2days:'Every 2 days 8 AM IST', weekly:'Every Monday 8 AM IST' };
    text.innerHTML = `<strong>Scheduler active</strong> — ${schedMap[c.frequency] || ''}`;
    next.textContent = c.frequency === 'daily' ? 'Tomorrow 8 AM' : c.frequency === 'weekly' ? 'Next Monday' : 'In 2 days';
  } else {
    dot.className = 'status-dot';
    text.innerHTML = '<strong>Manual mode</strong> — click "Run now" to send digest';
    next.textContent = 'Manual';
  }
}

// ── Progress animation ─────────────────────────────────────────────
function showProgress(pct, label) {
  document.getElementById('progress').className = 'progress-wrap show';
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = label;
}
function hideProgress() {
  document.getElementById('progress').className = 'progress-wrap';
}
function animateProgress() {
  const steps = [
    [15, 'Searching job portals and GATE PSU sites...'],
    [35, 'Filtering for 2027 batch eligibility...'],
    [55, 'Checking salary and location criteria...'],
    [72, 'Composing your email digest...'],
    [88, 'Sending via Gmail SMTP...'],
    [100,'Done! Check your inbox.']
  ];
  let i = 0;
  const go = () => {
    if (i >= steps.length) return;
    showProgress(steps[i][0], steps[i][1]);
    i++;
    setTimeout(go, 5000);
  };
  go();
}

// ── Alert ──────────────────────────────────────────────────────────
function showAlert(msg, type) {
  const el = document.getElementById('alert');
  el.textContent = msg;
  el.className = `alert show alert-${type}`;
  setTimeout(() => el.className = 'alert', 6000);
}

// ── Save indicator ─────────────────────────────────────────────────
function markUnsaved() { document.getElementById('saveDot').className = 'save-dot'; }
function markSaved()   { document.getElementById('saveDot').className = 'save-dot saved'; }

// ── Boot ───────────────────────────────────────────────────────────
init();
</script>
</body>
</html>
