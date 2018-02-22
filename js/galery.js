var niz = [];
var next = "";
var prev = "";
var strelice = document.getElementsByClassName("sliderArrow");

//prolazimo sa for petljom kroz strelice i dodajemo klik dogadjaj
for (var i = 0; i < strelice.length; i++) {
    strelice[i].addEventListener("click", function(e) {

        //kad se klikne na strelicu prvo uzimamo trenutnu sliku iz glavbog diva
        var currentImg = document.querySelector("#slideImgBlock img");
        //uzimamo putanju trenutne slike u divu
        var src = currentImg.src;
        //uzimamo poziciju trenutne slike u nizu
        var current = niz.indexOf(src);
        //ako je atribut strelice desno zovemo nextImg u suprotnom prevImg
        if (e.target.getAttribute("data-direction") == "desno") {
            nextImg(src, current)
        } else {
            prevImg(src, current)
        }

    })
}

//prolazimo kroz sve img tagove u klasi block-10, dok prolazimo punimo niz i dodajmeo klik dogadjaj na male slike
var imgs = document.querySelectorAll(".sliderItem img");
imgs.forEach(function(img) {
    niz.push(img.src);
    img.addEventListener("click", function(e) {
        document.getElementById("slideImgBlock").innerHTML = "<img src='" + e.target.src + "'>";
    })
})

function nextImg(src, current) {

    next = niz[current + 1];

    if (!next) {
        next = niz[0];
    }

    document.getElementById("slideImgBlock").innerHTML = "<img src='" + next + "'>";

}


function prevImg(src, current) {


    prev = niz[current - 1];

    if (!prev) {
        prev = niz[niz.length - 1];
    }

    document.getElementById("slideImgBlock").innerHTML = "<img src='" + prev + "'>";

}