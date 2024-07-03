let navbar = document.querySelector('.navbar');
let foods = document.querySelector('.home .foods');

window.onscroll = () => {
  // Make Navbar fixed then change position of Search Form
  if (window.scrollY >= 50) {
    navbar.classList.add('active');
    foods.classList.add('active');
  }
  if (window.scrollY < 50) {
    navbar.classList.remove('active');
    foods.classList.remove('active');
  }
}