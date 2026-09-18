// ===== SEARCH DATASET =====
const SEARCH_DATA = [
  // Berita
  {
    title: 'Lomba Volly Antar Dawis Tahun 2025',
    category: 'Berita',
    badgeClass: 'badge-berita',
    icon: 'fas fa-volleyball-ball',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    date: '27 Juli 2025',
    snippet: 'Lomba volly antar dawis acara 17 Agustusan bersama warga RT 03/RW 01 Kelurahan Kramas dan dimenangkan oleh dawis brokoli.',
    keywords: 'volly bola voli dawis brokoli 17 agustus lomba olahraga wanita',
    url: 'berita.html'
  },
  {
    title: 'Karnaval Peringatan Hari Kemerdekaan RI Tahun 2025',
    category: 'Berita',
    badgeClass: 'badge-berita',
    icon: 'fas fa-flag',
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    date: '10 Agustus 2025',
    snippet: 'Karnaval memeringati 17 Agustus bertema kemerdekaan dengan pakaian adat nusantara dan parade kreasi seni warga RT 03/RW 01.',
    keywords: 'karnaval pawai kemerdekaan baju adat kreasi seni 17 agustus budaya kostum',
    url: 'berita.html'
  },
  {
    title: 'Acara Jalan Sehat & Peresmian RT Baru 2025',
    category: 'Berita',
    badgeClass: 'badge-berita',
    icon: 'fas fa-walking',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    date: '28 Desember 2025',
    snippet: 'Acara jalan sehat santai warga dibarengi serah terima jabatan Bapak RT baru periode 2026-2031 penuh keakraban.',
    keywords: 'jalan sehat sertijab serah terima jabatan peresmian ketua rt guyub rukun olahraga',
    url: 'berita.html'
  },
  {
    title: 'Musyawarah & Pemilihan Ketua RT 03/RW 01 Periode 2026-2031',
    category: 'Berita',
    badgeClass: 'badge-berita',
    icon: 'fas fa-vote-yea',
    iconBg: '#ede9fe',
    iconColor: '#7c3aed',
    date: '15 Januari 2026',
    snippet: 'Kegiatan musyawarah pemilihan ketua RT baru bersama seluruh warga RT 03/RW 01 Kramas yang berlangsung demokratis, guyub, dan tertib.',
    keywords: 'pemilihan rt musyawarah voting ketua rukun tetangga demokrasi kramas slamet riyanto',
    url: 'berita.html'
  },
  {
    title: 'Pawai Kreasi & Pesta Seni Budaya Warga',
    category: 'Berita',
    badgeClass: 'badge-berita',
    icon: 'fas fa-theater-masks',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    date: 'Tahun 2025',
    snippet: 'Partisipasi antusias warga menampilkan ragam busana adat tradisional dan kreasi kebudayaan nusantara.',
    keywords: 'seni budaya adat pawai musik tari pertunjukan kreativitas warga kramas',
    url: 'berita.html'
  },

  // Agenda Kegiatan
  {
    title: 'Kerja Bakti & Kebersihan Lingkungan Rutin',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-broom',
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    date: 'Setiap Hari Minggu',
    snippet: 'Aksi gotong royong membersihkan saluran air (selokan), pekarangan, dan fasilitas umum lingkungan RT 03.',
    keywords: 'kerja bakti gotong royong bersih selokan minggu sampah kebersihan lingkungan',
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
    snippet: 'Pemeriksaan tensi darah, gula darah, penimbangan balita dan kesehatan lansia warga RT 03 Kramas.',
    keywords: 'pospindu posyandu kesehatan lansia balita cek tensi gula darah obat dokter perawat',
    url: 'kegiatan-warga.html'
  },
  {
    title: 'Musyawarah Perencanaan Pembangunan (Musrenbang)',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'far fa-calendar-alt',
    iconBg: '#e0e7ff',
    iconColor: '#4338ca',
    date: '15 September 2026',
    snippet: 'Forum rembug warga tahunan untuk menyerap aspirasi usulan sarana prasarana, ekonomi, dan program RT 03/RW 01.',
    keywords: 'musrenbang musyawarah pembangunan perencanaan usulan anggaran warga gedung sasana',
    url: 'kegiatan-warga.html'
  },
  {
    title: 'Jalan Sehat & Senam Bersama Warga 31',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-running',
    iconBg: '#f0fdf4',
    iconColor: '#15803d',
    date: '18 September 2026',
    snippet: 'Peringatan Hari Kesehatan dengan rute santai 5K, pembagian doorprize, tensi gratis, dan sarapan bersama.',
    keywords: 'jalan sehat senam kebugaran doorprize sarapan alun-alun olahraga',
    url: 'kegiatan-warga.html'
  },
  {
    title: 'Gelar Expo UMKM & Pesta Rakyat Daerah',
    category: 'Agenda',
    badgeClass: 'badge-agenda',
    icon: 'fas fa-store',
    iconBg: '#fef3c7',
    iconColor: '#b45309',
    date: '22-25 September 2026',
    snippet: 'Pameran 150+ produk usaha mikro kecil warga, kuliner nusantara, dan panggung pertunjukan musik lokal.',
    keywords: 'umkm expo bazar pasar rakyat kuliner produk usaha dagang stand kerajinan',
    url: 'kegiatan-warga.html'
  },

  // Informasi & Pengumuman
  {
    title: 'Program PJR (Pemberantasan Jentik Nyamuk)',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-shield-virus',
    iconBg: '#fef3c7',
    iconColor: '#d97706',
    date: 'Setiap Hari Jumat',
    snippet: 'Pemeriksaan rutin bak penampungan air warga untuk pencegahan demam berdarah (DBD) oleh kader jumantik.',
    keywords: 'pjr jentik nyamuk jumantik jumat dbd demam berdarah fogging air bersih abate kesehatan',
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
    snippet: 'Pemberian asupan gizi sehat untuk mendukung tumbuh kembang anak-anak dan generasi sehat di lingkungan warga.',
    keywords: 'makan bergizi gratis anak nutrisi stunting balita makanan sehat program pemerintah',
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
    snippet: 'Pemilahan sampah organik dan anorganik dari rumah tangga serta pengelolaan bank sampah warga.',
    keywords: 'pilah sampah daur ulang bank sampah organik anorganik plastik lingkungan bersih',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Program Pembuatan Taman Toga RT 03 Kramas',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-seedling',
    iconBg: '#ecfdf5',
    iconColor: '#059669',
    date: 'Tahun 2026',
    snippet: 'Pengembangan tanaman obat keluarga (TOGA) untuk penghijauan lingkungan dan apotek hidup mandiri warga.',
    keywords: 'taman toga tanaman obat keluarga herbal penghijauan kebun apotek hidup kramas',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Pendaftaran Beasiswa Berprestasi S1 & Diploma',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-graduation-cap',
    iconBg: '#ede9fe',
    iconColor: '#6d28d9',
    date: '10 September 2026',
    snippet: 'Bantuan biaya pendidikan penuh bagi putra-putri daerah dan warga berprestasi tingkat perguruan tinggi.',
    keywords: 'beasiswa kuliah pendidikan sarjana diploma s1 bantuan biaya sekolah pintar prestasi',
    url: 'informasi.html#pengumuman'
  },
  {
    title: 'Pemeliharaan Berkala Jaringan Air Bersih PDAM',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-tint',
    iconBg: '#e0f2fe',
    iconColor: '#0284c7',
    date: '17 September 2026',
    snippet: 'Pemberitahuan perawatan teknis pipa distribusi saluran air bersih PDAM untuk kelancaran suplai warga.',
    keywords: 'air pdam air bersih saluran pipa pemeliharaan gangguan pompa',
    url: 'informasi.html#pengumuman'
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
    snippet: 'Ketua RT 03/RW 01 Kelurahan Kramas, Kecamatan Tembalang, Kota Semarang periode kepengurusan 2026-2031.',
    keywords: 'slamet riyanto bapak rt ketua pengurus periode 2026 kramas tembalang semarang',
    url: 'profil.html'
  },
  {
    title: 'Bapak Bunakur Windriatmoko - Ketua RT Demisioner',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-user-check',
    iconBg: '#f1f5f9',
    iconColor: '#475569',
    date: 'Periode 2021-2025',
    snippet: 'Ketua RT 03/RW 01 Kelurahan Kramas periode kepengurusan masa bakti 2021-2025.',
    keywords: 'bunakur windriatmoko bapak rt demisioner mantan pengurus periode 2021 2025 kramas',
    url: 'profil.html'
  },
  {
    title: 'Visi, Misi & Struktur Organisasi RT 03 Kramas',
    category: 'Profil',
    badgeClass: 'badge-profil',
    icon: 'fas fa-sitemap',
    iconBg: '#fdf4ff',
    iconColor: '#c026d3',
    date: 'Profil RT 03/RW 01',
    snippet: 'Visi Melayani & Membangun, struktur pengurus sekretaris, bendahara, dan seksi-seksi kegiatan kemasyarakatan.',
    keywords: 'visi misi struktur organisasi pengurus sekretaris bendahara seksi pelayanan kramas',
    url: 'profil.html'
  },

  // Layanan & Kontak
  {
    title: 'Layanan Pengantar RT & Administrasi Kependudukan',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fas fa-file-alt',
    iconBg: '#ffe4e6',
    iconColor: '#e11d48',
    date: 'Layanan Warga',
    snippet: 'Pelayanan surat pengantar pembuatan KTP, KK, SKCK, surat keterangan domisili, dan pengantar kelurahan.',
    keywords: 'surat pengantar ktp kk kartu keluarga skck domisili administrasi kependudukan surat izin',
    url: 'kontak.html'
  },
  {
    title: 'Call Center & Layanan Pengaduan Warga Kramas',
    category: 'Layanan',
    badgeClass: 'badge-layanan',
    icon: 'fas fa-phone-alt',
    iconBg: '#fee2e2',
    iconColor: '#b91c1c',
    date: '(021) 3100-3100',
    snippet: 'Layanan pusat bantuan, informasi darurat, pelaporan kendala fasilitas, dan kontak sekretariat RT 03.',
    keywords: 'kontak call center telepon darurat nomor wa pengaduan lapor balai warga kramas',
    url: 'kontak.html'
  },

  // Galeri
  {
    title: 'Galeri Dokumentasi Foto & Video Kegiatan Warga',
    category: 'Galeri',
    badgeClass: 'badge-galeri',
    icon: 'fas fa-images',
    iconBg: '#fae8ff',
    iconColor: '#a21caf',
    date: 'Dokumentasi',
    snippet: 'Koleksi album foto karnaval adat, volly dawis, pemilihan RT baru, dan video momen kebersamaan warga.',
    keywords: 'galeri foto video dokumentasi album gambar kenangan kegiatan warga kramas',
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
          <span>Coba kata kunci: <em>Volly, Karnaval, Jalan Sehat, Kerja Bakti, Slamet Riyanto</em></span>
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
