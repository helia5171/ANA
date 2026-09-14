/* ANA - Birthday Website - script.js
   هماهنگ با index.html فعلی
*/

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


/* =========================
   CALENDAR
========================= */

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

const monthName = document.getElementById("monthName");
const yearName = document.getElementById("yearName");
const calendarDays = document.getElementById("calendarDays");
const calendarMessage = document.getElementById("calendarMessage");

let currentYear = 1405;
let currentMonth = 5; // شهریور

function persianNumber(n) {
    return String(n).replace(
        /[0-9]/g,
        d => "۰۱۲۳۴۵۶۷۸۹"[d]
    );
}

function daysInMonth(month) {
    return month <= 5
        ? 31
        : (month <= 10 ? 30 : 29);
}

function renderCalendar() {
    if (!calendarDays) return;

    monthName.textContent = monthNames[currentMonth];
    yearName.textContent = persianNumber(currentYear);

    calendarDays.innerHTML = "";

    const offset =
        (currentYear === 1405 && currentMonth === 5)
            ? 0
            : (currentMonth * 2) % 7;

    for (let i = 0; i < offset; i++) {
        const empty = document.createElement("span");
        empty.className = "calendar-day empty";
        calendarDays.appendChild(empty);
    }

    for (
        let day = 1;
        day <= daysInMonth(currentMonth);
        day++
    ) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "calendar-day";
        button.textContent = persianNumber(day);

        // تولد اناهیتا: ۲۸ شهریور
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


// ماه قبل
document.getElementById("prevMonth")?.addEventListener(
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


// ماه بعد
document.getElementById("nextMonth")?.addEventListener(
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


/* =========================
   THREE GIFTS
========================= */

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


function updateGiftProgress() {

    const count =
        document.getElementById("openedCount");

    if (count) {
        count.textContent =
            persianNumber(openedGifts.size);
    }

    // وقتی هر سه هدیه باز شدند
    if (openedGifts.size === 3) {

        setTimeout(
            unlockSecretLevel,
            700
        );
    }
}


// کارت‌های هدیه
document.querySelectorAll(".gift-card")
    .forEach(card => {

        card.addEventListener("click", () => {

            openGift(
                card.dataset.section
            );

        });

    });


// دکمه‌های برگشت
document.querySelectorAll(".back-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            goHome
        );

    });


/* =========================
   FLOWER
========================= */

const growFlower =
    document.getElementById("growFlower");

const flowerStem =
    document.getElementById("flowerStem");

const flowerHead =
    document.getElementById("flowerHead");

const flowerMessage =
    document.getElementById("flowerMessage");

let flowerGrown = false;


growFlower?.addEventListener(
    "click",
    () => {

        if (flowerGrown) return;

        flowerGrown = true;

        growFlower.textContent =
            "شکوفه داد 🌷";


        if (flowerStem) {

            flowerStem.classList.add("grow");

            flowerStem.style.height =
                "150px";
        }


        if (flowerHead) {

            setTimeout(() => {

                flowerHead.classList.add(
                    "bloom"
                );

                flowerHead.style.opacity =
                    "1";

                flowerHead.style.transform =
                    "translateX(-50%) scale(1)";

            }, 700);
        }


        setTimeout(() => {

            flowerMessage?.classList.add(
                "show"
            );

        }, 1300);
    }
);


/* =========================
   CAKE
========================= */

const blowCake =
    document.getElementById("blowCake");

const footballStats =
    document.getElementById("footballStats");

const realMessage =
    document.getElementById("realMessage");

let cakeBlown = false;


blowCake?.addEventListener(
    "click",
    () => {

        if (cakeBlown) return;

        cakeBlown = true;

        // متن جدید
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

            }, 900);
        }
    }
);


/* =========================
   LETTER
========================= */

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


openLetter?.addEventListener(
    "click",
    () => {

        if (letterOpened) return;

        letterOpened = true;

        envelope?.classList.add("open");

        openLetter.textContent =
            "نامه باز شد 🤍";

        setTimeout(
            typeLetter,
            700
        );
    }
);


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

            if (letterSignature) {

                letterSignature.textContent =
                    "از طرف هلیا ♡";

                letterSignature.classList.add(
                    "show"
                );
            }
        }
    }

    type();
}


/* =========================
   SECRET LEVEL
========================= */

let secretUnlocked = false;


function unlockSecretLevel() {

    if (
        secretUnlocked ||
        openedGifts.size !== 3
    ) {
        return;
    }

    secretUnlocked = true;

    createConfetti();


    const notification =
        document.createElement("div");

    notification.textContent =
        "🔓 مرحله‌ی مخفی باز شد...";


    Object.assign(
        notification.style,
        {
            position: "fixed",
            left: "50%",
            bottom: "25px",
            transform:
                "translateX(-50%)",
            zIndex: "99999",
            padding: "14px 22px",
            borderRadius: "18px",
            background: "#172b49",
            color: "#fff",
            fontSize: "14px",
            boxShadow:
                "0 10px 35px rgba(0,0,0,.22)"
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

    }, 1800);
}


/* =========================
   CONFETTI
========================= */

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
                left: `${Math.random() * 100}vw`,
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


        setTimeout(
            () => piece.remove(),
            duration
        );
    }
}


/* =========================
   START
========================= */

showPage(pages.calendar);

renderCalendar();

updateGiftProgress();
