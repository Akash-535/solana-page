const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("lines").classList.toggle("line-1-1")
    document.getElementById("lines-2").classList.toggle("line-2")
    document.getElementById("lines-3").classList.toggle("line-3")

}


    var preloader = document.getElementById("loader")

    function loading(){
        preloader.style.display = "none";
        setTimeout(function() {
            elapsed = true;
            if (loaded)
                hideLoadingScreen();
        }, 50000);
    }
   