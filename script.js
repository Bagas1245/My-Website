// Inisialisasi search bar (terpisah dari slidebar)
(function() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Daftar item yang Anda berikan
  const pages = [
    { label: 'drop', url: '#' },
    { label: 'alter', url: '#' },
    { label: 'change', url: '#' },
    { label: 'create', url: '#' },
    { label: 'column', url: '#' }
  ];

  // Render hasil pencarian
  function renderResults(matches) {
    searchResults.innerHTML = '';
    if (!matches.length) {
      searchResults.hidden = true;
      return;
    }
    matches.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p.label;
      li.role = 'option';
      li.addEventListener('click', () => {
        // Navigasi ke URL terkait; jika URL adalah '#', kita bisa berikan efek lain
        if (p.url && p.url !== '#') {
          window.location.href = p.url;
        } else {
          // Contoh aksi: alert atau fokus ke bagian tertentu
          alert(`Item "${p.label}" dipilih. Sesuaikan URL tujuan Anda.`);
        }
      });
      searchResults.appendChild(li);
    });
    searchResults.hidden = false;
  }

  // Filtering
  function filterPages(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return pages.filter(p => p.label.toLowerCase().includes(q));
  }

  // Events
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const results = filterPages(query);
    renderResults(results);
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      searchResults.hidden = true;
    }, 150);
  });

  searchInput.addEventListener('focus', () => {
    const query = searchInput.value;
    const results = filterPages(query);
    renderResults(results);
  });

  searchResults.addEventListener('mousedown', (e) => {
    // Prevent blur saat klik item
    e.preventDefault();
  });

  // Mulai dalam keadaan tersembunyi
  searchResults.hidden = true;
})();
