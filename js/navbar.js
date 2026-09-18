// ===== STICKY NAVBAR & PROGRESS BAR =====
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  const progressBar = document.querySelector('.navbar-progress');
  if (!navbar) return;

  const updateScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (currentScroll > 30) {
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
  const isMobile = () => window.innerWidth <= 992;

  // Ensure backdrop element exists
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  const navbar = document.querySelector('.navbar');

  const openDrawer = () => {
    if (toggle) toggle.classList.add('active');
    if (menu) menu.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    if (navbar) navbar.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (toggle) toggle.classList.remove('active');
    if (menu) menu.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    if (navbar) navbar.classList.remove('drawer-open');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu && menu.classList.contains('active');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Handle dropdowns on mobile (accordion behavior)
  dropdownItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const dropdown = item.querySelector('.dropdown-menu');

    if (dropdown && link) {
      link.addEventListener('click', (e) => {
        if (isMobile()) {
          e.preventDefault();
          const wasOpen = item.classList.contains('dropdown-open');

          // Close other open dropdowns inside drawer
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

  // Close drawer when clicking a navigable link
  document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
      // If clicking dropdown toggle on mobile, don't close
      if (link.parentElement.querySelector('.dropdown-menu') && isMobile()) {
        return;
      }
      if (isMobile()) {
        closeDrawer();
      }
    });
  });

  // Swipe right on menu to close gesture
  if (menu) {
    let touchStartX = 0;
    let touchStartY = 0;

    menu.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    menu.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = Math.abs(touchEndY - touchStartY);

      // Swiped right by at least 60px with minimal vertical deviation
      if (diffX > 60 && diffY < 80 && menu.classList.contains('active')) {
        closeDrawer();
      }
    }, { passive: true });
  }

  // Close drawer on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu && menu.classList.contains('active')) {
      closeDrawer();
    }
  });

  // Reset drawer state when resizing to desktop
  window.addEventListener('resize', () => {
    if (!isMobile() && menu && menu.classList.contains('active')) {
      closeDrawer();
    }
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileMenu();
});
