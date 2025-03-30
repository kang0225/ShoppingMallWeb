let menu_clicked = document.getElementById("menu");
menu_clicked.addEventListener("click", function() {
    let side_menu_shown = document.getElementById("side_menu");
    let body_color = document.getElementById("body_");
    side_menu_shown.style.left = "0";
    body_color.style.backgroundColor = "gray";
});

let close_menu_clicked = document.getElementById("close_menu");
close_menu_clicked.addEventListener("click", function() {
    let side_menu_shown = document.getElementById("side_menu");
    let body_color = document.getElementById("body_");
    side_menu_shown.style.left = "-900px";
    body_color.style.backgroundColor = "#f7f7f7";
});

let login_menu_clicked = document.getElementById("before_login_text");
login_menu_clicked.addEventListener("click", function() {
    window.location.href = "/login";
});

let casual_clicked = document.getElementById("casual");
casual_clicked.addEventListener("click", function() {
    window.location.href = "casual.html";
});

let street_clicked = document.getElementById("street");
street_clicked.addEventListener("click", function() {
    window.location.href = "street.html";
});

let dandy_clicked = document.getElementById("dandy");
dandy_clicked.addEventListener("click", function() {
    window.location.href = "dandy.html";
});

let sports_clicked = document.getElementById("sports");
sports_clicked.addEventListener("click", function() {
    window.location.href = "sports.html";
});

let formal_clicked = document.getElementById("formal");
formal_clicked.addEventListener("click", function() {
    window.location.href = "foraml.html";
});

let vintage_clicked = document.getElementById("vintage");
vintage_clicked.addEventListener("click", function() {
    window.location.href = "vintage.html";
});

let homewear_clicked = document.getElementById("homewear");
homewear_clicked.addEventListener("click", function() {
    window.location.href = "homewear.html";
});