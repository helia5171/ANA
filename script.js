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


/* =========================
   PAGE NAVIGATION
========================= */

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

function openPage(pageId) {
    const page = document.getElementById(pageId);

    if (page) {
        showPage(page);
    }
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

const calendarTitle =
    document.getElementById("calendarTitle");

const calendarDays =
    document.getElementById("calendarDays");

const calendarHint =
    document.getElementById("calendarHint");

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
    if (!calendarDays || !calendarTitle) return;

    calendarTitle.textContent =
        `${monthNames[currentMonth]} ${persianNumber(currentYear)}`;

    calendarDays.innerHTML = "";

    const offset =
        (currentYear === 1405 && currentMonth === 5)
            ? 0
            : (currentMonth * 2) % 7;


    for (let i = 0; i < offset; i++) {

        const empty =
            document.createElement("span");

        empty.className =
            "calendar-day empty";

        calendarDays.appendChild(empty);
    }


    for (
        let day = 1;
        day <= daysInMonth(currentMonth);
        day++
    ) {

        const button =
            document.createElement("button");

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

                if (calendarHint) {

                    calendarHint.textContent =
                        "آره... همین تاریخه. 🤍";

                    calendarHint.classList.add(
                        "success"
                    );
                }

                createConfetti();


                setTimeout(() => {
                    showPage(pages.home);
                }, 900);

            } else {

                if (calendarHint) {

                    calendarHint.textContent =
                        "نه... این تاریخ نیست 😌 دوباره امتحان کن.";

                    calendarHint.classList.remove(
                        "success"
                    );
                }
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

    const secretButton =
        document.getElementById("secretButton");

    /*
       مرحله مخفی فقط وقتی هر سه هدیه باز شوند
       دکمه‌اش روی صفحه اصلی ظاهر می‌شود.
       خودش صفحه مخفی را باز نمی‌کند.
    */

    if (
        secretButton &&
        openedGifts.size === 3
    ) {

        secretButton.classList.remove("hidden");

    }
}


/* =========================
   FLOWER
========================= */

const growFlowerButton =
    document.getElementById("growFlowerButton");

const bigFlower =
    document.getElementById("bigFlower");

const flowerMessage =
    document.getElementById("flowerMessage");

let flowerGrown = false;


growFlowerButton?.addEventListener(
    "click",
    () => {

        if (flowerGrown) return;

        flowerGrown = true;


        growFlowerButton.textContent =
            "شکوفه داد 🌷";


        if (bigFlower) {

            bigFlower.classList.add("bloom");
        }


        setTimeout(() => {

            flowerMessage?.classList.add("show");

        }, 900);

    }
);


/* =========================
   CAKE
========================= */

const blowCakeButton =
    document.getElementById("blowCakeButton");

const cakeInstruction =
    document.getElementById("cakeInstruction");

const footballGame =
    document.getElementById("footballGame");

const footballButton =
    document.getElementById("footballButton");

const footballBall =
    document.getElementById("footballBall");

const runningMessage =
    document.getElementById("runningMessage");

const dreamMessage =
    document.getElementById("dreamMessage");

const realMessage =
    document.getElementById("realMessage");

let cakeBlown = false;


blowCakeButton?.addEventListener(
    "click",
    () => {

        if (cakeBlown) return;

        cakeBlown = true;


        blowCakeButton.textContent =
            "هورا ! 🎉";


        if (cakeInstruction) {

            cakeInstruction.textContent =
                "یک مرحله‌ی دیگه هم کامل شد ⚽";
        }


        createConfetti();


        footballGame?.classList.remove("hidden");

    }
);


/* =========================
   FOOTBALL
========================= */

let footballPlayed = false;


footballButton?.addEventListener(
    "click",
    () => {

        if (footballPlayed) return;

        footballPlayed = true;


        if (footballBall) {

            footballBall.classList.add("kick");
        }


        setTimeout(() => {

            footballGame?.classList.add("hidden");

            runningMessage?.classList.remove(
                "hidden"
            );

        }, 800);


        setTimeout(() => {

            runningMessage?.classList.add(
                "show"
            );

        }, 900);


        setTimeout(() => {

            dreamMessage?.classList.remove(
                "hidden"
            );

        }, 1600);


        setTimeout(() => {

            realMessage?.classList.remove(
                "hidden"
            );

        }, 2300);

    }
);


/* =========================
   LETTER
========================= */

const envelope =
    document.getElementById("envelope");

const openLetterButton =
    document.getElementById("openLetterButton");

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


openLetterButton?.addEventListener(
    "click",
    () => {

        if (letterOpened) return;

        letterOpened = true;


        envelope?.classList.add("open");


        openLetterButton.textContent =
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

        }

        else {

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

    showPage(pages.secret);
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


    for (
        let i = 0;
        i < 45;
        i++
    ) {

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
