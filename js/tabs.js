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

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
});
