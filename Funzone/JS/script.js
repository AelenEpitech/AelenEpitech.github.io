
  var box_height = document.getElementById('text-pos-box-1').offsetTop;
  var arrow = document.getElementById('arrow-pos').offsetTop;

   document.getElementById("scrollArrow").style.transform = "scale(1.5)";
   document.getElementById("scrollArrow").style.transition = "0.45s";

   window.onscroll = function () {

   if (document.documentElement.scrollTop < 10) {

    // Navbar

    document.getElementById("navbar-fayzs").style.opacity = 1;
    document.getElementById("navbar-fayzs").style.transition = "0.45s";

    // Navbar

   }

   if (document.documentElement.scrollTop > 10) {

    document.getElementById("scrollArrow").style.transform = "scale(1)";
    document.getElementById("scrollArrow").style.transition = "0.45s";

    // Navbar

    document.getElementById("text-pos-box-1").style.backgroundColor = "rgb(0, 0, 0, 0.3)";
    document.getElementById("text-pos-box-1").style.transition = "0.3s";

    document.getElementById("text-pos-box-2").style.backgroundColor = "rgb(0, 0, 0, 0.3)";
    document.getElementById("text-pos-box-2").style.transition = "0.3s";

    document.getElementById("navbar-fayzs").style.opacity = 0.5;
    document.getElementById("navbar-fayzs").style.transition = "2.5s";

    document.getElementById("text-pos-box-5").style.opacity = 1;
    document.getElementById("text-pos-box-5").style.transition = "2.5s";

    document.getElementById("text-pos-box-3").style.opacity = 1;
    document.getElementById("text-pos-box-3").style.transition = "2.3s";

    document.getElementById("text-pos-box-4").style.opacity = 1;
    document.getElementById("text-pos-box-4").style.transition = "2.45s";

    document.getElementById("dll-1").style.opacity = 1;
    document.getElementById("dll-1").style.transition = "3.75s";

    document.getElementById("dll-2").style.opacity = 1;
    document.getElementById("dll-2").style.transition = "3.75s";

    document.getElementById("dll-3").style.opacity = 1;
    document.getElementById("dll-3").style.transition = "3.75s";

    document.getElementById("dll-4").style.opacity = 1;
    document.getElementById("dll-4").style.transition = "3.75s";

    document.getElementById("dll-5").style.opacity = 1;
    document.getElementById("dll-5").style.transition = "3.75s";


    document.getElementById("box-2-text").style.opacity = 1;
    document.getElementById("box-2-text").style.transition = "3.5s";

    document.getElementById("box-1-text").style.opacity = 1;
    document.getElementById("box-1-text").style.transition = "3.5s";

    document.getElementById("video-frame").style.opacity = 1;
    document.getElementById("video-frame").style.transition = "3.5s";

    document.getElementById("video-text").style.opacity = 1;
    document.getElementById("video-text").style.transition = "3.5s";

    document.getElementById("video-text2").style.opacity = 1;
    document.getElementById("video-text2").style.transition = "3.95s";


    

    // Navbar

   }

   if (document.documentElement.scrollTop < box_height + 100) {

    // Box

        document.getElementById("box-1-1").style.opacity = 0;
        document.getElementById("box-1-1").style.marginBottom = "-80px";
        document.getElementById("box-1-1").style.transition = "0.25s";

        document.getElementById("box-1-2").style.opacity = 0;
        document.getElementById("box-1-2").style.marginBottom = "-80px";
        document.getElementById("box-1-2").style.transition = "0.45s";

        document.getElementById("box-1-3").style.opacity = 0;
        document.getElementById("box-1-3").style.marginBottom = "-80px";
        document.getElementById("box-1-3").style.transition = "0.75s";
    }
    if (document.documentElement.scrollTop > box_height + 100) {
        document.getElementById("box-1-1").style.opacity = 1;
        document.getElementById("box-1-1").style.marginTop = "80px";
        document.getElementById("box-1-1").style.marginBottom = "80px";
        document.getElementById("box-1-1").style.transition = "1.9s";

        document.getElementById("box-1-2").style.opacity = 1;
        document.getElementById("box-1-2").style.marginTop = "80px";
        document.getElementById("box-1-2").style.marginBottom = "80px";
        document.getElementById("box-1-2").style.transition = "1.9s";

        document.getElementById("box-1-3").style.opacity = 1;
        document.getElementById("box-1-3").style.marginTop = "80px";
        document.getElementById("box-1-3").style.marginBottom = "80px";
        document.getElementById("box-1-3").style.transition = "1.9s";

    // Box
    }

    if (document.documentElement.scrollTop < arrow - 200) {
        document.getElementById("box-2-1").style.opacity = 0;
        document.getElementById("box-2-1").style.transition = "2.45s";
        document.getElementById("box-2-1-1").style.marginBottom = "-80px";
        document.getElementById("box-2-1-1").style.transition = "0.45s";
    }

    if (document.documentElement.scrollTop > arrow - 200) {
        document.getElementById("box-2-1").style.opacity = 1;
        document.getElementById("box-2-1").style.transition = "2.45s";
        document.getElementById("box-2-1-1").style.marginTop = "80px";
        document.getElementById("box-2-1-1").style.marginBottom = "80px";
        document.getElementById("box-2-1-1").style.transition = "0.45s";
    }

    if (document.documentElement.scrollTop > arrow - 100) {
        document.getElementById("leftArrows").style.opacity = 1;
        document.getElementById("leftArrows").style.transition = "1.45s";
        document.getElementById("rightArrows").style.opacity = 1;
        document.getElementById("rightArrows").style.transition = "1.45s";

        document.getElementById("rightArrows-image").style.transform = "rotate(90deg)";
        document.getElementById("leftArrows-image").style.transform = "rotate(-90deg)";
        document.getElementById("rightArrows-image").style.transition = "0.75s";
        document.getElementById("leftArrows-image").style.transition = "0.75s";
    }

    if (document.documentElement.scrollTop < arrow - 200) {
        document.getElementById("leftArrows").style.opacity = 0;
        document.getElementById("leftArrows").style.transition = "1.45s";
        document.getElementById("rightArrows").style.opacity = 0;
        document.getElementById("rightArrows").style.transition = "1.45s";

        document.getElementById("rightArrows-image").style.transform = "rotate(-270deg)";
        document.getElementById("leftArrows-image").style.transform = "rotate(270deg)";
        document.getElementById("rightArrows-image").style.transition = "0.75s";
        document.getElementById("leftArrows-image").style.transition = "0.75s";
    }

}