// Seleccionamos todos los botones de like
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
      const button = post.querySelector('.like-btn');
      const likesSpan = post.querySelector('.likes');
      let count = 0;

      button.addEventListener('click', () => {
        count++;
        likesSpan.textContent = count + " like(s)";
      });
    });