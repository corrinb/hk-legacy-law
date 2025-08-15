
// Simple helper for footer year and contact form mailto fallback
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;
    if (!name || !email || !message || !consent) {
      alert('Please complete the required fields and consent.'); return;
    }
    const subject = encodeURIComponent('Website inquiry from ' + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    // Static-site friendly: open email client
    window.location.href = `mailto:David@HKLegacyLaw.com?subject=${subject}&body=${body}`;
  });
}
