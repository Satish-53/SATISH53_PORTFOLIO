// ============================================================
// PORTFOLIO JAVASCRIPT
// ============================================================


// ============================================================
// TYPING EFFECT
// ============================================================

const text = [
    "CS Student",
    "Java Developer",
    "Web Developer",
    "DSA Enthusiast"
];

let count = 0;
let index = 0;

function type() {

    const typingElement =
        document.getElementById("typing");

    if (!typingElement) return;

    if (count === text.length) {
        count = 0;
    }

    const currentText = text[count];

    const letter =
        currentText.slice(0, ++index);

    typingElement.textContent = letter;


    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1000);

    } else {

        setTimeout(type, 120);

    }
}

type();


// ============================================================
// MOBILE MENU
// ============================================================

function toggleMenu() {

    const nav =
        document.querySelector("nav");

    if (nav) {
        nav.classList.toggle("active");
    }

}


// ============================================================
// THEME TOGGLE
// ============================================================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

}


// ============================================================
// SCROLL PROGRESS
// ============================================================

window.addEventListener("scroll", function () {

    const progressBar =
        document.querySelector(".scroll-progress");

    if (!progressBar) return;


    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;


    if (scrollHeight <= 0) {

        progressBar.style.width = "0%";

        return;

    }


    const progress =
        (scrollTop / scrollHeight) * 100;


    progressBar.style.width =
        progress + "%";

});


// ============================================================
// BACK TO TOP BUTTON
// ============================================================

window.addEventListener("scroll", function () {

    const button =
        document.querySelector(".top-btn");

    if (!button) return;


    if (window.scrollY > 300) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});


// ============================================================
// SCROLL TO TOP
// ============================================================

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ============================================================
// ACTIVE NAVIGATION
// ============================================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ============================================================
// SKILLS SECTION - ANIMATED PROGRESS BARS
// ============================================================

function initializeSkills() {

    const skillCards =
        document.querySelectorAll(".skill-card");


    if (!skillCards.length) return;


    skillCards.forEach(function (card) {

        const progressBars =
            card.querySelectorAll(
                ".progress[data-progress]"
            );


        progressBars.forEach(function (bar) {

            const value =
                bar.getAttribute("data-progress");


            bar.style.width = "0%";


            setTimeout(function () {

                bar.style.width =
                    value + "%";

            }, 700);

        });

    });

}


// ============================================================
// SKILLS SECTION - 3D MOUSE EFFECT
// ============================================================

function initializeSkill3D() {

    const skillCards =
        document.querySelectorAll(".skill-card");


    if (!skillCards.length) return;


    skillCards.forEach(function (card) {


        card.addEventListener(
            "mousemove",
            function (event) {


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX - rect.left;


                const y =
                    event.clientY - rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) / centerY) * -3;


                const rotateY =
                    ((x - centerX) / centerX) * 3;


                card.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );


                card.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );


                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)
                     scale(1.01)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";

            }
        );

    });

}


// ============================================================
// RESUME MODAL
// ============================================================

function initializeResumeModal() {

    const openResume =
        document.getElementById("openResume");


    const resumeModal =
        document.getElementById("resumeModal");


    const closeModal =
        document.querySelector(".close-modal");


    if (
        !openResume ||
        !resumeModal ||
        !closeModal
    ) {

        return;

    }


    openResume.onclick =
        function () {

            resumeModal.style.display =
                "block";

        };


    closeModal.onclick =
        function () {

            resumeModal.style.display =
                "none";

        };


    window.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                resumeModal
            ) {

                resumeModal.style.display =
                    "none";

            }

        }
    );

}


// ============================================================
// LIVE CLOCK
// ============================================================

function updateClock() {

    const now =
        new Date();


    const dateElement =
        document.getElementById("date");


    const timeElement =
        document.getElementById("time");


    const dateOptions = {

        day: "numeric",

        month: "short",

        year: "numeric"

    };


    if (dateElement) {

        dateElement.textContent =
            now.toLocaleDateString(
                "en-IN",
                dateOptions
            );

    }


    if (timeElement) {

        timeElement.textContent =
            now.toLocaleTimeString(
                "en-IN"
            );

    }

}


updateClock();


setInterval(
    updateClock,
    1000
);


// ============================================================
// FOOTER YEAR
// ============================================================

function updateFooterYear() {

    const footerYear =
        document.getElementById(
            "footer-year"
        );


    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }

}


// ============================================================
// INITIALIZE EVERYTHING
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeSkills();

        initializeSkill3D();

        initializeResumeModal();

        updateFooterYear();

    }
);
