(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');
  if ((saved === 'dark') || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // Update icon based on theme
  function updateIcon() {
    if (document.documentElement.classList.contains('dark')) {
      themeIcon.className = "bx bx-sun";  
      themeIcon.style.color = "#facc15"; // bright yellow for sun
    } else {
      themeIcon.className = "bx bx-moon"; 
      themeIcon.style.color = "#0f172a"; // dark navy for moon
    }
  }
  updateIcon();

  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('show'));
  });

  // 🔹 Fade-in Animation Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });

  // 🔹 Scroll-to-top button logic
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    (function(){
      emailjs.init("SVfIu7Xvzzj3k6pTT"); // your EmailJS Public Key
    })();

    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('service_v9sz6ig', 'template_qp00efr', this)
        .then(() => {
          status.innerHTML = "✅ Message sent successfully!";
          status.style.color = "green";
          form.reset();
        }, (error) => {
          status.innerHTML = "❌ Failed to send message. Please try again later.";
          status.style.color = "red";
          console.error('EmailJS Error:', error);
        });
    });
  }

});
