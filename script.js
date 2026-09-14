/* =====================================================
   ANA - Birthday Website
   script.js
   ===================================================== */


/* =========================
   PAGES
========================= */

const pages = {
    calendar: document.getElementById("calendarPage"),
    home: document.getElementById("homePage"),
    flower: document.getElementById("flowerPage"),
    cake: document.getElementById("cakePage"),
    letter: document.getElementById("letterPage"),
    secret: document.getElementById("secretPage")
};


function showPage(page) {

    if (!page) return;

    Object.values(pages).forEach(p => {

        if (!p) return;

        p.classList.remove("active");
        p.classList.add("hidden");

    });

    page.classList.remove("hidden");

    requestAnimationFrame(() => {
        page.classList.add("active");
    });
}


function goHome() {
    showPage(pages.home);
}


/* =====================================================
   CALENDAR
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


const monthName =
    document.getElementById("monthName");

const yearName =
    document.getElementById("yearName");

const calendarDays =
    document.getElementById("calendarDays");

const calendarMessage =
    document.getElementById("calendarMessage");


let currentYear = 1405;
let currentMonth = 5; // شهریور


function persianNumber(n) {

    return String(n).replace(
        /[0-9]/g,
        d => "۰۱۲۳۴۵۶۷۸۹"[d]
    );
}


function daysInMonth(month) {

    if (month <= 5) {
        return 31;
    }

    if (month <= 10) {
        return 30;
    }

    return 29;
}


function renderCalendar() {

    if (!calendarDays) return;

    monthName.textContent =
        monthNames[currentMonth];

    yearName.textContent =
        persianNumber(currentYear);

    calendarDays.innerHTML = "";


    const offset =
        (
            currentYear === 1405 &&
            currentMonth === 5
        )
            ? 0
            : (currentMonth * 2) % 7;


    /* روزهای خالی قبل از شروع ماه */

    for (let i = 0; i < offset; i++) {

        const empty =
            document.createElement("span");

        empty.className =
            "calendar-day empty";

        calendarDays.appendChild(empty);
    }


    /* روزهای ماه */

    for (
        let day = 1;
        day <= daysInMonth(currentMonth);
        day++
    ) {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "calendar-day";

        button.textContent =
            persianNumber(day);


        /* مشخص کردن ۲۸ شهریور */

        if (
            currentYear === 1405 &&
            currentMonth === 5 &&
            day === 28
        ) {

            button.classList.add("birthday");
        }


        button.addEventListener("click", () => {

            if (
                currentYear === 1405 &&
                currentMonth === 5 &&
                day === 28
            ) {

                calendarMessage.textContent =
                    "آره... همین تاریخه. 🤍";

                calendarMessage.classList.add("success");

                createConfetti();


                setTimeout(() => {

                    showPage(pages.home);

                }, 900);


            } else {

                calendarMessage.textContent =
                    "نه... این تاریخ نیست 😌 دوباره امتحان کن.";

                calendarMessage.classList.remove("success");
            }

        });


        calendarDays.appendChild(button);
    }
}


/* ماه قبل */

document
    .getElementById("prevMonth")
    ?.addEventListener("click", () => {

        currentMonth--;

        if (currentMonth < 0) {

            currentMonth = 11;
            currentYear--;
        }

        renderCalendar();

    });


/* ماه بعد */

document
    .getElementById("nextMonth")
    ?.addEventListener("click", () => {

        currentMonth++;

        if (currentMonth > 11) {

            currentMonth = 0;
            currentYear++;
        }

        renderCalendar();

    });



/* =====================================================
   THREE GIFTS
   ===================================================== */


const openedGifts = new Set();


function openGift(section) {

    if (section === "flower") {

        openedGifts.add("flower");

        showPage(pages.flower);

    }


    else if (section === "cake") {

        openedGifts.add("cake");

        showPage(pages.cake);

    }


    else if (section === "letter") {

        openedGifts.add("letter");

        showPage(pages.letter);
    }


    updateGiftProgress();
}



/* =====================================================
   GIFT PROGRESS
   ===================================================== */


function updateGiftProgress() {

    const count =
        document.getElementById("openedCount");


    if (count) {

        count.textContent =
            persianNumber(openedGifts.size);
    }


    /*
       مهم:
       اینجا دیگر مرحله مخفی باز نمی‌شود.
       فقط وضعیت قفل مرحله مخفی آپدیت می‌شود.
    */

    updateSecretLock();
}



/* کلیک روی کادوها */

document
    .querySelectorAll(".gift-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            openGift(card.dataset.section);

        });

    });



/* دکمه‌های برگشت */

document
    .querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            goHome
        );

    });



/* =====================================================
   FLOWER
   ===================================================== */


const growFlower =
    document.getElementById("growFlower");


const flowerStem =
    document.getElementById("flowerStem");


const flowerHead =
    document.getElementById("flowerHead");


const flowerMessage =
    document.getElementById("flowerMessage");


let flowerGrown = false;


growFlower?.addEventListener("click", () => {

    if (flowerGrown) return;

    flowerGrown = true;


    growFlower.textContent =
        "شکوفه داد 🌷";


    /* رشد ساقه */

    if (flowerStem) {

        flowerStem.classList.add("grow");

        flowerStem.style.height =
            "150px";
    }


    /* باز شدن گل */

    if (flowerHead) {

        setTimeout(() => {

            flowerHead.classList.add("bloom");

            flowerHead.style.opacity =
                "1";

            flowerHead.style.transform =
                "translateX(-50%) scale(1)";

        }, 700);
    }


    /* نمایش متن */

    setTimeout(() => {

        flowerMessage?.classList.add("show");

    }, 1300);

});



/* =====================================================
   CAKE
   ===================================================== */


const blowCake =
    document.getElementById("blowCake");


const footballStats =
    document.getElementById("footballStats");


const realMessage =
    document.getElementById("realMessage");


let cakeBlown = false;


blowCake?.addEventListener("click", () => {

    if (cakeBlown) return;

    cakeBlown = true;


    blowCake.textContent =
        "هورا ! 🎉";


    createConfetti();


    /* اطلاعات فوتبال */

    if (footballStats) {

        setTimeout(() => {

            footballStats.classList.add("show");

        }, 500);

    }


    /* پیام رئال */

    if (realMessage) {

        setTimeout(() => {

            realMessage.classList.add("show");

        }, 900);

    }

});



/* =====================================================
   LETTER
   ===================================================== */


const envelope =
    document.getElementById("envelope");


const openLetter =
    document.getElementById("openLetter");


const typedLetter =
    document.getElementById("typedLetter");


const letterSignature =
    document.getElementById("letterSignature");



const letterText = `سلام اناهیتا قشنگم، تولدت مبارک باشه. ♡

خیلی خوشحالم که تونستم با فرشته‌ی خوشگلی مثل تو آشنا بشم.
خیلی خیلی دوست دارم و خیلی برام باارزشی،
بابت تمام خنده‌ها و لحظات خوبی که برام ساختی، ممنونم.

فرشته کوچولو،
امیدوارم همیشه به تمام آرزوهات برسی
و توی تمام زندگیت موفق و سلامت باشی.`;



let letterOpened = false;



openLetter?.addEventListener("click", () => {

    if (letterOpened) return;

    letterOpened = true;


    envelope?.classList.add("open");


    openLetter.textContent =
        "نامه باز شد 🤍";


    setTimeout(() => {

        typeLetter();

    }, 700);

});



function typeLetter() {

    if (!typedLetter) return;


    typedLetter.textContent = "";


    if (letterSignature) {

        letterSignature.classList.remove(
            "show"
        );
    }


    let i = 0;


    function type() {

        if (i < letterText.length) {

            typedLetter.textContent +=
                letterText[i];

            i++;


            setTimeout(
                type,
                25
            );


        } else {

            /*
               نامه کاملاً تمام شده.
               امضا نمایش داده می‌شود.
               مرحله مخفی اینجا باز نمی‌شود.
            */

            if (letterSignature) {

                letterSignature.textContent =
                    "از طرف هلیا ♡";

                letterSignature.classList.add(
                    "show"
                );
            }


            /*
               فقط وضعیت مرحله مخفی را
               بعد از تمام شدن نامه بررسی می‌کنیم.
            */

            updateSecretLock();
        }
    }


    type();
}



/* =====================================================
   SECRET LEVEL
   ===================================================== */


const secretUnlockBox =
    document.getElementById(
        "secretUnlockBox"
    );


const secretUnlockButton =
    document.getElementById(
        "secretUnlockButton"
    );


const secretUnlockText =
    document.getElementById(
        "secretUnlockText"
    );


let secretUnlocked = false;



/*
   بررسی می‌کند که آیا هر سه کادو
   باز شده‌اند یا نه.
*/

function updateSecretLock() {

    if (
        !secretUnlockBox ||
        !secretUnlockButton
    ) {
        return;
    }


    /* اگر هنوز هر سه کادو باز نشده‌اند */

    if (openedGifts.size < 3) {

        secretUnlockBox.classList.add(
            "locked"
        );


        secretUnlockButton.disabled =
            true;


        secretUnlockButton.textContent =
            "هنوز قفله 🔒";


        if (secretUnlockText) {

            const remaining =
                3 - openedGifts.size;


            secretUnlockText.textContent =
                `هنوز ${persianNumber(remaining)} کادو باقی مونده...`;
        }


        return;
    }



    /* هر سه کادو باز شده‌اند */

    secretUnlockBox.classList.remove(
        "locked"
    );


    secretUnlockButton.disabled =
        false;


    secretUnlockButton.textContent =
        "باز کردن مرحله مخفی ✨";


    if (secretUnlockText) {

        secretUnlockText.textContent =
            "هورا! هر سه کادو رو باز کردی. حالا می‌تونی وارد مرحله‌ی مخفی بشی 🤍";
    }

}



/*
   مرحله مخفی فقط با کلیک کاربر باز می‌شود.
*/

secretUnlockButton?.addEventListener(
    "click",
    () => {

        /* اگر سه کادو باز نشده باشند */

        if (openedGifts.size < 3) {
            return;
        }


        /* اگر قبلاً باز شده */

        if (secretUnlocked) {
            return;
        }


        secretUnlocked = true;


        createConfetti();


        setTimeout(() => {

            showPage(pages.secret);

        }, 700);

    }
);



/* =====================================================
   CONFETTI
   ===================================================== */


function createConfetti() {

    const colors = [
        "#f2a7c4",
        "#8fc8e7",
        "#f7d477",
        "#ffffff"
    ];


    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("div");


        const size =
            Math.random() * 7 + 4;


        const duration =
            Math.random() * 1600 + 1800;


        Object.assign(
            piece.style,
            {

                position: "fixed",

                width: `${size}px`,

                height: `${size}px`,

                left:
                    `${Math.random() * 100}vw`,

                top: "-15px",

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


        setTimeout(() => {

            piece.remove();

        }, duration);
    }
}



/* =====================================================
   START
   ===================================================== */


showPage(pages.calendar);

renderCalendar();

updateGiftProgress();
