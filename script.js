window.addEventListener("load", function() {
    // ১. লোডিং টাইমার (৩ সেকেন্ড)
    setTimeout(function() {
        var loader = document.getElementById("preloader");
        loader.classList.add("slide-up");

        // ২. মেইন কন্টেন্ট ড্রপ হবে
        var heroElements = document.querySelectorAll(".navbar, .hidden-element");
        heroElements.forEach(function(el) {
            el.classList.add("show-element");
        });

        // ৩. টাইপিং শুরু হবে
        initTyping();

    }, 3000); 
});

// 🔥 ফিক্সড টাইপিং ফাংশন
function initTyping() {
    var typed = new Typed(".typing-text", {
        strings: [
            "Web Developer",
            "App Developer", 
            "Nature Beauty Collector", 
            "UI/UX Enthusiast",
            "Photographer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    });
}

// স্ক্রল এনিমেশন
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.app-showcase, .photo-card, .section-title');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}