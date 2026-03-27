// script.js
const form = document.getElementById('wishForm');
const input = document.getElementById('wishInput');
const list = document.getElementById('wishList');

// Temporary local storage demo
form.addEventListener('submit', e => {
  e.preventDefault();
  const wish = input.value.trim();
  if (wish) {
    const li = document.createElement('li');
    li.textContent = wish;
    list.appendChild(li);
    input.value = '';
  }
});
