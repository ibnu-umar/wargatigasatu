// ===== HERO LIVE SEARCH =====
function initHeroSearch() {
  const inputEl = document.getElementById('heroSearchInput');
  const resultsEl = document.getElementById('heroSearchResults');
  const clearBtn = document.getElementById('heroSearchClear');
  const formEl = document.getElementById('heroSearchForm');

  if (!inputEl || !resultsEl) return;

  const searchController = setupLiveSearchInstance({
    inputEl,
    resultsEl,
    clearBtn,
    formEl
  });

  // Quick Tags in Hero Section
  const quickTagBtns = document.querySelectorAll('.hero-quick-tags .quick-tag-btn');
  quickTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const query = btn.getAttribute('data-query');
      if (query && searchController) {
        searchController.triggerSearch(query);
      }
    });
  });
}

// ===== SEARCH OVERLAY =====
function initSearchOverlay() {
  const searchBtns = document.querySelectorAll('.btn-search');
  const overlay = document.querySelector('.search-overlay');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.search-close');
  const overlayInput = document.getElementById('overlaySearchInput') || overlay.querySelector('input');
  const overlayResults = document.getElementById('overlaySearchResults');

  let overlayController = null;

  // Setup live search in overlay if results container exists
  if (overlayInput && overlayResults) {
    overlayController = setupLiveSearchInstance({
      inputEl: overlayInput,
      resultsEl: overlayResults,
      onSelect: () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Quick Tags in Search Overlay
  const overlayQuickTags = overlay.querySelectorAll('.quick-tag-btn');
  overlayQuickTags.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const query = btn.getAttribute('data-query');
      if (query && overlayController) {
        overlayController.triggerSearch(query);
      }
    });
  });

  // Open overlay
  searchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (overlayInput) {
        setTimeout(() => overlayInput.focus(), 150);
      }
    });
  });

  // Close overlay
  function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (overlayResults) overlayResults.style.display = 'none';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeOverlay);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeOverlay();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initHeroSearch();
  initSearchOverlay();
});
