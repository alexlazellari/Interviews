//Variables
const navLinksDOM = document.querySelectorAll(".nav__link");
const activePage = window.location.pathname;

Array.from(navLinksDOM).forEach((link, index) => {
  if (link.href.includes(`${activePage}`)) {
    link.children[0].classList.add("active");
  }
});
