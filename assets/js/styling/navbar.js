const nav = document.querySelector("nav");
nav.innerHTML = `
    <div class="hamburger-menu">☰</div>
    <ul class="nav-links">
        <li>
            <img src="assets/img/logo.png" alt="" srcset="">
        </li>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="blogs.html">Blog</a>
        </li>
        <li>
            <button><a href="contact.html">Contact Me</a></button>
        </li>
    </ul>`


menu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', () => {
    console.log("good");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
})