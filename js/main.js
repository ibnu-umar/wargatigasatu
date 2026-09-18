// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initStickyNavbar();
  initMobileMenu();
  initTabs();
  initUMKMCarousel();
  initHeroSearch();
  initSearchOverlay();
  initScrollToTop();
  initScrollAnimations();
  initStatCounters();
  initGallery();
  initVideoModal();
});

// ===== HERO CAROUSEL =====
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-btn.prev');
  const nextBtn = document.querySelector('.hero-btn.next');
  let currentSlide = 0;
  let autoPlayInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(i);
      startAutoPlay();
    });
  });

  startAutoPlay();
}

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

// ===== TABS =====
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Handle direct links to Kegiatan Warga
  document.querySelectorAll('a[href="#kegiatan"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const agendaBtn = document.querySelector('.tab-btn[data-tab="tab-agenda"]');
      if (agendaBtn) {
        agendaBtn.click();
      }
    });
  });
}

// ===== UMKM CAROUSEL =====
function initUMKMCarousel() {
  const track = document.querySelector('.umkm-track');
  if (!track) return;
  const slides = document.querySelectorAll('.umkm-slide');
  if (slides.length === 0) return;
  const prevBtn = document.querySelector('.umkm-btn.prev');
  const nextBtn = document.querySelector('.umkm-btn.next');
  let currentIndex = 0;

  function goTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Auto slide
  setInterval(() => goTo(currentIndex + 1), 7000);
}

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
    title: 'Transparansi Anggaran Pendapatan & Belanja RT/Daerah',
    category: 'Informasi',
    badgeClass: 'badge-informasi',
    icon: 'fas fa-file-invoice-dollar',
    iconBg: '#e0f2fe',
    iconColor: '#0369a1',
    date: 'Tahun Anggaran 2026',
    snippet: 'Laporan terbuka kas keuangan, iuran warga, dan realisasi alokasi belanja fasilitas serta pembangunan lingkungan.',
    keywords: 'transparansi anggaran apbd kas iuran keuangan laporan bendahara terbuka',
    url: 'informasi.html#transparansi'
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

  // Quick Tags
  const quickTagBtns = document.querySelectorAll('.quick-tag-btn');
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
  const closeBtn = overlay ? overlay.querySelector('.search-close') : null;
  const overlayInput = document.getElementById('overlaySearchInput') || (overlay ? overlay.querySelector('input') : null);
  const overlayResults = document.getElementById('overlaySearchResults');

  if (!overlay) return;

  // Setup live search in overlay if results container exists
  if (overlayInput && overlayResults) {
    setupLiveSearchInstance({
      inputEl: overlayInput,
      resultsEl: overlayResults,
      onSelect: () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

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

// ===== SCROLL TO TOP =====
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===== STAT COUNTERS =====
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const endValue = parseInt(target.dataset.count);
        const suffix = target.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing function (ease-out cubic)
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easedProgress * endValue);
          target.textContent = currentValue.toLocaleString('id-ID') + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

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
