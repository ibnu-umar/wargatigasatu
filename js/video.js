// ===== VIDEO MODAL & PLAYER =====
function initVideoModal() {
  const videoCards = document.querySelectorAll('.video-card');
  const videoModal = document.getElementById('videoModal');
  const videoPlayer = document.getElementById('videoPlayer');
  const videoModalClose = document.getElementById('videoModalClose');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoModalMeta = document.getElementById('videoModalMeta');

  if (!videoCards.length) return;

  function openVideoModal(videoSrc, title, meta) {
    if (!videoModal || !videoPlayer) return;

    videoPlayer.src = videoSrc;
    if (videoModalTitle) videoModalTitle.textContent = title || 'Video Dokumenter';
    if (videoModalMeta) videoModalMeta.textContent = meta || '';

    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Autoplay when opened
    videoPlayer.load();
    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser autoplay policy might require user click on player
      });
    }
  }

  function closeVideoModal() {
    if (!videoModal || !videoPlayer) return;
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function playInline(card) {
    const videoSrc = card.getAttribute('data-video-src');
    const thumbArea = card.querySelector('.video-thumb');
    if (!thumbArea || !videoSrc) return;

    // Replace thumbnail area with HTML5 video player
    thumbArea.innerHTML = `
      <video controls autoplay playsinline style="width:100%; height:100%; object-fit:contain; background:#000;">
        <source src="${videoSrc}" type="video/mp4">
        Browser Anda tidak mendukung tag video.
      </video>
    `;
    const v = thumbArea.querySelector('video');
    if (v) v.play().catch(() => {});
  }

  videoCards.forEach(card => {
    // Open modal on clicking the card
    card.addEventListener('click', (e) => {
      // If inline play button was clicked, don't open modal
      if (e.target.closest('.btn-inline-play')) {
        e.stopPropagation();
        playInline(card);
        return;
      }

      // If user clicked inside an already running inline video, do nothing
      if (e.target.tagName === 'VIDEO' || e.target.closest('video')) {
        return;
      }

      const videoSrc = card.getAttribute('data-video-src');
      const title = card.getAttribute('data-video-title') || card.querySelector('.video-caption h4')?.textContent;
      const meta = card.getAttribute('data-video-meta') || card.querySelector('.video-caption span')?.textContent;

      if (videoSrc) {
        openVideoModal(videoSrc, title, meta);
      }
    });

    // Support explicit inline play button
    const inlineBtn = card.querySelector('.btn-inline-play');
    if (inlineBtn) {
      inlineBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        playInline(card);
      });
    }
  });

  if (videoModalClose) {
    videoModalClose.addEventListener('click', closeVideoModal);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideoModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
      closeVideoModal();
    }
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initVideoModal();
});
