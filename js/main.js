//for active menu
var header = document.getElementById("forAfter");
var btns = header.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    });
}
//for bar
$('#bar').click(function(){
    $('#res-menu').toggleClass("toggle");
    $('#res-menu').toggleClass("show");
    $('#one').toggleClass("one");
    $('#two').toggleClass("two");
    $('#three').toggleClass("three");
});
// for second menu
let secMenu = document.getElementById('sec-menu'),
    secMenuBtn = document.getElementById('home');
let firstItem = document.getElementById('forMargin');
secMenuBtn.onclick = function(){
    secMenu.classList.toggle('sec-menu');
    if(window.innerWidth <= 1200){
        firstItem.classList.toggle('forMargin')
    }
};
// for slideShow
let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
    let slides = document.getElementsByClassName('img');
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.opacity = '0';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.opacity = "1";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
