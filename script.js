function togglMenu() {
    const menu=document.querySelector(".m1-links");
    const icon=document.querySelector(".ham-icon");
    menu.classList.togglr("open");
    icon.classList.toggle("open");
}