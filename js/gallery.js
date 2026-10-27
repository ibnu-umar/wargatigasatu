// ===== FILTER BUTTONS & GALLERY =====
function initGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  const filterContainer = document.querySelector('.filter-tabs');
  const filterBtns = filterContainer ? filterContainer.querySelectorAll('.filter-btn') : [];
  let galleryCards = document.querySelectorAll('.gallery-card');

  // Handle generic filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const container = btn.parentElement;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Handle gallery-specific filtering
  if (galleryGrid && filterBtns.length > 0 && galleryCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter') || 'all';

        galleryCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            card.style.animation = 'fadeIn 0.35s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ===== MOBILE: Show overlay on touch/tap =====
  // On touch devices, toggle the overlay visible on first tap,
  // then open lightbox on second tap (or open directly if card is tapped on overlay).
  const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  galleryCards.forEach(card => {
    const overlay = card.querySelector('.gallery-overlay');
    if (overlay && isTouchDevice()) {
      card.addEventListener('touchstart', () => {
        // Reset all other overlays
        galleryCards.forEach(c => {
          if (c !== card) c.querySelector('.gallery-overlay')?.classList.remove('touch-visible');
        });
        overlay.classList.add('touch-visible');
      }, { passive: true });
    }
  });

  // Lightbox Modal
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!lightbox || !lightboxImg) return;

  // Ensure lightbox is mounted directly onto document.body for viewport centering
  if (lightbox.parentElement !== document.body) {
    document.body.appendChild(lightbox);
  }

  // Track current visible images for navigation
  let currentIndex = 0;

  function getVisibleCards() {
    return Array.from(document.querySelectorAll('.gallery-card')).filter(
      c => c.style.display !== 'none'
    );
  }

  function openLightbox(index, cards) {
    const card = cards[index];
    if (!card) return;
    const img = card.querySelector('.gallery-thumb img');
    const title = card.querySelector('.gallery-caption h4');
    if (!img) return;

    currentIndex = index;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Foto Kegiatan';
    if (lightboxCaption && title) {
      lightboxCaption.textContent = title.textContent;
    }
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    const cards = getVisibleCards();
    const newIndex = (currentIndex - 1 + cards.length) % cards.length;
    openLightbox(newIndex, cards);
  }

  function showNext() {
    const cards = getVisibleCards();
    const newIndex = (currentIndex + 1) % cards.length;
    openLightbox(newIndex, cards);
  }

  // Attach click to each card
  galleryCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      const cards = getVisibleCards();
      const visibleIdx = cards.indexOf(card);
      if (visibleIdx !== -1) {
        openLightbox(visibleIdx, cards);
      }
    });
  });

  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Click backdrop to close
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') showNext();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') showPrev();
  });

  // ===== Nav buttons (prev/next) =====
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

  // ===== Swipe to navigate on mobile =====
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    // Only horizontal swipe (ignore vertical drags)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) showNext();
      else showPrev();
    }
    // Swipe down to close
    if (dy > 80 && Math.abs(dx) < 40) closeLightbox();
  }, { passive: true });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});
