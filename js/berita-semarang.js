/**
 * ==========================================================================
 * BERITA KOTA SEMARANG SYNC & FILTER
 * Integrasi rilis berita resmi dari https://www.semarangkota.go.id/id/news
 * ==========================================================================
 */

(function () {
  'use strict';

  const API_ENDPOINT = 'https://cms.semarangkota.go.id/api/v1/publication?limit=12';
  const BASE_NEWS_URL = 'https://www.semarangkota.go.id/id/news';
  const FALLBACK_IMG = 'images/logo.jpg';

  const grid = document.getElementById('semarangBeritaGrid');
  const searchInput = document.getElementById('beritaSearchInput');
  const countBadge = document.getElementById('beritaCountBadge');

  if (!grid) return;

  /**
   * Helper pembersih string HTML
   */
  function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').trim();
  }

  /**
   * Filter lokal berita berdasarkan input pencarian
   */
  function setupSearchFilter() {
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      const q = this.value.toLowerCase().trim();
      const cards = grid.querySelectorAll('.berita-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const title = (card.querySelector('.card-body h3') || {}).textContent || '';
        const desc = (card.querySelector('.card-body p') || {}).textContent || '';
        const match = !q || title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);

        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (countBadge) {
        countBadge.textContent = visibleCount + ' Berita';
      }
    });
  }

  /**
   * Render kartu berita tunggal
   */
  function createCardElement(item) {
    const card = document.createElement('div');
    card.className = 'berita-card';

    const slug = item.slug || '';
    const newsUrl = `${BASE_NEWS_URL}/${slug}`;
    const title = item.title || 'Berita Kota Semarang';
    const rawDesc = stripHtml(item.content || item.short_description || '');
    const desc = rawDesc.length > 150 ? rawDesc.substring(0, 150) + '...' : rawDesc;
    const pubDate = item.pub_date || 'Terbaru';
    const imageUrl = item.image || FALLBACK_IMG;
    const category = (item.category && item.category[0] && item.category[0].name) ? item.category[0].name : 'Berita';

    card.innerHTML = `
      <a href="${newsUrl}" target="_blank" rel="noopener noreferrer" class="berita-card-link" title="${title}">
        <div class="card-image">
          <img src="${imageUrl}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src='${FALLBACK_IMG}';">
        </div>
        <div class="card-meta">
          <span class="category"><i class="fas fa-tag"></i> ${category}</span>
          <span><i class="far fa-calendar-alt"></i> ${pubDate}</span>
        </div>
        <div class="card-body">
          <h3>${title}</h3>
          <p>${desc}</p>
          <span class="berita-readmore">
            <span>Baca Selengkapnya</span>
            <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </a>
    `;

    return card;
  }

  /**
   * Fetch live berita dari CMS Pemkot Semarang
   */
  async function fetchLiveNews() {
    try {
      const response = await fetch(API_ENDPOINT, {
        headers: { 'Accept': 'application/json' },
        cache: 'default'
      });

      if (!response.ok) return;

      const result = await response.json();
      if (!result || !Array.isArray(result.data) || result.data.length === 0) return;

      // Jika data valid didapat, update isi grid
      grid.innerHTML = '';
      result.data.forEach(item => {
        grid.appendChild(createCardElement(item));
      });

      if (countBadge) {
        countBadge.textContent = result.data.length + ' Berita (Live)';
      }
    } catch (err) {
      // Jika offline atau error, biarkan static HTML yang sudah ada
      console.log('Menggunakan berita statis cache lokal:', err);
    }
  }

  // Inisialisasi
  setupSearchFilter();
  fetchLiveNews();
})();
