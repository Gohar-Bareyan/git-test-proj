// Get unqiue post

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

async function fetchSinglePost(postId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await response.json();
    showPost(post);
  } catch (error) {
    console.error(error);
  }
}

function showPost(post) {
  const contentElement = document.getElementById('content');
  const postElement = document.createElement('div');
  const titleElement = document.createElement('h1');
  const bodyElement = document.createElement('p');

  titleElement.textContent = post.title;
  bodyElement.textContent = post.body;

  postElement.appendChild(titleElement);
  postElement.appendChild(bodyElement);
  contentElement.appendChild(postElement);
}

fetchSinglePost(postId);
