const navToggle = document.querySelector('.navegacao');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
}); 


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

function copyText() {
      
  /* Copia o texto */
  navigator.clipboard.writeText
      ("contatocarmo777@gmail.com");
}