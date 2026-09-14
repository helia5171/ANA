/* =========================================
   Birthday Gift Website
   JavaScript
========================================= */


/* =========================================
   PAGE ELEMENTS
========================================= */

const calendarPage = document.getElementById("calendarPage");
const homePage = document.getElementById("homePage");

const flowerPage = document.getElementById("flowerPage");
const cakePage = document.getElementById("cakePage");
const letterPage = document.getElementById("letterPage");

const secretPage = document.getElementById("secretPage");


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageToShow) {

    const pages = [
        calendarPage,
        homePage,
        flowerPage,
        cakePage,
        letterPage,
        secretPage
    ];

    pages.forEach(page => {

        page.classList.remove("active");
        page.classList.add("hidden");

    });

    pageToShow.classList.remove("hidden");

    setTimeout(() => {
        pageToShow.classList.add("active");
    }, 30);
}


/* =========================================
   JALALI CALENDAR
========================================= */

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

const monthNameElement = document.getElementById("monthName");
const yearNameElement = document.getElementById("yearName");
const calendarDays = document.getElementById("calendarDays");
const calendarMessage = document.getElementById("calendarMessage");

let currentMonth = 5;
let currentYear = 1405;


/*
    این تابع تعداد روزهای ماه شمسی را مشخص می‌کند.
*/
function getMonthDays(year, month) {

    if (month < 6) {
        return 31;
    }

    if (month < 11) {
        return 30;
    }

    return isLeapJalali(year) ? 30 : 29;
}


/*
    تشخیص سال کبیسه‌ی شمسی
*/
function isLeapJalali(year) {

    const remainder = year % 33;

    const leapYears = [
        1, 5, 9, 13, 17, 22, 26, 30
    ];

    return leapYears.includes(remainder);
}


/*
    تبدیل عدد به فارسی
*/
function toPersianNumber(number) {

    const english = "0123456789";
    const persian = "۰۱۲۳۴۵۶۷۸۹";

    return String(number).replace(
        /[0-9]/g,
        digit => persian[english.indexOf(digit)]
    );
}


/*
    ساخت تقویم
*/
function renderCalendar() {

    monthNameElement.textContent = monthNames[currentMonth];

    yearNameElement.textContent =
        toPersianNumber(currentYear);

    calendarDays.innerHTML = "";

    /*
        برای سادگی و ظاهر هدیه،
        شهریور را به شکل تقویم کامل نمایش می‌دهیم.
    */

    let firstDayOffset = 1;

    /*
        اگر ماه شهریور باشد، تاریخ ۲۸ همیشه قابل انتخاب است.
    */

    for (let i = 0; i < firstDayOffset; i++) {

        const empty = document.createElement("div");

        empty.className = "calendar-day empty";

        calendarDays.appendChild(empty);
    }

    const totalDays = getMonthDays(
        currentYear,
        currentMonth
    );

    for (let day = 1; day <= totalDays; day++) {

        const button = document.createElement("button");

        button.className = "calendar-day";

        button.textContent = toPersianNumber(day);


        /*
            ۲۸ شهریور = روز تولد
        */

        if (
            currentMonth === 5 &&
            day === 28
        ) {

            button.classList.add("birthday");

            button.title = "تاریخ خاص 💗";

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


/* =========================================
   CHECK BIRTHDAY
========================================= */

function checkBirthday(month, day) {

    if (
        month === 5 &&
        day === 28
    ) {

        calendarMessage.textContent =
            "آره... همین تاریخه. 🤍";

        calendarMessage.style.color =
            "#579cc5";

        setTimeout(() => {

            openBirthday();

        }, 900);

    } else {

        calendarMessage.textContent =
            "این تاریخ نیست... یه بار دیگه امتحان کن 🌷";

        calendarMessage.style.color =
            "#e889b1";

    }
}


/* =========================================
   OPEN BIRTHDAY
========================================= */

function openBirthday() {

    showPage(homePage);

    createConfetti();

}


/* =========================================
   CALENDAR BUTTONS
========================================= */

document
    .getElementById("prevMonth")
    .addEventListener("click", () => {

        currentMonth--;

        if (currentMonth < 0) {

            currentMonth = 11;
            currentYear--;

        }

        renderCalendar();

    });


document
    .getElementById("nextMonth")
    .addEventListener("click", () => {

        currentMonth++;

        if (currentMonth > 11) {

            currentMonth = 0;
            currentYear++;

        }

        renderCalendar();

    });


/* =========================================
   GIFT CARD NAVIGATION
========================================= */

const giftCards =
    document.querySelectorAll(".gift-card");

let openedGifts = new Set();

giftCards.forEach(card => {

    card.addEventListener("click", () => {

        const section =
            card.dataset.section;

        openedGifts.add(section);

        updateOpenedCounter();

        if (section === "flower") {

            showPage(flowerPage);

        }

        if (section === "cake") {

            showPage(cakePage);

        }

        if (section === "letter") {

            showPage(letterPage);

        }

    });

});


/* =========================================
   COUNTER
========================================= */

function updateOpenedCounter() {

    const count =
        openedGifts.size;

    document.getElementById(
        "openedCount"
    ).textContent = toPersianNumber(count);

}


/* =========================================
   BACK BUTTONS
========================================= */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(homePage);

                checkSecretLevel();

            }
        );

    });


/* =========================================
   FLOWER
========================================= */

const growFlowerButton =
    document.getElementById("growFlower");

const flowerStem =
    document.getElementById("flowerStem");

const flowerHead =
    document.getElementById("flowerHead");

const flowerMessage =
    document.getElementById("flowerMessage");

let flowerGrown = false;

growFlowerButton.addEventListener(
    "click",
    () => {

        if (flowerGrown) return;

        flowerGrown = true;

        growFlowerButton.textContent =
            "شکوفه داد 🌷";

        flowerStem.style.height =
            "145px";

        setTimeout(() => {

            flowerHead.style.opacity = "1";

            flowerHead.style.transform =
                "translateX(-50%) scale(1)";

        }, 900);


        setTimeout(() => {

            flowerMessage.classList.add("show");

        }, 1700);

    }
);


/* =========================================
   CAKE
========================================= */

const blowCake =
    document.getElementById("blowCake");

const footballStats =
    document.getElementById("footballStats");

const realMessage =
    document.getElementById("realMessage");

let cakeBlown = false;

blowCake.addEventListener(
    "click",
    () => {

        if (cakeBlown) return;

        cakeBlown = true;

        document
            .querySelectorAll(".flame")
            .forEach(flame => {

                flame.style.opacity = "0";
                flame.style.transform =
                    "translateX(-50%) scale(0)";

            });

        blowCake.textContent =
            "Level Up شد! ⚽";

        setTimeout(() => {

            footballStats.classList.add("show");

        }, 500);

        setTimeout(() => {

            realMessage.classList.add("show");

        }, 1400);

    }
);


/* =========================================
   LETTER
========================================= */

const envelope =
    document.getElementById("envelope");

const openLetterButton =
    document.getElementById("openLetter");

const typedLetter =
    document.getElementById("typedLetter");


const letterText = `نمی‌دونم وقتی داری این نامه رو می‌خونی چه ساعتیه،
کجایی و روزت چطور گذشته...

ولی می‌دونم امروز یک دلیل خیلی خوب
برای خوشحال بودن وجود داره؛

چون امروز روزیه که تو به دنیا اومدی.

امیدوارم توی سال جدیدت،
اتفاق‌هایی برات بیفته که حتی
فکرش رو هم نمی‌کردی.

امیدوارم هر بار که می‌دوی،
هر بار که وارد زمین می‌شی،
و هر بار که برای چیزی که دوستش داری تلاش می‌کنی،

یادت باشه که هنوز کلی مسیر
و کلی لحظه‌ی قشنگ جلوت هست.

شاید همه‌ی بازی‌ها رو نبری،
شاید بعضی روزها سخت باشن،
ولی مهم اینه که بازی رو ادامه بدی.

و امیدوارم وقتی چند سال بعد
به امروز نگاه می‌کنی،

با خودت بگی:

«چه خوب که ادامه دادم.»

امروز،
۲۸ شهریور،

روز توئه.

پس برای خودت،
برای رویا‌هات،
برای تمام گل‌هایی که هنوز نزدی
و تمام خط پایان‌هایی که هنوز نرسیدی،

یک سال دیگه رو شروع کن.

🤍`;


let letterOpened = false;

openLetterButton.addEventListener(
    "click",
    () => {

        if (letterOpened) return;

        letterOpened = true;

        envelope.classList.add("open");

        openLetterButton.textContent =
            "نامه باز شد 🤍";

        setTimeout(() => {

            typeLetter();

        }, 700);

    }
);


/*
    افکت تایپ نامه
*/

function typeLetter() {

    let index = 0;

    const typingSpeed = 25;

    function type() {

        if (index < letterText.length) {

            typedLetter.textContent +=
                letterText.charAt(index);

            index++;

            setTimeout(type, typingSpeed);

        }

    }

    type();
}


/* =========================================
   SECRET LEVEL
========================================= */

function checkSecretLevel() {

    if (openedGifts.size === 3) {

        setTimeout(() => {

            showSecretNotification();

        }, 500);

    }

}


/*
    پیام کوچک برای باز شدن مرحله‌ی مخفی
*/

function showSecretNotification() {

    const notification =
        document.createElement("div");

    notification.textContent =
        "🔓 یک چیز دیگه هم برات باز شده...";

    notification.style.position =
        "fixed";

    notification.style.bottom =
        "25px";

    notification.style.left =
        "50%";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.zIndex =
        "9999";

    notification.style.padding =
        "14px 20px";

    notification.style.borderRadius =
        "15px";

    notification.style.background =
        "#182b49";

    notification.style.color =
        "white";

    notification.style.fontSize =
        "12px";

    notification.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    document.body.appendChild(
        notification
    );

    setTimeout(() => {

        notification.remove();

        showPage(secretPage);

    }, 2200);

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const pieces = 50;

    for (let i = 0; i < pieces; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position =
            "fixed";

        confetti.style.width =
            Math.random() * 7 + 4 + "px";

        confetti.style.height =
            Math.random() * 7 + 4 + "px";

        confetti.style.borderRadius =
            "3px";

        const colors = [
            "#f4a8c7",
            "#91c9e8",
            "#f7d37b",
            "#ffffff"
        ];

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.zIndex =
            "10000";

        document.body.appendChild(
            confetti
        );

        const duration =
            Math.random() * 2000 + 2000;

        confetti.animate(
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
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {

            confetti.remove();

        }, duration);

    }

}


/* =========================================
   INITIALIZE
========================================= */

renderCalendar();

updateOpenedCounter();
