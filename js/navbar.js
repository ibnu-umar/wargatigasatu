// ===== STICKY NAVBAR & PROGRESS BAR =====
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.navbar-progress');
  if (!navbar) return;

  const updateScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (currentScroll > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (progressBar && winHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (currentScroll / winHeight) * 100));
      progressBar.style.width = progressPercent + '%';
    }
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();
}

// ===== MOBILE NAVBAR MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const dropdownItems = document.querySelectorAll('.nav-item');
  const navbar = document.querySelector('.navbar');
  const isMobile = () => window.innerWidth <= 992;

  const openMenu = () => {
    if (toggle) toggle.classList.add('active');
    if (menu) menu.classList.add('active');
    if (navbar) navbar.classList.add('menu-open');
  };

  const closeMenu = () => {
    if (toggle) toggle.classList.remove('active');
    if (menu) menu.classList.remove('active');
    if (navbar) navbar.classList.remove('menu-open');
  };

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu && menu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Handle dropdown accordions on mobile
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (isMobile()) {
          e.preventDefault();
          e.stopPropagation();
          const wasOpen = item.classList.contains('dropdown-open');

          dropdownItems.forEach(other => {
            if (other !== item) other.classList.remove('dropdown-open');
          });

          if (wasOpen) {
            item.classList.remove('dropdown-open');
          } else {
            item.classList.add('dropdown-open');
          }
        }
      });
    }
  });

  // Close menu when clicking navigable links
  document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (link.parentElement.querySelector('.dropdown-menu') && isMobile()) {
        return;
      }
      if (isMobile()) {
        closeMenu();
      }
    });
  });

  // Close menu when clicking outside navbar
  document.addEventListener('click', (e) => {
    if (isMobile() && menu && menu.classList.contains('active')) {
      if (navbar && !navbar.contains(e.target)) {
        closeMenu();
      }
    }
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu && menu.classList.contains('active')) {
      closeMenu();
    }
  });

  // Reset when resizing to desktop
  window.addEventListener('resize', () => {
    if (!isMobile() && menu && menu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileMenu();
});
