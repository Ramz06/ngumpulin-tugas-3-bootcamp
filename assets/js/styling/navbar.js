menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', () => {
    console.log("good");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
})