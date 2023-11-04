const loadText = document.querySelector(".load-text");
const textanimationText = document.querySelector(".text-animation");
textanimationText.addEventListener("animationend", () => {
    loadText.classList.add("finished-shimmer");
    const fadeInAnimationText = document.querySelector(".finished-shimmer");
    fadeInAnimationText.addEventListener("animationend", () => {
        setTimeout(() => {
            loadText.classList.add("finished-shimmer-none");
            $(".loaded-text").css("display", "");
        }, 1800);
    });
});

$(document).ready(function () {
    $("#linkedin").click(function () {
        window.open(
            "https://www.linkedin.com/in/pratish-shrivastava",
            "_blank"
        );
    });
});

$(document).ready(function () {
    $("#github").click(function () {
        window.open("https://github.com/PratishShrivastava", "_blank");
    });
});

$(document).ready(function () {
    $("#twitter").click(function () {
        window.open("https://twitter.com/PratishShtva", "_blank");
    });
});

$(document).ready(function () {
    $(".scroll-down div span").click(function () {
        var targetSectionPosition = $("section").offset().top;
        $("html, body").animate({ scrollTop: targetSectionPosition }, 1000);
    });
});
