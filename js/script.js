// Function to render all articles
function renderArticles() {
    const container = document.getElementById('articles-container');
    
    articles.forEach(article => {
      const articleElement = document.createElement('article');
      articleElement.className = 'card';
      articleElement.dataset.id = article.id;
      
      articleElement.innerHTML = `
        <img src="${article.image}" alt="${article.alt}">
        <div class="card-content">
          <h3>${article.title}</h3>
          <div class="article-excerpt">
            <p>${article.excerpt}</p>
          </div>
          <div class="article-full" style="display:none">
            ${article.content}
          </div>
          <button class="read-more" data-id="${article.id}">Read More</button>
        </div>
      `;
      
      container.appendChild(articleElement);
    });
  
    // Add event listeners to all read more buttons
    document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function() {
        const articleId = this.dataset.id;
        toggleArticleContent(articleId);
      });
    });
  }
  
  // Function to toggle between excerpt and full content
  function toggleArticleContent(articleId) {
    const article = document.querySelector(`.card[data-id="${articleId}"]`);
    const excerpt = article.querySelector('.article-excerpt');
    const fullContent = article.querySelector('.article-full');
    const button = article.querySelector('.read-more');
  
    if (fullContent.style.display === 'none') {
      fullContent.style.display = 'block';
      excerpt.style.display = 'none';
      button.textContent = 'Show Less';
      // Scroll to the article if it's not fully visible
      article.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      fullContent.style.display = 'none';
      excerpt.style.display = 'block';
      button.textContent = 'Read More';
    }
  }
  
  // Initialize when page loads
  document.addEventListener('DOMContentLoaded', renderArticles);