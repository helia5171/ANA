document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // عناصر اصلی
    // =========================

    const pages = {
        calendar: document.getElementById("calendarPage"),
        home: document.getElementById("homePage"),
        flower: document.getElementById("flowerPage"),
        cake: document.getElementById("cakePage"),
        letter: document.getElementById("letterPage"),
        secret: document.getElementById("secretPage")
    };

    const openedGifts = new Set();

    // =========================
    // ابزارهای کمکی
    // =========================

    function persianNumber(number) {
        return String(number).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
    }

    function showPage(page) {
        if (!page) return;

        Object.values(pages).forEach(p => {
            if (!p) return;
            p.classList.remove("active");
            p.classList.add("hidden");
        });

        page.classList.remove("hidden");
        page.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function createConfetti() {
        const container = document.createElement("div");
        container.className = "confetti-container";

        for (let i = 0; i < 45; i++) {
            const piece = document.createElement("span");
            piece.className = "confetti";

            piece.style.left = `${Math.random() * 100}%`;
            piece.style.animationDelay = `${Math.random() * 0.8}s`;
            piece.style.animationDuration = `${2 + Math.random() * 2}s`;

            container.appendChild(piece);
        }

        document.body.appendChild(container);

        setTimeout(() => {
            container.remove();
        }, 4500);
    }

    // =========================
    // تقویم
    // =========================

    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const monthName = document.getElementById("monthName");
    const yearName = document.getElementById("yearName");
    const calendarDays = document.getElementById("calendarDays");
    const calendarMessage = document.getElementById("calendarMessage");

    const shamsiMonths = [
        "فروردین", "اردیبهشت", "خرداد",
        "تیر", "مرداد", "شهریور",
        "مهر", "آبان", "آذر",
        "دی", "بهمن", "اسفند"
    ];

    let calendarMonth = 5;
    let calendarYear = 1405;

    function renderCalendar() {
        if (!calendarDays) return;

        calendarDays.innerHTML = "";

        if (monthName) {
            monthName.textContent = shamsiMonths[calendarMonth];
        }

        if (yearName) {
            yearName.textContent = persianNumber(calendarYear);
        }

        const daysInMonth =
            calendarMonth < 6 ? 31 :
            calendarMonth < 11 ? 30 :
            29;

        for (let day = 1; day <= daysInMonth; day++) {
            const button = document.createElement("button");

            button.className = "calendar-day";
            button.textContent = persianNumber(day);
            button.type = "button";

            if (day === 28 && calendarMonth === 5) {
                button.classList.add("birthday-day");

                button.addEventListener("click", () => {
                    if (calendarMessage) {
                        calendarMessage.textContent = "آرههه! خودشه! 🎂💗";
                    }

                    createConfetti();

                    setTimeout(() => {
                        showPage(pages.home);
                    }, 900);
                });
            } else {
                button.addEventListener("click", () => {
                    if (calendarMessage) {
                        calendarMessage.textContent =
                            "نههه، تولد اناهیتا این روز نیست 😭";
                    }
                });
            }

            calendarDays.appendChild(button);
        }
    }

    prevMonth?.addEventListener("click", () => {
        calendarMonth--;
        if (calendarMonth < 0) {
            calendarMonth = 11;
            calendarYear--;
        }
        renderCalendar();
    });

    nextMonth?.addEventListener("click", () => {
        calendarMonth++;
        if (calendarMonth > 11) {
            calendarMonth = 0;
            calendarYear++;
        }
        renderCalendar();
    });

    renderCalendar();

    // =========================
    // رفتن از خانه به کادوها
    // =========================

    document.querySelectorAll(".gift-card").forEach(card => {
        card.addEventListener("click", () => {
            const section = card.dataset.section;

            if (!section || !pages[section]) return;

            openedGifts.add(section);

            showPage(pages[section]);

            updateGiftProgress();
        });
    });

    // =========================
    // دکمه‌های برگشت (پشتیبانی از هر دو حالت)
    // =========================

    document.querySelectorAll("[data-back], .back-button").forEach(button => {
        button.addEventListener("click", () => {
            showPage(pages.home);
        });
    });

    // =========================
    // پیشرفت کادوها
    // =========================

    const giftProgress = document.getElementById("giftProgress");

    function updateGiftProgress() {
        if (giftProgress) {
            giftProgress.textContent =
                `${persianNumber(openedGifts.size)} از ${persianNumber(3)} کادو باز شده`;
        }

        updateSecretLock();
    }

    // =========================
    // گل
    // =========================

    const growFlower = document.getElementById("growFlower");
    const flowerStem = document.getElementById("flowerStem");
    const flowerHead = document.getElementById("flowerHead");
    const flowerMessage = document.getElementById("flowerMessage");

    let flowerGrown = false;

    growFlower?.addEventListener("click", () => {
        if (flowerGrown) return;
        flowerGrown = true;

        if (flowerStem) flowerStem.classList.add("grown");
        if (flowerHead) flowerHead.classList.add("bloom");

        if (growFlower) {
            growFlower.textContent = "گل شکوفه زد 🌸";
            growFlower.disabled = true;
        }

        if (flowerMessage) {
            flowerMessage.innerHTML = `
                <p>برای اناهیتا قشنگم که مثل همین گل زیباس 🌸</p>
                <p>امیدوارم سال های زندگیت همیشه پر از شکوفه و گل های زیبا باشه 💗</p>
            `;
        }

        createConfetti();
    });

    // =========================
    // کیک
    // =========================

    const blowCake = document.getElementById("blowCake");
    const footballStats = document.getElementById("footballStats");
    const realMessage = document.getElementById("realMessage");

    let cakeBlown = false;

    blowCake?.addEventListener("click", () => {
        if (cakeBlown) return;
        cakeBlown = true;

        const cake = document.querySelector(".cake");
        if (cake) cake.classList.add("blown");

        blowCake.textContent = "هورا ! 🎉";
        blowCake.disabled = true;

        if (footballStats) footballStats.classList.add("show");

        if (realMessage) {
            realMessage.innerHTML = `
                <p>برای اناهیتایی که عاشق فوتباله ⚽🤍</p>
                <p>Hala Madrid! 🤍💙</p>
                <p>امیدوارم همیشه توی دویدن، فوتبال و رسیدن به آرزوهات موفق باشی ✨</p>
            `;
        }

        createConfetti();
    });

    // =========================
    // نامه
    // =========================

    const openLetter = document.getElementById("openLetter");
    const typedLetter = document.getElementById("typedLetter");
    const letterSignature = document.getElementById("letterSignature");

    const letterText = `سلام اناهیتا قشنگم، تولدت مبارک باشه. ♡

خیلی خوشحالم که تونستم با فرشته‌ی خوشگلی مثل تو آشنا بشم.
خیلی خیلی دوست دارم و خیلی برام باارزشی،
بابت تمام خنده‌ها و لحظات خوبی که برام ساختی، ممنونم.

فرشته کوچولو،
امیدوارم همیشه به تمام آرزوهات برسی
و توی تمام زندگیت موفق و سلامت باشی.`;

    let letterOpened = false;

    function typeLetter() {
        if (!typedLetter) return;

        typedLetter.textContent = "";
        if (letterSignature) letterSignature.classList.remove("show");

        let index = 0;

        const interval = setInterval(() => {
            if (index < letterText.length) {
                typedLetter.textContent += letterText[index];
                index++;
                typedLetter.scrollTop = typedLetter.scrollHeight;
            } else {
                clearInterval(interval);

                if (letterSignature) {
                    letterSignature.textContent = "از طرف هلیا ♡";
                    letterSignature.classList.add("show");
                }

                updateSecretLock();
            }
        }, 35);
    }

    openLetter?.addEventListener("click", () => {
        if (letterOpened) return;
        letterOpened = true;

        const envelope = document.getElementById("envelope");
        if (envelope) envelope.classList.add("open");

        openLetter.textContent = "نامه باز شد 💌";
        openLetter.disabled = true;

        setTimeout(() => {
            typeLetter();
        }, 500);
    });

    // =========================
    // مرحله مخفی
    // =========================

    const secretUnlockBox = document.getElementById("secretUnlockBox");
    const secretUnlockButton = document.getElementById("secretUnlockButton");
    const secretUnlockText = document.getElementById("secretUnlockText");

    let secretUnlocked = false;

    function updateSecretLock() {
        if (!secretUnlockBox || !secretUnlockButton) return;

        if (openedGifts.size < 3) {
            secretUnlockBox.classList.add("locked");
            secretUnlockButton.disabled = true;
            secretUnlockButton.textContent = "هنوز قفله 🔒";

            if (secretUnlockText) {
                const remaining = 3 - openedGifts.size;
                secretUnlockText.textContent =
                    `هنوز ${persianNumber(remaining)} کادو باقی مونده...`;
            }
            return;
        }

        secretUnlockBox.classList.remove("locked");
        secretUnlockButton.disabled = false;
        secretUnlockButton.textContent = "باز کردن مرحله مخفی ✨";

        if (secretUnlockText) {
            secretUnlockText.textContent =
                "هورا! هر سه کادو رو باز کردی. حالا می‌تونی وارد مرحله‌ی مخفی بشی 🤍";
        }
    }

    secretUnlockButton?.addEventListener("click", () => {
        if (openedGifts.size < 3) return;
        if (secretUnlocked) return;

        secretUnlocked = true;
        createConfetti();

        setTimeout(() => {
            showPage(pages.secret);
        }, 700);
    });

    // =========================
    // مرحله مخفی - دکمه داخل صفحه
    // =========================

    const secretButton = document.getElementById("secretButton");
    secretButton?.addEventListener("click", () => {
        createConfetti();
    });

    // =========================
    // شروع
    // =========================

    updateGiftProgress();
    updateSecretLock();
});
