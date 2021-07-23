function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav-links');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}