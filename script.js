/* =====================================================
   ANA - BIRTHDAY WEBSITE
   Made with love by Helia ♡
===================================================== */


/* =====================================================
   PAGE ELEMENTS
===================================================== */

const calendarPage =
    document.getElementById("calendarPage");

const homePage =
    document.getElementById("homePage");

const flowerPage =
    document.getElementById("flowerPage");

const cakePage =
    document.getElementById("cakePage");

const letterPage =
    document.getElementById("letterPage");

const secretPage =
    document.getElementById("secretPage");


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(page) {

    const pages = [
        calendarPage,
        homePage,
        flowerPage,
        cakePage,
        letterPage,
        secretPage
    ];

    pages.forEach(item => {

        item.classList.remove("active");
        item.classList.add("hidden");

    });

    page.classList.remove("hidden");

    setTimeout(() => {

        page.classList.add("active");

    }, 30);

}


/* =====================================================
   PERSIAN NUMBERS
===================================================== */

function toPersianNumber(number) {

    const english =
        "0123456789";

    const persian =
        "۰۱۲۳۴۵۶۷۸۹";

    return String(number).replace(
        /[0-9]/g,
        digit =>
            persian[
                english.indexOf(digit)
            ]
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


/* DOM */

const monthName =
    document.getElementById("monthName");

const yearName =
    document.getElementById("yearName");

const calendarDays =
    document.getElementById("calendarDays");

const calendarMessage =
    document.getElementById("calendarMessage");


/* تعداد روزهای ماه شمسی */

function getMonthDays(
    year,
    month
) {

    if (month <= 5) {
        return 31;
    }

    if (month <= 10) {
        return 30;
    }

    return 29;

}


/* ساخت تقویم */

function renderCalendar() {

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

        calendarDays.appendChild(
            empty
        );

    }


    const totalDays =
        getMonthDays(
            currentYear,
            currentMonth
        );


    for (
        let day = 1;
        day <= totalDays;
        day++
    ) {

        const button =
            document.createElement("button");


        button.className =
            "calendar-day";


        button.textContent =
            toPersianNumber(day);


        /*
            تولد اناهیتا:
            ۲۸ شهریور
        */

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


        calendarDays.appendChild(
            button
        );

    }

}


/* offset تقویم */

function getFirstDayOffset(
    year,
    month
) {

    if (
        year === 1405 &&
        month === 5
    ) {

        return 1;

    }

    return (month * 2) % 7;

}


/* =====================================================
   BIRTHDAY CHECK
===================================================== */

function checkBirthday(
    month,
    day
) {

    if (
        month === 5 &&
        day === 28
    ) {

        calendarMessage.textContent =
            "آره... همین تاریخه. 🤍";

        calendarMessage.style.color =
            "#559dc5";


        createConfetti();


        setTimeout(() => {

            openBirthday();

        }, 1000);


    } else {

        calendarMessage.textContent =
            "نه... این تاریخ نیست 😌 دوباره امتحان کن.";

        calendarMessage.style.color =
            "#df7fa8";

    }

}


/* =====================================================
   OPEN BIRTHDAY
===================================================== */

function openBirthday() {

    showPage(homePage);

    createConfetti();

}


/* =====================================================
   CALENDAR MONTH BUTTONS
===================================================== */

document
    .getElementById("prevMonth")
    .addEventListener(
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
    .addEventListener(
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

const giftCards =
    document.querySelectorAll(
        ".gift-card"
    );


let openedGifts =
    new Set();


giftCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const section =
                card.dataset.section;


            openedGifts.add(
                section
            );


            updateOpenedCounter();


            if (
                section === "flower"
            ) {

                showPage(
                    flowerPage
                );

            }


            if (
                section === "cake"
            ) {

                showPage(
                    cakePage
                );

            }


            if (
                section === "letter"
            ) {

                showPage(
                    letterPage
                );

            }

        }
    );

});


/* =====================================================
   COUNTER
===================================================== */

function updateOpenedCounter() {

    const counter =
        document.getElementById(
            "openedCount"
        );

    if (!counter) return;

    counter.textContent =
        toPersianNumber(
            openedGifts.size
        );

}


/* =====================================================
   BACK BUTTONS
===================================================== */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(homePage);


                if (
                    openedGifts.size === 3
                ) {

                    setTimeout(
                        showSecretNotification,
                        500
                    );

                }

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


let flowerAlreadyGrown =
    false;


if (growFlower) {

    growFlower.addEventListener(
        "click",
        () => {

            if (
                flowerAlreadyGrown
            ) {

                return;

            }


            flowerAlreadyGrown =
                true;


            growFlower.textContent =
                "شکوفه داد 🌷";


            if (flowerStem) {

                flowerStem.style.height =
                    "150px";

            }


            document
                .querySelectorAll(".leaf")
                .forEach(leaf => {

                    setTimeout(() => {

                        leaf.style.opacity =
                            "1";

                    }, 700);

                });


            if (flowerHead) {

                setTimeout(() => {

                    flowerHead.style.opacity =
                        "1";

                    flowerHead.style.transform =
                        "translateX(-50%) scale(1)";

                }, 900);

            }


            if (flowerMessage) {

                setTimeout(() => {

                    flowerMessage.classList.add(
                        "show"
                    );

                }, 1800);

            }

        }
    );

}


/* =====================================================
   CAKE
===================================================== */

const blowCake =
    document.getElementById(
        "blowCake"
    );

const footballStats =
    document.getElementById(
        "footballStats"
    );

const realMessage =
    document.getElementById(
        "realMessage"
    );


let cakeAlreadyBlown =
    false;


if (blowCake) {

    blowCake.addEventListener(
        "click",
        () => {

            if (
                cakeAlreadyBlown
            ) {

                return;

            }


            cakeAlreadyBlown =
                true;


            /*
                تغییر اصلی:
                بعد از فوت کردن کیک
                متن «هورا ! 🎉» نمایش داده می‌شود.
            */

            blowCake.textContent =
                "هورا ! 🎉";


            createConfetti();


            if (footballStats) {

                setTimeout(() => {

                    footballStats.classList.add(
                        "show"
                    );

                }, 500);

            }


            if (realMessage) {

                setTimeout(() => {

                    realMessage.classList.add(
                        "show"
                    );

                }, 1500);

            }

        }
    );

}


/* =====================================================
   LETTER
===================================================== */


/*
    متن نامه‌ی هلیا
*/

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


let letterAlreadyOpened =
    false;


if (openLetter) {

    openLetter.addEventListener(
        "click",
        () => {

            if (
                letterAlreadyOpened
            ) {

                return;

            }


            letterAlreadyOpened =
                true;


            if (envelope) {

                envelope.classList.add(
                    "open"
                );

            }


            openLetter.textContent =
                "نامه باز شد 🤍";


            setTimeout(
                typeLetter,
                800
            );

        }
    );

}


/* افکت تایپ */

function typeLetter() {

    if (!typedLetter) return;

    let index = 0;

    const speed = 28;


    function type() {

        if (
            index < letterText.length
        ) {

            typedLetter.textContent +=
                letterText.charAt(index);

            index++;


            setTimeout(
                type,
                speed
            );

        } else {

            setTimeout(() => {

                if (letterSignature) {

                    letterSignature.textContent =
                        "از طرف هلیا ♡";

                    letterSignature.classList.add(
                        "show"
                    );

                }

            }, 500);

        }

    }


    type();

}


/* =====================================================
   SECRET LEVEL
===================================================== */

let secretNotificationShown =
    false;


function showSecretNotification() {

    if (
        secretNotificationShown
    ) {

        return;

    }


    secretNotificationShown =
        true;


    const notification =
        document.createElement(
            "div"
        );


    notification.textContent =
        "🔓 یک مرحله‌ی مخفی هم برات باز شده...";


    notification.style.position =
        "fixed";

    notification.style.left =
        "50%";

    notification.style.bottom =
        "25px";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.zIndex =
        "99999";

    notification.style.padding =
        "14px 20px";

    notification.style.borderRadius =
        "16px";

    notification.style.background =
        "#172b49";

    notification.style.color =
        "white";

    notification.style.fontSize =
        "11px";

    notification.style.boxShadow =
        "0 10px 35px rgba(0,0,0,.2)";


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();


        showPage(
            secretPage
        );


        secretNotificationShown =
            true;

    }, 2200);

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


        piece.style.position =
            "fixed";

        piece.style.width =
            Math.random() * 7 + 4 + "px";

        piece.style.height =
            Math.random() * 7 + 4 + "px";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            "-20px";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.borderRadius =
            "3px";

        piece.style.zIndex =
            "100000";


        document.body.appendChild(
            piece
        );


        const duration =
            Math.random() * 1800 + 2200;


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


        setTimeout(() => {

            piece.remove();

        }, duration);

    }

}


/* =====================================================
   INITIALIZE
===================================================== */

renderCalendar();

updateOpenedCounter();
