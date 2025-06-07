const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thankYou');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  thankYou.style.display = 'block';
  form.reset();

  setTimeout(() => {
    thankYou.style.display = 'none';
  }, 3000);
});
