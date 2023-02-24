const button = document.getElementById('my-button');
const nav = document.getElementById('is-sticky');

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});
