$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});


$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
        document.getElementById("glavnimeni").style.borderBottom = "gray 1px solid";
    } else {
        $("nav").removeClass("black");
        document.getElementById("glavnimeni").style.borderBottom = "none";
    }
});
