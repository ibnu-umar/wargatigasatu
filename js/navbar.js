// ===== STICKY NAVBAR & PROGRESS BAR =====
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.navbar-progress');
  if (!navbar) return;

  const updateScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (currentScroll > 40) {
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

// ===== MOBILE DRAWER MENU =====
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  const dropdownItems = document.querySelectorAll('.nav-item');
  const closeBtn = document.querySelector('.nav-menu-close');

  // Ensure backdrop element exists
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  const openDrawer = () => {
    if (toggle) toggle.classList.add('active');
    if (menu) menu.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (toggle) toggle.classList.remove('active');
    if (menu) menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = menu && menu.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Handle dropdowns on mobile
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 880) {
          e.preventDefault();
          item.classList.toggle('dropdown-open');
        }
      });
    }
  });

  // Close menu on navigation link click (non-dropdown)
  document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      if (link.parentElement.querySelector('.dropdown-menu') && window.innerWidth <= 880) {
        return;
      }
      if (window.innerWidth <= 880) {
        closeDrawer();
      }
    });
  });

  // Close drawer on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu && menu.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Reset drawer state when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 880 && menu && menu.classList.contains('active')) {
      closeDrawer();
    }
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileMenu();
});
