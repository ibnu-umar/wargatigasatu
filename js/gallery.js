// ===== FILTER BUTTONS & GALLERY =====
function initGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  const filterContainer = document.querySelector('.filter-tabs');
  const filterBtns = filterContainer ? filterContainer.querySelectorAll('.filter-btn') : [];
  const galleryCards = document.querySelectorAll('.gallery-card');

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

  // Lightbox Modal
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    galleryCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.gallery-thumb img');
        const title = card.querySelector('.gallery-caption h4');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Foto Kegiatan';
          if (lightboxCaption && title) {
            lightboxCaption.textContent = title.textContent;
          }
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});
