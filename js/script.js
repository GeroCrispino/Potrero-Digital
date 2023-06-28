const mi_header = document.getElementById("header");
const mi_footer = document.getElementById("footer");


function mode_dark() {
    document.body.style.backgroundColor = "rgb(29,28,28)";
    document.body.style.color = "white";
    mi_header.style.borderBottom = "1px solid #FFFFFF";
    document.getElementById("main").style.backgroundColor = "rgb(29,28,28)";
    document.getElementById("subtitle").style.color = "darkgoldenrod";
    document.getElementById("link").style.color = "white";
    document.getElementById("title_prep").style.color = "darkgoldenrod";
    document.getElementById("title_ing").style.color = "darkgoldenrod";
    mi_footer.style.borderTop = "1px solid #FFFFFF";
}


function datos() {
    alert("🙋‍♂️ Gerónimo Crispino - 📍 La Plata, Buenos Aires, Argentina")
}