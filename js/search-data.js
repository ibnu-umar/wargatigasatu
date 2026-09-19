// ===== SEARCH DATASET =====
const SEARCH_DATA = [
  // Kegiatan Warga
  {
    title: 'Lomba Volly Antar Dawis Tahun 2025',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-volleyball-ball',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    date: '27 Juli 2025',
    snippet: 'Lomba volly antar dawis acara 17 Agustusan bersama warga RT 03/RW 01 Kelurahan Kramas dan dimenangkan oleh dawis brokoli.',
    keywords: 'volly bola voli dawis brokoli 17 agustus lomba olahraga wanita kegiatan kramas juara turnamen',
    url: 'index.html#KETUA RT'
  },
  {
    title: 'Karnaval Peringatan Hari Kemerdekaan RI Tahun 2025',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-flag',
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    date: '10 Agustus 2025',
    snippet: 'Karnaval memeringati 17 Agustus bertema kemerdekaan dengan pakaian adat nusantara dan parade kreasi seni warga RT 03/RW 01.',
    keywords: 'karnaval pawai kemerdekaan baju adat kreasi seni 17 agustus budaya kostum kegiatan kramas parade',
    url: 'index.html#foto-kegiatan'
  },
  {
    title: 'Acara Jalan Sehat & Peresmian RT Baru 2025',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-walking',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    date: '28 Desember 2025',
    snippet: 'Acara jalan sehat santai warga dibarengi serah terima jabatan Bapak RT baru periode 2026-2031 penuh keakraban.',
    keywords: 'jalan sehat sertijab serah terima jabatan peresmian ketua rt guyub rukun olahraga kegiatan senam sehat',
    url: 'index.html#KETUA RT'
  },
  {
    title: 'Musyawarah & Pemilihan Ketua RT 03/RW 01 Periode 2026-2031',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-vote-yea',
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
    date: '15 Januari 2026',
    snippet: 'Kegiatan musyawarah pemilihan ketua RT baru bersama seluruh warga RT 03/RW 01 Kramas yang berlangsung demokratis, guyub, dan tertib.',
    keywords: 'pemilihan rt musyawarah voting ketua rukun tetangga demokrasi kramas slamet riyanto kegiatan warga pemilu',
    url: 'index.html#KETUA RT'
  },
  {
    title: 'Perawatan Pompa Air PAMSIMAS RT 03 RW 01',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-tint',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    date: '25 September 2023',
    snippet: 'Kegiatan rutin perawatan dan pemeliharaan mesin pompa air PAMSIMAS untuk menjaga kelancaran suplai air bersih warga RT 03 RW 01.',
    keywords: 'pamsimas pompa air bersih pemeliharaan perawatan pipa sumur kran distribusi gotong royong kramas',
    url: 'galeri.html'
  },
  {
    title: 'Kerja Sama Pembuatan Lapangan Lomba 17 Agustus',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-tools',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    date: '08 Juli 2026',
    snippet: 'Gotong royong warga dan pemuda mempersiapkan pembuatan arena lapangan untuk perlombaan semarak 17 Agustus.',
    keywords: 'lapangan lomba 17 agustus gotong royong persiapan arena kerja bakti pemuda kramas',
    url: 'galeri.html'
  },
  {
    title: 'Kegiatan Remaja Persiapan & Properti Lomba 17 Agustus',
    category: 'Kegiatan',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-paint-brush',
    iconBg: '#fce7f3',
    iconColor: '#db2777',
    date: '09-10 Juli 2026',
    snippet: 'Kreativitas para remaja RT 03/RW 01 Kramas membuat berbagai pernak-pernik dekorasi dan properti lomba kemerdekaan.',
    keywords: 'remaja pemuda karang taruna properti dekorasi kreatif lomba 17 agustus kemerdekaan kramas',
    url: 'galeri.html'
  },

  // Program & Pengumuman
  {
    title: 'Program PJR (Pemberantasan Jentik Nyamuk)',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-shield-virus',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    date: 'Setiap Hari Jumat',
    snippet: 'Pemeriksaan rutin bak penampungan air warga untuk pencegahan demam berdarah (DBD) oleh kader jumantik RT 03 Kramas.',
    keywords: 'pjr jentik nyamuk jumantik jumat dbd demam berdarah fogging air bersih abate kesehatan pengumuman',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Program Makan Bergizi Gratis Anak Tahun 2026',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-utensils',
    iconBg: '#fef9c3',
    iconColor: '#ca8a04',
    date: 'Program 2026',
    snippet: 'Pemberian asupan nutrisi dan makanan bergizi sehat untuk mendukung tumbuh kembang anak-anak serta balita sehat warga.',
    keywords: 'makan bergizi gratis anak nutrisi stunting balita makanan sehat pkk posyandu kramas informasi',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Program Pilah Sampah Rumah Tangga Mandiri',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-recycle',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    date: 'Sepanjang 2026',
    snippet: 'Pemilahan sampah organik dan anorganik dari rumah tangga, penimbangan bank sampah dawis, dan kreasi pupuk kompos.',
    keywords: 'pilah sampah daur ulang bank sampah organik anorganik plastik pupuk kompos lingkungan bersih dawis kramas',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Program Pembuatan Taman TOGA RT 03 Kramas',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-seedling',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    date: 'Tahun 2026',
    snippet: 'Pengembangan tanaman obat keluarga (TOGA) untuk penghijauan lingkungan dan apotek hidup mandiri warga RT 03 Kramas.',
    keywords: 'taman toga tanaman obat keluarga herbal penghijauan kebun apotek hidup kramas lingkungan hidup',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Kerja Bakti & Kebersihan Lingkungan Rutin',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-broom',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    date: 'Setiap Hari Minggu',
    snippet: 'Aksi gotong royong warga membersihkan saluran air (selokan), jalan lingkungan, dan fasilitas umum RT 03 Kramas.',
    keywords: 'kerja bakti gotong royong bersih selokan minggu sampah kebersihan lingkungan kramas agenda',
    url: 'kegiatan-warga.html'
  },
  {
    title: 'Pemeriksaan Kesehatan di Pospindu & Posyandu',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-heartbeat',
    iconBg: '#ffe4e6',
    iconColor: '#e11d48',
    date: 'Jadwal Bulanan',
    snippet: 'Pemeriksaan tensi darah, cek gula darah, penimbangan balita dan kontrol kesehatan lansia warga RT 03 Kramas.',
    keywords: 'pospindu posyandu kesehatan lansia balita cek tensi gula darah obat dokter perawat imunisasi',
    url: 'kegiatan-warga.html'
  },

  // Profil & Pengurus RT
  {
    title: 'Bapak Slamet Riyanto - Ketua RT 03/RW 01',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-user-tie',
    iconBg: '#f3e8ff',
    iconColor: '#7e22ce',
    date: 'Periode 2026-2031',
    snippet: 'Ketua RT 03/RW 01 Kelurahan Kramas, Kecamatan Tembalang, Kota Semarang masa bakti kepengurusan periode 2026-2031.',
    keywords: 'slamet riyanto bapak rt ketua pengurus periode 2026 2031 kramas tembalang semarang pimpinan lurah camat',
    url: 'profil.html'
  },
  {
    title: 'Ibu Sri Sutarti - Penggerak / Ketua RT 03/RW 01',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-user-check',
    iconBg: '#fdf4ff',
    iconColor: '#c026d3',
    date: 'Periode 2026-2031',
    snippet: 'Penggerak PKK, Dawis, dan kepemimpinan RT 03/RW 01 Kelurahan Kramas masa bakti 2026-2031.',
    keywords: 'sri sutarti ibu rt pkk dawis dasa wisma wanita pengurus periode 2026 kramas tembalang pimpinan',
    url: 'profil.html'
  },
  {
    title: 'Bapak Bunakur Windriatmoko - Ketua RT Demisioner',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-user-shield',
    iconBg: '#f1f5f9',
    iconColor: '#475569',
    date: 'Periode 2021-2025',
    snippet: 'Ketua RT 03/RW 01 Kelurahan Kramas periode kepengurusan masa bakti 2021-2025.',
    keywords: 'bunakur windriatmoko bapak rt demisioner mantan pengurus periode 2021 2025 kramas sejarah rt',
    url: 'index.html#KETUA RT'
  },
  {
    title: 'Visi & Misi RT 03 RW 01 Kelurahan Kramas',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-sitemap',
    iconBg: '#e0e7ff',
    iconColor: '#4338ca',
    date: 'Visi & Misi Daerah',
    snippet: 'Visi menjadi pusat ekonomi maju, berkeadilan sosial, lestari & inklusif, didukung 4 pilar misi kesejahteraan.',
    keywords: 'visi misi visi-misi program tujuan pembangunan ekonomi pendidikan kesehatan lingkungan warga kramas',
    url: 'profil.html#visi-misi'
  },
  {
    title: 'Sejarah Singkat Kramas & SD Negeri Kramas (1954)',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-landmark',
    iconBg: '#fef3c7',
    iconColor: '#b45309',
    date: 'Sejarah Daerah',
    snippet: 'Asal-usul pertumbuhan pemukiman kawasan Kramas dan berdirinya SD Negeri Kramas secara gotong royong tahun 1954.',
    keywords: 'sejarah asal usul kramas sd negeri kramas 1954 tembalang semarang cagar budaya pemukiman',
    url: 'profil.html#sejarah'
  },
  {
    title: 'Statistik Kependudukan RT 03 RW 01 Kramas',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-chart-pie',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    date: 'Data Warga',
    snippet: 'Data kependudukan RT 03 Kramas: 300 Jiwa Penduduk, 8 Kelompok Dawis, 30 KK, dan 35+ Pemuda/Remaja.',
    keywords: 'statistik data penduduk 300 jiwa 8 dawis 30 kk kepala keluarga 35 remaja pemuda kramas kependudukan',
    url: 'index.html#statistik'
  },

  // Layanan, Kontak & Komunikasi
  {
    title: 'Saluran WhatsApp Resmi RT 03/RW 01 Kramas',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fab fa-whatsapp',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    date: 'Saluran WA Resmi',
    snippet: 'Ikuti saluran WhatsApp resmi RT 03 Kramas untuk menerima berita, pengumuman, dan broadcast resmi langsung di WA.',
    keywords: 'whatsapp saluran wa channel info broadcast pengumuman nomor wa hp kontak grup warga kramas',
    url: 'kontak.html'
  },
  {
    title: 'Akun Instagram Resmi @wargatigasatu',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fab fa-instagram',
    iconBg: '#fce7f3',
    iconColor: '#db2777',
    date: '@wargatigasatu',
    snippet: 'Akun media sosial Instagram resmi untuk melihat video reels, foto dokumentasi terbaru kegiatan warga RT 03.',
    keywords: 'instagram ig @wargatigasatu medsos media sosial video reel foto update kabar berita kramas',
    url: 'kontak.html'
  },
  {
    title: 'Layanan Pengantar RT & Pengaduan Warga',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fas fa-envelope-open-text',
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    date: 'wargatigasatu@gmail.com',
    snippet: 'Pelayanan surat pengantar administrasi (KTP, KK, SKCK, domisili) dan surel aduan resmi wargatigasatu@gmail.com.',
    keywords: 'surat pengantar ktp kk kartu keluarga skck domisili pengaduan lapor email sekretariat layanan administrasi kramas',
    url: 'kontak.html'
  },
  {
    title: 'Lokasi & Alamat Rumah RT 03 (Jl. Mulawarman V)',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fas fa-map-marked-alt',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    date: 'Jl. Mulawarman V No.8A',
    snippet: 'Alamat Jl. Mulawarman V No.8A, Kramas, Tembalang, Kota Semarang (Wisma Putra Nanda) lengkap dengan rute Google Maps.',
    keywords: 'lokasi alamat peta google maps rute jalan mulawarman wisma putra nanda tembalang semarang rumah kantor rt',
    url: 'kontak.html'
  },

  // Galeri
  {
    title: 'Galeri Dokumentasi Foto Kegiatan Warga RT 03',
    category: 'Galeri',
    badgeClass: 'badge-galeri',
    icon: 'fas fa-images',
    iconBg: '#fae8ff',
    iconColor: '#a21caf',
    date: '30+ Foto Dokumentasi',
    snippet: 'Koleksi album foto lengkap kegiatan warga, pilah sampah dawis, pentas seni budaya, lomba 17-an, dan jalan sehat.',
    keywords: 'galeri album foto gambar dokumentasi karnaval lomba jalan sehat pilah sampah seni budaya kramas',
    url: 'galeri.html'
  }
];

// Helper: Escape HTML
function escapeSearchHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Helper: Highlight matching text
function highlightSearchMatches(text, query) {
  if (!text) return '';
  if (!query) return escapeSearchHtml(text);
  const words = query.trim().split(/\s+/).filter(w => w.length > 0);
  if (words.length === 0) return escapeSearchHtml(text);

  const escapedWords = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
  const safeText = escapeSearchHtml(text);
  return safeText.replace(regex, '<mark class="search-match">$1</mark>');
}

// Generic Live Search Binder
function setupLiveSearchInstance({ inputEl, resultsEl, clearBtn, formEl, onSelect }) {
  if (!inputEl || !resultsEl) return;

  let activeIndex = -1;
  let debounceTimeout = null;

  function performSearch(query) {
    const rawQuery = query.trim().toLowerCase();

    if (rawQuery.length === 0) {
      resultsEl.style.display = 'none';
      resultsEl.innerHTML = '';
      if (clearBtn) clearBtn.style.display = 'none';
      activeIndex = -1;
      return;
    }

    if (clearBtn) clearBtn.style.display = 'flex';

    const tokens = rawQuery.split(/\s+/).filter(t => t.length > 0);

    // Score search results
    const scoredResults = SEARCH_DATA.map(item => {
      const titleLower = item.title.toLowerCase();
      const snippetLower = item.snippet.toLowerCase();
      const keywordsLower = (item.keywords || '').toLowerCase();
      const categoryLower = item.category.toLowerCase();

      let score = 0;

      // Exact phrase match
      if (titleLower.includes(rawQuery)) score += 100;
      if (titleLower.startsWith(rawQuery)) score += 40;
      if (keywordsLower.includes(rawQuery)) score += 35;
      if (snippetLower.includes(rawQuery)) score += 25;
      if (categoryLower.includes(rawQuery)) score += 30;

      // Token match
      tokens.forEach(token => {
        if (titleLower.includes(token)) score += 20;
        if (keywordsLower.includes(token)) score += 15;
        if (snippetLower.includes(token)) score += 10;
        if (categoryLower.includes(token)) score += 15;
      });

      return { item, score };
    }).filter(r => r.score > 0);

    // Sort by score descending
    scoredResults.sort((a, b) => b.score - a.score);
    const matches = scoredResults.slice(0, 8).map(r => r.item);

    renderResults(matches, query);
  }

  function renderResults(matches, query) {
    activeIndex = -1;

    if (matches.length === 0) {
      resultsEl.innerHTML = `
        <div class="search-empty-state">
          <i class="fas fa-search-minus"></i>
          <p>Tidak ada hasil untuk "<strong>${escapeSearchHtml(query)}</strong>"</p>
          <span>Coba kata kunci: <em>Volly, Karnaval, Jalan Sehat, Slamet Riyanto, PAMSIMAS, WA RT</em></span>
        </div>
      `;
      resultsEl.style.display = 'block';
      return;
    }

    const html = `
      <div class="search-results-header">
        <span>Hasil Pencarian</span>
        <span class="search-results-count">${matches.length} ditemukan</span>
      </div>
      <ul class="search-results-list" role="listbox">
        ${matches.map((item, idx) => `
          <li>
            <a href="${item.url}" class="search-result-item" data-index="${idx}" role="option">
              <div class="search-result-icon" style="background-color:${item.iconBg}; color:${item.iconColor};">
                <i class="${item.icon}"></i>
              </div>
              <div class="search-result-info">
                <div class="search-result-top">
                  <span class="search-result-badge ${item.badgeClass}">${item.category}</span>
                  <span class="search-result-date"><i class="far fa-clock"></i> ${item.date}</span>
                </div>
                <h4 class="search-result-title">${highlightSearchMatches(item.title, query)}</h4>
                <p class="search-result-snippet">${highlightSearchMatches(item.snippet, query)}</p>
              </div>
            </a>
          </li>
        `).join('')}
      </ul>
    `;

    resultsEl.innerHTML = html;
    resultsEl.style.display = 'block';

    // Click handler on results
    resultsEl.querySelectorAll('.search-result-item').forEach(link => {
      link.addEventListener('click', () => {
        if (typeof onSelect === 'function') onSelect();
      });
    });
  }

  function updateActiveItem(items) {
    items.forEach((item, idx) => {
      if (idx === activeIndex) {
        item.classList.add('active');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Input event with debounce
  inputEl.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 150);
  });

  // Focus event: re-open results if text exists
  inputEl.addEventListener('focus', () => {
    if (inputEl.value.trim().length > 0) {
      performSearch(inputEl.value);
    }
  });

  // Keyboard navigation
  inputEl.addEventListener('keydown', (e) => {
    const items = resultsEl.querySelectorAll('.search-result-item');
    if (items.length === 0 || resultsEl.style.display === 'none') {
      if (e.key === 'Escape') {
        resultsEl.style.display = 'none';
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      updateActiveItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && items[activeIndex]) {
        items[activeIndex].click();
      } else if (items[0]) {
        items[0].click();
      }
    } else if (e.key === 'Escape') {
      resultsEl.style.display = 'none';
      activeIndex = -1;
    }
  });

  // Clear button click
  if (clearBtn) {
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      inputEl.value = '';
      resultsEl.style.display = 'none';
      resultsEl.innerHTML = '';
      clearBtn.style.display = 'none';
      inputEl.focus();
    });
  }

  // Form submit
  if (formEl) {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const items = resultsEl.querySelectorAll('.search-result-item');
      if (items.length > 0) {
        const target = activeIndex >= 0 ? items[activeIndex] : items[0];
        target.click();
      }
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!inputEl.contains(e.target) && !resultsEl.contains(e.target)) {
      resultsEl.style.display = 'none';
    }
  });

  return {
    triggerSearch: (text) => {
      inputEl.value = text;
      inputEl.focus();
      performSearch(text);
    }
  };
}
