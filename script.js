/* =====================================================
   ANA - BIRTHDAY WEBSITE
   script.js — هماهنگ با index.html فعلی
===================================================== */

/* =====================================================
   PAGE ELEMENTS
===================================================== */

const pages = {
    calendar: document.getElementById("calendarPage"),
    home: document.getElementById("homePage"),
    flower: document.getElementById("flowerPage"),
    cake: document.getElementById("cakePage"),
    letter: document.getElementById("letterPage"),
    secret: document.getElementById("secretPage")
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
        letterPage: pages.letter,
        secretPage: pages.secret
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


    showPage(page);
    updateSecretButton();
}


function goHome() {

    showPage(pages.home);

    updateSecretButton();

    if (openedGifts.size === 3) {

        setTimeout(() => {
            showSecretNotification();
        }, 500);

    }
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


/* عناصر تقویم */

const calendarTitle =
    document.getElementById("calendarTitle");

const calendarDays =
    document.getElementById("calendarDays");

const calendarHint =
    document.getElementById("calendarHint");


/* تعداد روزهای ماه */

function getMonthDays(year, month) {

    if (month <= 5) {
        return 31;
    }

    if (month <= 10) {
        return 30;
    }

    return 29;
}


/* جایگاه اولین روز */

function getFirstDayOffset(year, month) {

    if (
        year === 1405 &&
        month === 5
    ) {
        return 1;
    }

    return (month * 2) % 7;
}


/* ساخت تقویم */

function renderCalendar() {

    if (!calendarDays || !calendarTitle) {
        return;
    }


    calendarTitle.textContent =
        `${monthNames[currentMonth]} ${toPersianNumber(currentYear)}`;


    calendarDays.innerHTML = "";


    const offset =
        getFirstDayOffset(
            currentYear,
            currentMonth
        );


    /* خانه‌های خالی */

    for (let i = 0; i < offset; i++) {

        const empty =
            document.createElement("div");

        empty.className =
            "calendar-day empty";

        calendarDays.appendChild(empty);
    }


    /* روزهای ماه */

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


        button.type = "button";

        button.className =
            "calendar-day";

        button.textContent =
            toPersianNumber(day);


        /* مشخص کردن ۲۸ شهریور */

        if (
            currentYear === 1405 &&
            currentMonth === 5 &&
            day === 28
        ) {

            button.classList.add("birthday");
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


/* بررسی تاریخ تولد */

function checkBirthday(month, day) {

    if (!calendarHint) return;


    if (
        month === 5 &&
        day === 28
    ) {

        calendarHint.textContent =
            "آره... همین تاریخه. 🤍";

        calendarHint.style.color =
            "#559dc5";


        createConfetti();


        setTimeout(() => {
            openBirthday();
        }, 1000);

    } else {

        calendarHint.textContent =
            "نه... این تاریخ نیست 😌 دوباره امتحان کن.";

        calendarHint.style.color =
            "#df7fa8";
    }
}


/* باز شدن صفحه اصلی */

function openBirthday() {

    showPage(pages.home);

    createConfetti();
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

const openedGifts = new Set();


function updateSecretButton() {

    const secretButton =
        document.getElementById("secretButton");


    if (!secretButton) return;


    if (openedGifts.size === 3) {

        secretButton.classList.remove(
            "hidden"
        );

    } else {

        secretButton.classList.add(
            "hidden"
        );
    }
}


/* ثبت باز شدن هدیه‌ها */

document
    .querySelectorAll(".gift-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                if (
                    card.classList.contains(
                        "flower-card"
                    )
                ) {
                    openedGifts.add("flower");
                }


                if (
                    card.classList.contains(
                        "cake-card"
                    )
                ) {
                    openedGifts.add("cake");
                }


                if (
                    card.classList.contains(
                        "letter-card"
                    )
                ) {
                    openedGifts.add("letter");
                }


                updateSecretButton();
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

const growFlowerButton =
    document.getElementById(
        "growFlowerButton"
    );


const bigFlower =
    document.getElementById(
        "bigFlower"
    );


const flowerMessage =
    document.getElementById(
        "flowerMessage"
    );


let flowerAlreadyGrown = false;


growFlowerButton?.addEventListener(
    "click",
    () => {

        if (flowerAlreadyGrown) {
            return;
        }


        flowerAlreadyGrown = true;


        growFlowerButton.textContent =
            "شکوفه داد 🌷";


        const stem =
            bigFlower?.querySelector(
                ".big-flower-stem"
            );


        const head =
            bigFlower?.querySelector(
                ".big-flower-head"
            );


        if (stem) {

            stem.style.height =
                "150px";
        }


        bigFlower
            ?.querySelectorAll(".leaf")
            .forEach(leaf => {

                setTimeout(() => {

                    leaf.style.opacity =
                        "1";

                }, 700);

            });


        if (head) {

            setTimeout(() => {

                head.style.opacity =
                    "1";

                head.style.transform =
                    "translateX(-50%) scale(1)";

            }, 900);
        }


        setTimeout(() => {

            flowerMessage
                ?.classList
                .add("show");

        }, 1800);

    }
);


/* =====================================================
   CAKE
===================================================== */

const blowCakeButton =
    document.getElementById(
        "blowCakeButton"
    );


const cakeInstruction =
    document.getElementById(
        "cakeInstruction"
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


/* فوت کردن کیک */

blowCakeButton?.addEventListener(
    "click",
    () => {

        if (cakeAlreadyBlown) {
            return;
        }


        cakeAlreadyBlown = true;


        /* متن موردنظر تو */

        blowCakeButton.textContent =
            "هورا ! 🎉";


        if (cakeInstruction) {

            cakeInstruction.textContent =
                "یک مرحله‌ی دیگه هم کامل شد ⚽";
        }


        createConfetti();


        if (footballGame) {

            setTimeout(() => {

                footballGame
                    .classList
                    .remove("hidden");

                footballGame
                    .classList
                    .add("show");

            }, 500);
        }

    }
);


/* =====================================================
   FOOTBALL
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


        /* دویدن */

        if (runningMessage) {

            setTimeout(() => {

                runningMessage
                    .classList
                    .remove("hidden");

                runningMessage
                    .classList
                    .add("show");

            }, 900);
        }


        /* آرزوها */

        if (dreamMessage) {

            setTimeout(() => {

                dreamMessage
                    .classList
                    .remove("hidden");

                dreamMessage
                    .classList
                    .add("show");

            }, 1800);
        }


        /* پیام نهایی */

        if (realMessage) {

            setTimeout(() => {

                realMessage
                    .classList
                    .remove("hidden");

                realMessage
                    .classList
                    .add("show");

                createConfetti();

            }, 2800);
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


const openLetterButton =
    document.getElementById(
        "openLetterButton"
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


/* باز کردن نامه */

openLetterButton?.addEventListener(
    "click",
    () => {

        if (letterAlreadyOpened) {
            return;
        }


        letterAlreadyOpened = true;


        envelope
            ?.classList
            .add("open");


        openLetterButton.textContent =
            "نامه باز شد 🤍";


        setTimeout(
            typeLetter,
            800
        );

    }
);


/* تایپ شدن نامه */

function typeLetter() {

    if (!typedLetter) {
        return;
    }


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

            setTimeout(() => {

                if (letterSignature) {

                    letterSignature.textContent =
                        "از طرف هلیا ♡";

                    letterSignature
                        .classList
                        .add("show");
                }

            }, 500);

        }
    }


    type();
}


/* =====================================================
   SECRET LEVEL
===================================================== */

let secretNotificationShown = false;


function showSecretNotification() {

    if (
        secretNotificationShown ||
        openedGifts.size !== 3
    ) {
        return;
    }


    secretNotificationShown = true;


    const notification =
        document.createElement("div");


    notification.textContent =
        "🔓 یک مرحله‌ی مخفی هم برات باز شده...";


    Object.assign(
        notification.style,
        {
            position: "fixed",
            left: "50%",
            bottom: "25px",
            transform:
                "translateX(-50%)",
            zIndex: "99999",
            padding: "14px 20px",
            borderRadius: "16px",
            background: "#172b49",
            color: "white",
            fontSize: "11px",
            boxShadow:
                "0 10px 35px rgba(0,0,0,.2)"
        }
    );


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.remove();

        showPage(
            pages.secret
        );

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


        const size =
            Math.random() * 7 + 4;


        const duration =
            Math.random() * 1800 + 2200;


        Object.assign(
            piece.style,
            {
                position: "fixed",
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}vw`,
                top: "-20px",
                background:
                    colors[
                        Math.floor(
                            Math.random() *
                            colors.length
                        )
                    ],
                borderRadius: "3px",
                zIndex: "100000",
                pointerEvents: "none"
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
                duration: duration,
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

/*
   خیلی مهم:
   سایت از تقویم شروع می‌شود.
*/

showPage(
    pages.calendar
);


renderCalendar();

updateSecretButton();
