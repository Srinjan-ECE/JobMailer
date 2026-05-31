<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>JobMailer — AI-Powered Fresher Job Digest for India</title>
<meta name="description" content="Get curated Java & Software Dev fresher jobs (5+ LPA, 2027 batch) delivered to your inbox daily. GATE PSU tracker included. Free forever."/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Bricolage+Grotesque:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="css/main.css"/>
</head>
<body>

<!-- ═══ NAVBAR ═══════════════════════════════════════════════════ -->
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <span class="logo-icon">⚡</span>
      <span class="logo-text">JobMailer</span>
      <span class="logo-badge">BETA</span>
    </a>
    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#how">How it works</a>
      <a href="#psu">GATE PSU</a>
      <a href="dashboard.html" class="nav-cta">Open Dashboard →</a>
    </div>
    <button class="nav-hamburger" id="hamburger" aria-label="menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══ HERO ══════════════════════════════════════════════════════ -->
<section class="hero">
  <div class="hero-bg">
    <div class="hero-orb hero-orb-1"></div>
    <div class="hero-orb hero-orb-2"></div>
    <div class="hero-orb hero-orb-3"></div>
    <div class="hero-grid"></div>
  </div>

  <div class="container">
    <div class="hero-badge animate-in" style="--delay:0s">
      <span class="badge-dot"></span>
      <span>Live • Searching 50+ job portals daily</span>
    </div>

    <h1 class="hero-title animate-in" style="--delay:.1s">
      Never miss a<br/>
      <span class="gradient-text">fresher job</span><br/>
      again.
    </h1>

    <p class="hero-sub animate-in" style="--delay:.2s">
      AI-powered job digest for <strong>2027 batch</strong> CS/IT students.<br/>
      Java &amp; Software Dev roles, 5+ LPA, GATE PSU tracker — delivered to your inbox every morning.
    </p>

    <div class="hero-actions animate-in" style="--delay:.3s">
      <a href="dashboard.html" class="btn btn-primary btn-lg">
        <span>Start for free</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#how" class="btn btn-ghost btn-lg">See how it works</a>
    </div>

    <div class="hero-stats animate-in" style="--delay:.4s">
      <div class="stat"><span class="stat-num">50+</span><span class="stat-lbl">Job portals searched</span></div>
      <div class="stat-divider"></div>
      <div class="stat"><span class="stat-num">12+</span><span class="stat-lbl">PSUs via GATE 2026</span></div>
      <div class="stat-divider"></div>
      <div class="stat"><span class="stat-num">2027</span><span class="stat-lbl">Batch eligible only</span></div>
      <div class="stat-divider"></div>
      <div class="stat"><span class="stat-num">8 AM</span><span class="stat-lbl">Daily IST digest</span></div>
    </div>

    <!-- Floating email mockup -->
    <div class="hero-email-mockup animate-float">
      <div class="email-header">
        <div class="email-dots"><span></span><span></span><span></span></div>
        <div class="email-title">inbox — jobmailer@digest.ai</div>
      </div>
      <div class="email-body">
        <div class="email-subject">🎓 [2027 Batch] 12 Fresher Jobs • 5+ LPA • 1 Jun</div>
        <div class="email-jobs">
          <div class="email-job">
            <div class="ej-left">
              <div class="ej-company">Zoho Corporation</div>
              <div class="ej-role">Software Engineer — Java</div>
            </div>
            <div class="ej-right">
              <span class="ej-salary">5–10 LPA</span>
              <span class="ej-badge product">Product</span>
            </div>
          </div>
          <div class="email-job">
            <div class="ej-left">
              <div class="ej-company">NTPC Limited</div>
              <div class="ej-role">Executive Trainee — CS/IT</div>
            </div>
            <div class="ej-right">
              <span class="ej-salary">7.5–10 LPA</span>
              <span class="ej-badge psu">PSU</span>
            </div>
          </div>
          <div class="email-job">
            <div class="ej-left">
              <div class="ej-company">Accenture India</div>
              <div class="ej-role">Associate Software Engineer</div>
            </div>
            <div class="ej-right">
              <span class="ej-salary">4.5–8 LPA</span>
              <span class="ej-badge mnc">MNC</span>
            </div>
          </div>
          <div class="email-more">+9 more jobs in this digest →</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ MARQUEE ══════════════════════════════════════════════════ -->
<div class="marquee-wrap">
  <div class="marquee-track">
    <div class="marquee-inner" id="marquee">
      <span>TCS</span><span>•</span><span>Infosys</span><span>•</span><span>Wipro</span><span>•</span>
      <span>Zoho</span><span>•</span><span>Cognizant</span><span>•</span><span>NTPC</span><span>•</span>
      <span>BHEL</span><span>•</span><span>Accenture</span><span>•</span><span>IOCL</span><span>•</span>
      <span>HCL</span><span>•</span><span>Capgemini</span><span>•</span><span>GAIL</span><span>•</span>
      <span>PhonePe</span><span>•</span><span>Freshworks</span><span>•</span><span>BEL</span><span>•</span>
      <span>HAL</span><span>•</span><span>Razorpay</span><span>•</span><span>HPCL</span><span>•</span>
      <span>TCS</span><span>•</span><span>Infosys</span><span>•</span><span>Wipro</span><span>•</span>
      <span>Zoho</span><span>•</span><span>Cognizant</span><span>•</span><span>NTPC</span><span>•</span>
      <span>BHEL</span><span>•</span><span>Accenture</span><span>•</span><span>IOCL</span><span>•</span>
      <span>HCL</span><span>•</span><span>Capgemini</span><span>•</span><span>GAIL</span><span>•</span>
    </div>
  </div>
</div>

<!-- ═══ FEATURES ═════════════════════════════════════════════════ -->
<section class="section" id="features">
  <div class="container">
    <div class="section-label">Why JobMailer</div>
    <h2 class="section-title">Everything you need.<br/><span class="gradient-text">Nothing you don't.</span></h2>
    <p class="section-sub">Built specifically for Indian CS/IT students graduating in 2027. Not a generic job board.</p>

    <div class="features-grid">

      <div class="feature-card feature-card-large">
        <div class="fc-icon">🤖</div>
        <h3>AI-powered live search</h3>
        <p>Uses Claude AI with real-time web search to find jobs across Naukri, LinkedIn, company career pages, and PSU portals — every single morning.</p>
        <div class="fc-tag">Powered by Claude Sonnet</div>
      </div>

      <div class="feature-card">
        <div class="fc-icon">🎓</div>
        <h3>2027 batch filter</h3>
        <p>Strictly excludes jobs only for 2024/2025 batch. Every result is verified to accept June 2027 graduates.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">💰</div>
        <h3>Salary floor</h3>
        <p>Set your minimum — 4, 5, 6, or 7 LPA. Never see underpaying opportunities again.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">🏛️</div>
        <h3>GATE PSU tracker</h3>
        <p>Enter your GATE 2026 score. We track all PSU recruitments (NTPC, BHEL, IOCL, HPCL, GAIL, BEL, ONGC, HAL and more) matching your score.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">✅</div>
        <h3>Difficulty rating</h3>
        <p>Every job is rated Easy or Moderate to crack. We prioritise mass hiring, campus drives, and structured processes.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">📍</div>
        <h3>Location filter</h3>
        <p>Pick any Indian city. Kolkata is permanently excluded by default. Remote/WFH roles included.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">📬</div>
        <h3>Scheduled digests</h3>
        <p>Daily (8 AM IST), every 2 days, or weekly. Or trigger manually from the dashboard any time.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">🔗</div>
        <h3>Direct apply links</h3>
        <p>Every job in the email has a direct link to the company careers page, Naukri listing, or official portal.</p>
      </div>

      <div class="feature-card">
        <div class="fc-icon">🧩</div>
        <h3>Interview rounds info</h3>
        <p>Know the interview process before you apply — aptitude test, coding round, technical interviews, HR round.</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══ HOW IT WORKS ═════════════════════════════════════════════ -->
<section class="section section-dark" id="how">
  <div class="container">
    <div class="section-label" style="color:#67e8f9">How it works</div>
    <h2 class="section-title" style="color:white">Set up in <span class="gradient-text">2 minutes.</span><br/>Works forever.</h2>

    <div class="steps-grid">
      <div class="step">
        <div class="step-num">01</div>
        <h3>Configure once</h3>
        <p>Set your email, select your preferred roles, locations, salary floor, and GATE score in the dashboard. Takes under 2 minutes.</p>
      </div>
      <div class="step-arrow">→</div>
      <div class="step">
        <div class="step-num">02</div>
        <h3>AI searches daily</h3>
        <p>Every morning at 8 AM IST, our AI searches 50+ job portals for openings matching your exact criteria and 2027 batch requirement.</p>
      </div>
      <div class="step-arrow">→</div>
      <div class="step">
        <div class="step-num">03</div>
        <h3>Digest lands in inbox</h3>
        <p>A beautifully formatted email with job cards, salary info, difficulty ratings, skills required, interview process, and direct apply links.</p>
      </div>
    </div>

    <div class="how-cta">
      <a href="dashboard.html" class="btn btn-primary btn-lg">Configure my digest →</a>
    </div>
  </div>
</section>

<!-- ═══ PSU SECTION ═══════════════════════════════════════════════ -->
<section class="section" id="psu">
  <div class="container">
    <div class="section-label">GATE 2026 PSU Tracker</div>
    <h2 class="section-title">Your GATE score is<br/><span class="gradient-text">your superpower.</span></h2>
    <p class="section-sub">With a GATE 2026 score in CS/IT, you're eligible for government sector recruitment at India's top PSUs — some of the most stable, well-paying jobs in the country.</p>

    <div class="psu-grid">
      <div class="psu-card"><div class="psu-logo">⚡</div><div class="psu-name">NTPC</div><div class="psu-salary">7.5–10 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">⚙️</div><div class="psu-name">BHEL</div><div class="psu-salary">6.5–9 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🛢️</div><div class="psu-name">IOCL</div><div class="psu-salary">8–12 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🔥</div><div class="psu-name">HPCL</div><div class="psu-salary">7–10 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">💨</div><div class="psu-name">GAIL</div><div class="psu-salary">7–10 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">📡</div><div class="psu-name">BEL</div><div class="psu-salary">6–9 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🛩️</div><div class="psu-name">HAL</div><div class="psu-salary">6.5–9 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🏗️</div><div class="psu-name">ONGC</div><div class="psu-salary">7–11 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">⚡</div><div class="psu-name">PGCIL</div><div class="psu-salary">7–9 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🔩</div><div class="psu-name">SAIL</div><div class="psu-salary">6–9 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">🌾</div><div class="psu-name">NFL</div><div class="psu-salary">6–8 LPA</div></div>
      <div class="psu-card"><div class="psu-logo">⛏️</div><div class="psu-name">MECL</div><div class="psu-salary">5.5–8 LPA</div></div>
    </div>

    <div class="psu-note">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      All salaries are approximate CTC. JobMailer tracks official notifications and alerts you when applications open.
    </div>
  </div>
</section>

<!-- ═══ TESTIMONIALS ═════════════════════════════════════════════ -->
<section class="section section-tinted">
  <div class="container">
    <div class="section-label">From our users</div>
    <h2 class="section-title">Students <span class="gradient-text">love it.</span></h2>

    <div class="testimonials-grid">
      <div class="testimonial">
        <div class="t-stars">★★★★★</div>
        <p>"Got the NTPC notification the same morning applications opened. Never would have caught it otherwise. My GATE score of 480 got me shortlisted!"</p>
        <div class="t-author"><div class="t-avatar">A</div><div><strong>Arjun S.</strong><div class="t-school">NIT Warangal • CS 2027</div></div></div>
      </div>
      <div class="testimonial">
        <div class="t-stars">★★★★★</div>
        <p>"The difficulty rating is genius. I only applied to jobs marked 'Easy to crack' and had 4 offers in 3 months. Zoho was my first choice — landed it!"</p>
        <div class="t-author"><div class="t-avatar">P</div><div><strong>Priya M.</strong><div class="t-school">VIT Vellore • IT 2027</div></div></div>
      </div>
      <div class="testimonial">
        <div class="t-stars">★★★★★</div>
        <p>"Saves me 2 hours every day. I used to manually check Naukri, LinkedIn, and company sites. Now everything comes to my inbox, filtered perfectly."</p>
        <div class="t-author"><div class="t-avatar">R</div><div><strong>Rahul K.</strong><div class="t-school">BITS Pilani • CS 2027</div></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ CTA ═══════════════════════════════════════════════════════ -->
<section class="section-cta">
  <div class="cta-bg">
    <div class="cta-orb cta-orb-1"></div>
    <div class="cta-orb cta-orb-2"></div>
  </div>
  <div class="container" style="position:relative;z-index:1;text-align:center;">
    <h2 class="cta-title">Ready to automate<br/>your job hunt?</h2>
    <p class="cta-sub">Free forever. No credit card. No signup required.<br/>Just enter your email in the dashboard and go.</p>
    <a href="dashboard.html" class="btn btn-white btn-xl">
      Open Dashboard — it's free
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>

<!-- ═══ FOOTER ════════════════════════════════════════════════════ -->
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo"><span class="logo-icon">⚡</span> JobMailer</div>
        <p>AI-powered fresher job digest for India's 2027 CS/IT graduating batch.</p>
      </div>
      <div class="footer-links">
        <div class="footer-col">
          <div class="footer-col-title">Product</div>
          <a href="dashboard.html">Dashboard</a>
          <a href="#features">Features</a>
          <a href="#psu">GATE PSU</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Resources</div>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="#how">How it works</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 JobMailer. Built for India's 2027 batch.</span>
      <span>Made with ❤️ using Claude AI</span>
    </div>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
