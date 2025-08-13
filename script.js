  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
      const text = article.textContent.toLowerCase();
      if (text.includes(filter)) {
        article.style.display = '';
      } else {
        article.style.display = 'none';
      }
    });
  });

  const toggleBtn = document.getElementById('darkModeToggle');
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
