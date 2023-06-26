async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    showPosts(posts);
  } catch (error) {
    console.error(error);
  }
}

function showPosts(posts) {
  const contentElement = document.getElementById('content');
  posts.forEach(post => {
    const postElement = document.createElement('p');
    postElement.textContent = `${post.id}. ${post.title}`;
    postElement.addEventListener('click', () => {
      window.location.href = `post.html?id=${post.id}`;
    });
    contentElement.appendChild(postElement);
  });
}

fetchPosts();