const intro = (text) => {
  const contentElement = document.getElementById('content');
  const mainText = document.createElement('h1');
  mainText.textContent = text;
  contentElement.appendChild(mainText);
};

intro("It's a small code for testing git commands");