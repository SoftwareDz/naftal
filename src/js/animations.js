// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all elements with scroll-animate class
  document.querySelectorAll('.scroll-animate').forEach(element => {
    observer.observe(element);
  });

  // Statistics counter animation
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
      current += step;
      if (current < target) {
        stat.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        stat.textContent = target.toLocaleString();
      }
    };

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        statsObserver.unobserve(stat);
      }
    });

    statsObserver.observe(stat);
  });
});