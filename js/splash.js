/**
 * ==========================================================================
 * SPLASH SCREEN CONTROLLER - WARGA RT 03 / RW 01 KELURAHAN KRAMAS (REGATU)
 * ==========================================================================
 */

(function () {
  'use strict';

  // Konfigurasi Splash Screen
  const CONFIG = {
    minDisplayTime: 1400, // Durasi minimal (ms) agar animasi terlihat elegan
    maxTimeout: 3200,     // Durasi maksimal batas pengaman (ms)
    oncePerSession: false, // Set true jika hanya ingin tampil 1x per sesi browser
    storageKey: 'regatu_splash_viewed'
  };

  // Elemen DOM
  const splash = document.getElementById('splashScreen');
  if (!splash) return;

  const progressFill = document.getElementById('splashProgress');
  const percentText = document.getElementById('splashPercent');
  const statusText = document.getElementById('splashStatusText');
  const skipBtn = document.getElementById('splashSkipBtn');
  const body = document.body;

  // Cek apakah sudah pernah dilihat dalam sesi ini (jika mode oncePerSession aktif)
  if (CONFIG.oncePerSession && sessionStorage.getItem(CONFIG.storageKey)) {
    splash.style.display = 'none';
    if (body) body.classList.remove('splash-active');
    return;
  }

  // State pengontrol
  const startTime = Date.now();
  let currentProgress = 0;
  let targetProgress = 15;
  let isPageLoaded = false;
  let isDismissed = false;
  let progressInterval = null;

  // Daftar pesan status dinamis
  const statusMessages = [
    { threshold: 0, text: 'Memuat aset portal...' },
    { threshold: 30, text: 'Menyiapkan informasi warga...' },
    { threshold: 65, text: 'Menghubungkan layanan RT 03 / RW 01...' },
    { threshold: 90, text: 'Menyempurnakan tampilan...' },
    { threshold: 100, text: 'Selamat Datang di Portal REGATU!' }
  ];

  /**
   * Update teks status berdasarkan persentase
   */
  function updateStatusText(val) {
    if (!statusText) return;
    for (let i = statusMessages.length - 1; i >= 0; i--) {
      if (val >= statusMessages[i].threshold) {
        if (statusText.textContent !== statusMessages[i].text) {
          statusText.textContent = statusMessages[i].text;
        }
        break;
      }
    }
  }

  /**
   * Update progress bar dan teks persentase
   */
  function setProgress(val) {
    currentProgress = Math.min(100, Math.max(0, val));
    if (progressFill) {
      progressFill.style.width = currentProgress + '%';
    }
    if (percentText) {
      percentText.textContent = Math.floor(currentProgress) + '%';
    }
    updateStatusText(currentProgress);
  }

  /**
   * Animasi progress berkala menuju target
   */
  progressInterval = setInterval(() => {
    if (isDismissed) return;

    if (currentProgress < targetProgress) {
      const step = Math.max(1, (targetProgress - currentProgress) * 0.18);
      setProgress(currentProgress + step);
    }

    // Naikkan target secara bertahap
    if (!isPageLoaded) {
      if (currentProgress >= 15 && targetProgress === 15) targetProgress = 45;
      else if (currentProgress >= 40 && targetProgress === 45) targetProgress = 75;
      else if (currentProgress >= 70 && targetProgress === 75) targetProgress = 88;
    }
  }, 40);

  /**
   * Selesaikan dan tutup splash screen dengan transisi halus
   */
  function finishSplash() {
    if (isDismissed) return;
    isDismissed = true;

    if (progressInterval) clearInterval(progressInterval);
    setProgress(100);

    // Tandai sudah dilihat di sessionStorage
    try {
      sessionStorage.setItem(CONFIG.storageKey, 'true');
    } catch (e) {
      // Abaikan jika cookie/storage dinonaktifkan
    }

    // Tunggu sejenak di 100% agar user sempat membaca "Selamat Datang"
    setTimeout(() => {
      splash.classList.add('splash-exit');
      splash.setAttribute('aria-hidden', 'true');

      if (body) {
        body.classList.remove('splash-active');
      }

      // Hapus display setelah animasi CSS selesai (650ms)
      setTimeout(() => {
        splash.style.display = 'none';
      }, 700);
    }, 280);
  }

  /**
   * Event saat seluruh halaman dan aset selesai dimuat
   */
  function onPageComplete() {
    isPageLoaded = true;
    targetProgress = 100;

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, CONFIG.minDisplayTime - elapsedTime);

    setTimeout(() => {
      finishSplash();
    }, remainingTime);
  }

  if (document.readyState === 'complete') {
    onPageComplete();
  } else {
    window.addEventListener('load', onPageComplete);
  }

  // Batas maksimal fallback jika koneksi/aset lambat
  setTimeout(() => {
    if (!isDismissed) {
      finishSplash();
    }
  }, CONFIG.maxTimeout);

  // Event listener tombol Lewati (Skip)
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      finishSplash();
    });
  }

  // Klik di sembarang area splash screen untuk mempercepat / skip (setelah 300ms)
  splash.addEventListener('click', () => {
    if (Date.now() - startTime > 300) {
      finishSplash();
    }
  });

  // Tombol Keyboard (Escape, Space, Enter) untuk skip
  window.addEventListener('keydown', (e) => {
    if (isDismissed) return;
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      finishSplash();
    }
  });

  // Ekspor fungsi global agar user dapat memicu ulang splash screen secara manual kapan saja
  window.triggerSplashScreen = function () {
    try {
      sessionStorage.removeItem(CONFIG.storageKey);
    } catch (e) {}
    window.location.reload();
  };
})();

