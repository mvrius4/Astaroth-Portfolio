const navOpener = document.getElementById("nav-open");
const navCloser = document.getElementById("nav-close");
const nav = document.querySelector("nav");

navOpener.addEventListener("click", () => {
    if(nav.classList == "active") return;
    nav.classList.add("active");
})

navCloser.addEventListener("click", () => {
    if(!nav.classList == "active") return;
    nav.classList.remove("active");
})
