let example0 = new Typed("#dev", {
    // strings: ["Developer.", "Designer.", "Freelancer."],
    strings: ["Developer.", "Freelancer.", "Designer.", "Hacker."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    smartBackspace: false,
});

var cur = document.querySelector('.def-cur');

document.addEventListener('mousemove', function (event) {
    console.log(event);
    var x = event.pageX;
    var y = event.pageY;
    cur.style.top = (y - cur.offsetHeight / 2) + 'px';
    cur.style.left = (x - cur.offsetHeight / 2) + 'px';
})

$('.hamburger').click(function () {
    $('nav.navbar ul').slideToggle(250);
    $('body').toggleClass('active');
});

jQuery("document").ready(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('body').addClass("fixed");
        } else {
            $('body').removeClass("fixed");
        }
    });
});

TweenMax.from('.navbar ul', 1, {
    delay: 0.1,
    opacity: 0,
    x: "100%",
    ease: Expo.easeInOut
})

TweenMax.from('.navbar-bt-section-img-wrapper img', 1.5, {
    delay: 0.5,
    y: "-200%",
    ease: Expo.easeInOut
})

TweenMax.from('.navbar-bt-text-section h2', 1, {
    delay: 1,
    y: "200%",
    ease: Expo.easeInOut
})

TweenMax.from('.navbar-bt-text-section h1', 1.5, {
    delay: 1.3,
    x: "200%",
    ease: Expo.easeInOut
})

TweenMax.from('.navbar-bt-text-section p', 1, {
    delay: 2.3,
    opacity: 0,
    ease: Expo.easeInOut
})

TweenMax.from('.hd-logo', 1.5, {
    delay: 0.8,
    opacity: 0,
    y: "100%",
    ease: Expo.easeInOut
})



let ankActive = document.querySelectorAll('.navbar ul li');

function ankerActive(get){
    ankActive.forEach((curr)=>{
        curr.classList.remove('active');    
    });    
    get.parentNode.classList.add('active'); 
};

TweenMax.from('.about-about-section .about-img-wrapper', 2, {
    delay: 0.1,
    opacity: 0,
    x: "-100%",
    ease: Expo.easeInOut
})












