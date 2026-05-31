const fs = require('fs');
const path = require('path');

// In production on Netlify, use environment variable for a simple shared store
// or integrate with a DB. For this version we use a lightweight approach.
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  let body;
  try { body = JSON.parse(event.body); } catch(_) { return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON' }) }; }

  const { email, name } = body;
  if (!email || !email.includes('@')) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid email' }) };

  // Send a welcome email
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;"><tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0">
  <tr><td style="background:linear-gradient(135deg,#0f2040,#1d4ed8);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
    <div style="font-size:40px;margin-bottom:12px;">🎓</div>
    <div style="font-size:28px;font-weight:800;color:white;margin-bottom:8px;">Welcome to JobMailer!</div>
    <div style="font-size:14px;color:#bfdbfe;">Hi ${name || 'there'} — you're all set</div>
  </td></tr>
  <tr><td style="background:white;padding:32px 40px;border-radius:0 0 16px 16px;">
    <p style="font-size:16px;color:#1e293b;line-height:1.7;">Your AI-powered job digest is now active. Here's what happens next:</p>
    <div style="background:#f8fafc;border-radius:12px;padding:20px;margin:20px 0;">
      <div style="margin-bottom:12px;display:flex;align-items:center;"><span style="font-size:20px;margin-right:12px;">🔍</span><div><strong style="color:#0f172a;">Daily job search</strong><br><span style="font-size:13px;color:#64748b;">We search 50+ portals every morning at 8 AM IST</span></div></div>
      <div style="margin-bottom:12px;"><span style="font-size:20px;margin-right:12px;">🎯</span><strong style="color:#0f172a;">Filtered for you</strong><br><span style="font-size:13px;color:#64748b;">Only 2027 batch eligible, 5+ LPA, no Kolkata</span></div>
      <div><span style="font-size:20px;margin-right:12px;">📧</span><strong style="color:#0f172a;">Curated digest</strong><br><span style="font-size:13px;color:#64748b;">Rich email with apply links, salary, and difficulty ratings</span></div>
    </div>
    <div style="text-align:center;margin-top:24px;">
      <a href="${process.env.SITE_URL || 'https://jobmailer.netlify.app'}" style="background:linear-gradient(135deg,#1d4ed8,#3b82f6);color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">Go to Dashboard →</a>
    </div>
    <p style="font-size:12px;color:#94a3b8;text-align:center;margin-top:24px;">JobMailer • AI-powered fresher job automation</p>
  </td></tr>
</table></td></tr></table></body></html>`;

  try {
    await transporter.sendMail({
      from: `"JobMailer 🎓" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '🎓 Welcome to JobMailer — your job digest is active!',
      html
    });
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch(err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
