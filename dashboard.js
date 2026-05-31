<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>404 — JobMailer</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@700&family=Bricolage+Grotesque:wght@400;500&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="css/main.css"/>
<style>
.not-found {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 40px 24px; position: relative;
}
.nf-num {
  font-family: var(--font-display); font-size: clamp(120px, 20vw, 200px);
  font-weight: 700; line-height: 1;
  background: linear-gradient(135deg, var(--blue2), var(--cyan));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  margin-bottom: 16px; display: block;
}
.nf-title { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: white; margin-bottom: 12px; }
.nf-sub { font-size: 16px; color: var(--text2); margin-bottom: 32px; }
</style>
</head>
<body>
<nav class="nav scrolled">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo"><span class="logo-icon">⚡</span><span>JobMailer</span></a>
  </div>
</nav>
<div class="not-found">
  <div>
    <span class="nf-num">404</span>
    <div class="nf-title">Page not found</div>
    <div class="nf-sub">The page you're looking for doesn't exist or has been moved.</div>
    <a href="index.html" class="btn btn-primary btn-lg">← Back to Home</a>
  </div>
</div>
</body>
</html>
