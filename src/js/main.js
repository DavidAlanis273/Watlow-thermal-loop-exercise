document.addEventListener('DOMContentLoaded', () => {

  //Header scroll effect
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });


  //Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  let overlay = null;

  menuToggle.addEventListener('click', () => {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'nav-overlay';
      overlay.innerHTML = `
        <button class="nav-overlay__close" aria-label="Close menu">&times;</button>
        <a href="#products">Products</a>
        <a href="#industries">Industries</a>
        <a href="#about">About Us</a>
        <a href="#resources">Resources</a>
        <a href="#careers">Careers</a>
        <a href="#contact" class="btn btn--primary">Contact Us</a>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector('.nav-overlay__close').addEventListener('click', closeOverlay);
      overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeOverlay);
      });
    }

    requestAnimationFrame(() => {
      overlay.classList.add('nav-overlay--active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeOverlay() {
    if (overlay) {
      overlay.classList.remove('nav-overlay--active');
      document.body.style.overflow = '';
    }
  }


  //Scroll animations for all sections
  const animatedElements = document.querySelectorAll(
    '.solution-card, .industry-card, .news-item, .loop-explainer__text, .loop-diagram, .stat-card, .manufacturing__map, .tagline__text, .section-header, .news__image, .footer__brand, .footer__links'
  );

  animatedElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px) scale(0.95)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  // Add staggered delays within each group
  const staggerGroups = [
    { selector: '.solutions__grid .solution-card', delay: 0.1 },
    { selector: '.industries__grid .industry-card', delay: 0.08 },
    { selector: '.stats__grid .stat-card', delay: 0.15 },
    { selector: '.news__list .news-item', delay: 0.08 },
    { selector: '.footer__grid .footer__links', delay: 0.1 },
  ];

  staggerGroups.forEach(group => {
    document.querySelectorAll(group.selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * group.delay}s`;
    });
  });

  // Single observer
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
      } else {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(40px) scale(0.95)';
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => scrollObserver.observe(el));


  //Smooth scroll for anchor links 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});