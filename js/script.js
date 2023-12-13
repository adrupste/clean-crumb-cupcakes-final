document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
})

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
})