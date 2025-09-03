const toggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggle.innerText = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggle.innerText = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggle.innerText = '🌙';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
const carousel = document.querySelector('#carouselExample');
if (carousel) {
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: 3000,
    pause: "hover"
  });
}

// Card hover highlight
document.querySelectorAll('.resource-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = "#f8f9fa"; // subtle highlight
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = ""; // reset
  });
});
// Optional: Highlight card on hover
document.querySelectorAll('.learning-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = "#f8f9fa"; // subtle highlight
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = "";
  });
});
// Hover highlight for internship cards
document.querySelectorAll('.internship-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = "#f8f9fa";
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = "";
  });
});
// Hover highlight for employment cards
document.querySelectorAll('.employment-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = "#f8f9fa";
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = "";
  });
});


