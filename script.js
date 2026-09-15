/* =====================================================
   ANA - BIRTHDAY WEBSITE
   script.js
===================================================== */


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const pages = {

    calendar: document.getElementById("calendarPage"),

    home: document.getElementById("homePage"),

    flower: document.getElementById("flowerPage"),

    cake: document.getElementById("cakePage"),

    letter: document.getElementById("letterPage")

};



/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(page) {

    if (!page) return;

    Object.values(pages).forEach(item => {

        if (!item) return;

        item.classList.remove("active");

        item.classList.add("hidden");

    });


    page.classList.remove("hidden");


    requestAnimationFrame(() => {

        page.classList.add("active");

    });

}


function openPage(pageId) {

    const pageMap = {

        calendarPage: pages.calendar,

        homePage: pages.home,

        flowerPage: pages.flower,

        cakePage: pages.cake,

        letterPage: pages.letter

    };


    const page = pageMap[pageId];

    if (!page) return;


    if (pageId === "flowerPage") {

        openedGifts.add("flower");

    }


    if (pageId === "cakePage") {

        openedGifts.add("cake");

    }


    if (pageId === "letterPage") {

        openedGifts.add("letter");

    }


    updateGiftProgress();

    showPage(page);

}



/* =====================================================
   HOME
===================================================== */

function goHome() {

    showPage(pages.home);

}



/* =====================================================
   PERSIAN NUMBERS
===================================================== */

function toPersianNumber(number) {

    const persian = "۰۱۲۳۴۵۶۷۸۹";

    return String(number).replace(
        /[0-9]/g,
        digit => persian[Number(digit)]
    );

}



/* =====================================================
   JALALI CALENDAR
===================================================== */

const monthNames = [

    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"

];


let currentYear = 1405;

let currentMonth = 5;



const monthName =
    document.getElementById("monthName");

const yearName =
    document.getElementById("yearName");

const calendarDays =
    document.getElementById("calendarDays");

const calendarMessage =
    document.getElementById("calendarMessage");



function getMonthDays(month) {

    if (month <= 5) {

        return 31;

    }

    if (month <= 10) {

        return 30;

    }

    return 29;

}



function getFirstDayOffset(year, month) {

    /*
       برای شهریور ۱۴۰۵
       چیدمان از یکشنبه شروع می‌شود.
    */

    if (
        year === 1405 &&
        month === 5
    ) {

        return 1;

    }


    return (month * 2) % 7;

}



function renderCalendar() {

    if (!calendarDays) return;


    monthName.textContent =
        monthNames[currentMonth];


    yearName.textContent =
        toPersianNumber(currentYear);


    calendarDays.innerHTML = "";


    const offset =
        getFirstDayOffset(
            currentYear,
            currentMonth
        );


    for (
        let i = 0;
        i < offset;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day empty";

        calendarDays.appendChild(empty);

    }



    const totalDays =
        getMonthDays(currentMonth);



    for (
        let day = 1;
        day <= totalDays;
        day++
    ) {

        const button =
            document.createElement("button");


        button.type = "button";

        button.className =
            "calendar-day";


        button.textContent =
            toPersianNumber(day);



        if (

            currentYear === 1405 &&

            currentMonth === 5 &&

            day === 28

        ) {

            button.classList.add(
                "birthday"
            );

        }



        button.addEventListener(
            "click",
            () => {

                checkBirthday(
                    currentMonth,
                    day
                );

            }
        );


        calendarDays.appendChild(button);

    }

}



function checkBirthday(month, day) {

    if (!calendarMessage) return;


    if (

        month === 5 &&
        day === 28

    ) {

        calendarMessage.textContent =
            "آره... همین تاریخه. 🤍";


        calendarMessage.classList.add(
            "success"
        );


        createConfetti();


        setTimeout(() => {

            showPage(pages.home);

        }, 900);


    } else {

        calendarMessage.textContent =
            "نه... این تاریخ نیست 😌 دوباره امتحان کن.";


        calendarMessage.classList.remove(
            "success"
        );

    }

}



/* =====================================================
   CALENDAR BUTTONS
===================================================== */

document
    .getElementById("prevMonth")
    ?.addEventListener(
        "click",
        () => {

            currentMonth--;


            if (currentMonth < 0) {

                currentMonth = 11;

                currentYear--;

            }


            renderCalendar();

        }
    );



document
    .getElementById("nextMonth")
    ?.addEventListener(
        "click",
        () => {

            currentMonth++;


            if (currentMonth > 11) {

                currentMonth = 0;

                currentYear++;

            }


            renderCalendar();

        }
    );



/* =====================================================
   GIFT SYSTEM
===================================================== */

const openedGifts =
    new Set();



function updateGiftProgress() {

    const openedCount =
        document.getElementById(
            "openedCount"
        );


    if (!openedCount) return;


    openedCount.textContent =
        toPersianNumber(
            openedGifts.size
        );

}



/* =====================================================
   GIFT CARDS
===================================================== */

document
    .querySelectorAll(".gift-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const section =
                    card.dataset.section;


                if (section === "flower") {

                    openedGifts.add(
                        "flower"
                    );

                    showPage(
                        pages.flower
                    );

                }


                if (section === "cake") {

                    openedGifts.add(
                        "cake"
                    );

                    showPage(
                        pages.cake
                    );

                }


                if (section === "letter") {

                    openedGifts.add(
                        "letter"
                    );

                    showPage(
                        pages.letter
                    );

                }


                updateGiftProgress();

            }
        );

    });



/* =====================================================
   BACK BUTTONS
===================================================== */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                goHome();

            }
        );

    });



/* =====================================================
   FLOWER
===================================================== */

const growFlower =
    document.getElementById(
        "growFlower"
    );


const flowerStem =
    document.getElementById(
        "flowerStem"
    );


const flowerHead =
    document.getElementById(
        "flowerHead"
    );


const flowerMessage =
    document.getElementById(
        "flowerMessage"
    );


let flowerAlreadyGrown = false;



growFlower?.addEventListener(
    "click",
    () => {

        if (flowerAlreadyGrown) {

            return;

        }


        flowerAlreadyGrown = true;


        growFlower.textContent =
            "شکوفه داد 🌷";



        if (flowerStem) {

            flowerStem.style.height =
                "150px";

        }



        document
            .querySelectorAll(
                ".flower-garden .leaf"
            )
            .forEach(leaf => {

                setTimeout(
                    () => {

                        leaf.style.opacity =
                            "1";

                    },
                    700
                );

            });



        if (flowerHead) {

            setTimeout(
                () => {

                    flowerHead.style.opacity =
                        "1";


                    flowerHead.style.transform =
                        "translateX(-50%) scale(1)";

                },
                900
            );

        }



        if (flowerMessage) {

            setTimeout(
                () => {

                    flowerMessage.classList.add(
                        "show"
                    );

                },
                1800
            );

        }

    }
);



/* =====================================================
   CAKE + FOOTBALL
===================================================== */

const blowCake =
    document.getElementById(
        "blowCake"
    );


const footballStats =
    document.getElementById(
        "footballStats"
    );


const footballGame =
    document.getElementById(
        "footballGame"
    );


const footballButton =
    document.getElementById(
        "footballButton"
    );


const footballBall =
    document.getElementById(
        "footballBall"
    );


const runningMessage =
    document.getElementById(
        "runningMessage"
    );


const dreamMessage =
    document.getElementById(
        "dreamMessage"
    );


const realMessage =
    document.getElementById(
        "realMessage"
    );


let cakeAlreadyBlown = false;

let footballStarted = false;



blowCake?.addEventListener(
    "click",
    () => {

        if (cakeAlreadyBlown) {

            return;

        }


        cakeAlreadyBlown = true;


        blowCake.textContent =
            "هورا ! 🎉";


        createConfetti();



        if (footballStats) {

            setTimeout(
                () => {

                    footballStats.classList.remove(
                        "hidden"
                    );

                    footballStats.classList.add(
                        "show"
                    );

                },
                500
            );

        }



        if (footballGame) {

            setTimeout(
                () => {

                    footballGame.classList.remove(
                        "hidden"
                    );

                    footballGame.classList.add(
                        "show"
                    );

                },
                900
            );

        }

    }
);



/* =====================================================
   FOOTBALL GAME
===================================================== */

footballButton?.addEventListener(
    "click",
    () => {

        if (footballStarted) {

            return;

        }


        footballStarted = true;



        if (footballBall) {

            footballBall.animate(

                [

                    {
                        transform:
                            "translateX(0) translateY(0) rotate(0deg)"
                    },

                    {
                        transform:
                            "translateX(150px) translateY(-45px) rotate(360deg)"
                    },

                    {
                        transform:
                            "translateX(280px) translateY(0) rotate(720deg)"
                    }

                ],

                {

                    duration: 1000,

                    easing: "ease-out",

                    fill: "forwards"

                }

            );

        }



        if (runningMessage) {

            setTimeout(
                () => {

                    runningMessage.classList.remove(
                        "hidden"
                    );

                    runningMessage.classList.add(
                        "show"
                    );

                },
                900
            );

        }



        if (dreamMessage) {

            setTimeout(
                () => {

                    dreamMessage.classList.remove(
                        "hidden"
                    );

                    dreamMessage.classList.add(
                        "show"
                    );

                },
                1800
            );

        }



        if (realMessage) {

            setTimeout(
                () => {

                    realMessage.classList.remove(
                        "hidden"
                    );

                    realMessage.classList.add(
                        "show"
                    );

                    createConfetti();

                },
                2800
            );

        }

    }
);



/* =====================================================
   LETTER
===================================================== */

const letterText = `سلام اناهیتا قشنگم، تولدت مبارک باشه. ♡

خیلی خوشحالم که تونستم با فرشته‌ی خوشگلی مثل تو آشنا بشم.
خیلی خیلی دوست دارم و خیلی برام باارزشی،
بابت تمام خنده‌ها و لحظات خوبی که برام ساختی، ممنونم.

فرشته کوچولو،
امیدوارم همیشه به تمام آرزوهات برسی
و توی تمام زندگیت موفق و سلامت باشی.`;



const envelope =
    document.getElementById(
        "envelope"
    );


const openLetter =
    document.getElementById(
        "openLetter"
    );


const typedLetter =
    document.getElementById(
        "typedLetter"
    );


const letterSignature =
    document.getElementById(
        "letterSignature"
    );


let letterAlreadyOpened = false;



openLetter?.addEventListener(
    "click",
    () => {

        if (letterAlreadyOpened) {

            return;

        }


        letterAlreadyOpened = true;


        envelope?.classList.add(
            "open"
        );


        openLetter.textContent =
            "نامه باز شد 🤍";


        setTimeout(
            typeLetter,
            800
        );

    }
);



function typeLetter() {

    if (!typedLetter) return;


    let index = 0;

    const speed = 28;


    typedLetter.textContent = "";


    function type() {

        if (
            index <
            letterText.length
        ) {

            typedLetter.textContent +=
                letterText.charAt(index);


            index++;


            setTimeout(
                type,
                speed
            );

        } else {

            setTimeout(
                () => {

                    if (letterSignature) {

                        letterSignature.textContent =
                            "از طرف هلیا ♡";


                        letterSignature.classList.add(
                            "show"
                        );

                    }

                },
                500
            );

        }

    }


    type();

}



/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const amount = 55;


    const colors = [

        "#f2a7c4",

        "#8fc8e7",

        "#f7d477",

        "#ffffff"

    ];



    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        const size =
            Math.random() * 7 + 4;


        const duration =
            Math.random() * 1800 + 2200;



        Object.assign(
            piece.style,
            {

                position: "fixed",

                width:
                    `${size}px`,

                height:
                    `${size}px`,

                left:
                    `${Math.random() * 100}vw`,

                top:
                    "-20px",

                background:
                    colors[
                        Math.floor(
                            Math.random() *
                            colors.length
                        )
                    ],

                borderRadius:
                    "3px",

                zIndex:
                    "100000",

                pointerEvents:
                    "none"

            }
        );



        document.body.appendChild(
            piece
        );



        piece.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "cubic-bezier(.2,.8,.3,1)"

            }

        );



        setTimeout(
            () => {

                piece.remove();

            },
            duration
        );

    }

}



/* =====================================================
   INITIALIZE
===================================================== */

showPage(
    pages.calendar
);


renderCalendar();


updateGiftProgress();
