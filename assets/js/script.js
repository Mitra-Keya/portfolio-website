(function () {
  // ==========================
  // Initial Theme Setup
  // ==========================
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // ==========================
  // Auto Update Year
  // ==========================
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ==========================
  // Theme Toggle
  // ==========================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function updateIcon() {
    if (document.documentElement.classList.contains('dark')) {
      themeIcon.className = "bx bx-sun";
      themeIcon.style.color = "#facc15"; // bright yellow
    } else {
      themeIcon.className = "bx bx-moon";
      themeIcon.style.color = "#0f172a"; // dark navy
    }
  }
  updateIcon();

  themeToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  });

  // ==========================
  // Mobile Menu Toggle
  // ==========================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle?.addEventListener('click', () => navLinks.classList.toggle('show'));
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('show'))
  );

  // ==========================
  // Fade-in Animation Observer
  // ==========================
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // ==========================
  // Scroll-to-top Button
  // ==========================
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================
  // Contact Form (EmailJS)
  // ==========================
  (function() {
    emailjs.init("SVfIu7Xvzzj3k6pTT"); // EmailJS Public Key
  })();

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form && status) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_v9sz6ig', 'template_qp00efr', this)
        .then(() => {
          status.textContent = "✅ Message sent successfully!";
          status.style.color = "green";
          form.reset();
        })
        .catch((error) => {
          status.textContent = "❌ Failed to send message. Please try again later.";
          status.style.color = "red";
          console.error('EmailJS Error:', error);
        });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".video-toggle");

  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectCard = btn.closest(".project-card");
      const videoContainer = projectCard.querySelector(".video-container");

      if (videoContainer.classList.contains("hidden")) {
        videoContainer.classList.remove("hidden");
        btn.textContent = "✖ Hide Demo";
      } else {
        videoContainer.classList.add("hidden");
        btn.textContent = "▶ Watch Demo";
      }
    });
  });
});
