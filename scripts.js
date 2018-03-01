

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("main-nav").style.width = "250px";
    document.getElementById("main-nav").style.display = "block";
    document.getElementById("main").style.marginLeft = "250px";
//    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("main-nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
//     document.body.style.backgroundColor = "white";
}

    
    
    var acc = document.getElementsByClassName("accordion");
    var i;

        for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//function button() {
//
//}