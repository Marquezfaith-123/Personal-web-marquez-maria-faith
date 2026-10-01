/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typing-text");


const phrases = [
    "I create.",
    "I learn.",
    "I innovate.",
    "I explore technology."
];


let phraseIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeAnimation() {

    const currentPhrase =
        phrases[phraseIndex];


    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeAnimation,
                1500
            );

            return;
        }

    } else {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            phraseIndex++;


            if (
                phraseIndex >=
                phrases.length
            ) {

                phraseIndex = 0;

            }

        }

    }


    setTimeout(
        typeAnimation,
        deleting ? 50 : 100
    );
}


typeAnimation();



/* =========================================
   ENTER PORTFOLIO
========================================= */

function enterPortfolio() {

    const introScreen =
        document.getElementById(
            "intro-screen"
        );


    introScreen.classList.add(
        "hide"
    );


    document.body.style.overflow =
        "auto";


    setTimeout(
        function() {

            document
                .getElementById("home")
                .scrollIntoView({
                    behavior: "smooth"
                });

        },
        300
    );
}



/* =========================================
   SMOOTH SCROLL NAVIGATION
========================================= */

function scrollToSection(sectionName) {

    const section =
        document.getElementById(
            sectionName
        );


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}



/* =========================================
   EXPAND / COLLAPSE SKILLS
========================================= */

function toggleSkill(card) {

    const isAlreadyExpanded =
        card.classList.contains(
            "expanded"
        );


    const allCards =
        document.querySelectorAll(
            ".skill-card"
        );


    /* CLOSE OTHER CARDS */

    allCards.forEach(
        function(otherCard) {

            otherCard.classList.remove(
                "expanded"
            );


            const toggle =
                otherCard.querySelector(
                    ".skill-toggle"
                );


            if (toggle) {

                toggle.textContent =
                    "+";

            }

        }
    );


    /* OPEN CLICKED CARD */

    if (!isAlreadyExpanded) {

        card.classList.add(
            "expanded"
        );


        const toggle =
            card.querySelector(
                ".skill-toggle"
            );


        if (toggle) {

            toggle.textContent =
                "−";

        }

    }

}



/* =========================================
   REVEAL ANIMATION
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        ".page-section"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const sectionId =
                            entry.target.id;


                        navLinks.forEach(
                            function(link) {

                                link.classList.remove(
                                    "active"
                                );


                                if (
                                    link.dataset.section ===
                                    sectionId
                                ) {

                                    link.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    }

                }
            );

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(
    function(section) {

        sectionObserver.observe(
            section
        );

    }
);



/* =========================================
   KEYBOARD NAVIGATION
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const keys = {

            "1": "home",
            "2": "about",
            "3": "skills",
            "4": "projects",
            "5": "contact"

        };


        if (
            keys[event.key]
        ) {

            scrollToSection(
                keys[event.key]
            );

        }

    }
);