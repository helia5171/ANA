/* =====================================================
   GENERAL
===================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family:
        Tahoma,
        Arial,
        sans-serif;

    color: #25334a;

    background: #fffafd;

    overflow: hidden;
}

button {
    font-family: inherit;
}

button:focus {
    outline: none;
}


/* =====================================================
   COLORS
===================================================== */

:root {

    --pink: #f2a7c4;
    --pink-dark: #df7fa8;
    --pink-light: #ffe6ef;

    --blue: #8fc8e7;
    --blue-dark: #559dc5;
    --blue-light: #e5f5ff;

    --navy: #172b49;

    --text: #27364d;
    --muted: #7c8798;

    --white: #ffffff;

}


/* =====================================================
   PAGE SYSTEM
===================================================== */

.page {

    position: fixed;

    inset: 0;

    width: 100%;
    min-height: 100vh;

    overflow-y: auto;

    opacity: 0;

    visibility: hidden;

    transition:
        opacity .65s ease,
        visibility .65s ease;

}

.page.active {

    opacity: 1;

    visibility: visible;

}

.page.hidden {

    opacity: 0;

    visibility: hidden;

}


/* =====================================================
   BACKGROUND
===================================================== */

.background-glow {

    position: absolute;

    width: 350px;
    height: 350px;

    border-radius: 50%;

    filter: blur(20px);

    pointer-events: none;

}

.glow-pink {

    background: rgba(242,167,196,.18);

    top: -130px;
    left: -120px;

}

.glow-blue {

    background: rgba(143,200,231,.18);

    bottom: -150px;
    right: -100px;

}


/* =====================================================
   CALENDAR
===================================================== */

#calendarPage {

    display: flex;

    align-items: center;
    justify-content: center;

    text-align: center;

    background:
        radial-gradient(
            circle at 10% 20%,
            rgba(242,167,196,.2),
            transparent 28%
        ),

        radial-gradient(
            circle at 90% 80%,
            rgba(143,200,231,.22),
            transparent 30%
        ),

        #fffafd;

}

.calendar-wrapper {

    position: relative;

    width: min(440px, 92%);

    z-index: 2;

}

.small-heart {

    font-size: 40px;

    color: var(--pink-dark);

    animation: floating 3s ease-in-out infinite;

}

.eyebrow {

    margin-top: 5px;

    font-size: 13px;

    color: var(--blue-dark);

    font-weight: bold;

}

.calendar-title {

    margin-top: 8px;

    font-size: clamp(28px, 7vw, 43px);

    line-height: 1.5;

    color: var(--navy);

}

.calendar-subtitle {

    margin-top: 12px;

    color: var(--muted);

    font-size: 13px;

    line-height: 2;

}


/* CALENDAR BOX */

.calendar-box {

    margin-top: 28px;

    padding: 20px;

    background: rgba(255,255,255,.9);

    border:

        1px solid

        rgba(242,167,196,.25);

    border-radius: 25px;

    box-shadow:

        0 25px 70px

        rgba(60,80,110,.12);

    backdrop-filter: blur(15px);

}

.calendar-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 18px;

}

.month-button {

    width: 36px;
    height: 36px;

    border: none;

    border-radius: 50%;

    background: var(--pink-light);

    color: var(--pink-dark);

    font-size: 25px;

    cursor: pointer;

    transition: .25s;

}

.month-button:hover {

    background: var(--pink);

    color: white;

    transform: scale(1.08);

}

.month-title {

    display: flex;

    flex-direction: column;

    gap: 3px;

}

.month-title strong {

    font-size: 18px;

}

.month-title span {

    font-size: 11px;

    color: var(--muted);

}

.weekdays,
.calendar-days {

    display: grid;

    grid-template-columns: repeat(7, 1fr);

    gap: 7px;

}

.weekdays {

    margin-bottom: 8px;

}

.weekdays span {

    color: var(--muted);

    font-size: 11px;

    font-weight: bold;

}

.calendar-day {

    aspect-ratio: 1;

    border: none;

    background: transparent;

    border-radius: 13px;

    color: var(--text);

    cursor: pointer;

    font-size: 12px;

    transition: .25s;

}

.calendar-day:hover {

    background: var(--blue-light);

    transform: translateY(-2px);

}

.calendar-day.empty {

    cursor: default;

}

.calendar-day.birthday {

    color: white;

    font-weight: bold;

    background:

        linear-gradient(
            135deg,
            var(--pink),
            var(--blue-dark)
        );

    box-shadow:

        0 7px 22px

        rgba(223,127,168,.3);

    animation: birthdayPulse 2s infinite;

}

.calendar-message {

    min-height: 24px;

    margin-top: 14px;

    font-size: 12px;

    color: var(--pink-dark);

}


/* =====================================================
   HOME PAGE
===================================================== */

#homePage {

    display: flex;

    justify-content: center;

    text-align: center;

    padding: 45px 20px;

    background:

        radial-gradient(
            circle at 0 0,
            rgba(242,167,196,.22),
            transparent 30%
        ),

        radial-gradient(
            circle at 100% 100%,
            rgba(143,200,231,.25),
            transparent 35%
        ),

        #fff;

}

.home-wrapper {

    width: min(620px, 100%);

    position: relative;

    z-index: 2;

}

.welcome-label {

    color: var(--blue-dark);

    font-size: 12px;

    font-weight: bold;

}


/* PHOTO */

.photo-frame {

    position: relative;

    width: 145px;
    height: 145px;

    margin: 12px auto 15px;

}

.photo-glow {

    position: absolute;

    inset: -10px;

    border-radius: 50%;

    background:

        linear-gradient(
            135deg,
            rgba(242,167,196,.5),
            rgba(143,200,231,.5)
        );

    filter: blur(15px);

}

.anahita-photo {

    position: relative;

    width: 145px;
    height: 145px;

    object-fit: cover;

    border-radius: 50%;

    border: 5px solid white;

    box-shadow:

        0 15px 40px

        rgba(70,90,120,.15);

}

.photo-heart {

    position: absolute;

    right: -5px;
    bottom: 5px;

    width: 35px;
    height: 35px;

    display: flex;

    align-items: center;
    justify-content: center;

    background: white;

    border-radius: 50%;

    color: var(--pink-dark);

    box-shadow:

        0 5px 20px

        rgba(0,0,0,.1);

}


/* TITLE */

.birthday-title {

    font-size: clamp(30px, 7vw, 48px);

    color: var(--navy);

}

.birthday-title span {

    color: var(--pink-dark);

}

.birthday-intro {

    margin-top: 10px;

    font-size: 13px;

    line-height: 2;

    color: var(--muted);

}


/* GIFT CARDS */

.gift-cards {

    display: grid;

    gap: 13px;

    margin-top: 28px;

}

.gift-card {

    width: 100%;

    border: 1px solid rgba(50,70,100,.07);

    background: white;

    border-radius: 21px;

    padding: 14px;

    display: flex;

    align-items: center;

    text-align: right;

    cursor: pointer;

    box-shadow:

        0 10px 35px

        rgba(60,80,110,.08);

    transition: .3s;

}

.gift-card:hover {

    transform: translateY(-5px);

    box-shadow:

        0 18px 45px

        rgba(60,80,110,.13);

}

.gift-icon {

    width: 60px;
    height: 60px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 17px;

    font-size: 30px;

    margin-left: 15px;

}

.flower-icon {

    background: var(--pink-light);

}

.cake-icon {

    background: var(--blue-light);

}

.letter-icon {

    background: #eee9ff;

}

.gift-info {

    flex: 1;

}

.gift-info h2 {

    color: var(--navy);

    font-size: 15px;

}

.gift-info p {

    margin-top: 4px;

    color: var(--muted);

    font-size: 10px;

}

.gift-arrow {

    color: var(--muted);

    font-size: 19px;

}

.gift-progress {

    margin-top: 18px;

    color: var(--muted);

    font-size: 11px;

}

#openedCount {

    color: var(--pink-dark);

    font-weight: bold;

}


/* HOME DECORATIONS */

.home-decoration {

    position: absolute;

    pointer-events: none;

    color: var(--pink);

    font-size: 25px;

    animation: floating 4s ease-in-out infinite;

}

.decoration-one {

    top: 15%;

    left: 8%;

}

.decoration-two {

    bottom: 15%;

    left: 15%;

    color: var(--blue);

}

.decoration-three {

    top: 25%;

    right: 9%;

    animation-delay: 1s;

}


/* =====================================================
   GIFT PAGES
===================================================== */

.gift-page {

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 70px 20px 35px;

}

.back-button {

    position: fixed;

    top: 18px;
    right: 18px;

    z-index: 50;

    border: none;

    background: rgba(255,255,255,.85);

    color: var(--text);

    padding: 10px 15px;

    border-radius: 14px;

    cursor: pointer;

    box-shadow:

        0 5px 20px

        rgba(50,70,100,.08);

    backdrop-filter: blur(10px);

    transition: .25s;

}

.back-button:hover {

    transform: translateX(4px);

}


/* =====================================================
   FLOWER PAGE
===================================================== */

.flower-page {

    background:

        linear-gradient(
            180deg,
            #fff7fb,
            #eaf7ff
        );

}

.flower-wrapper {

    width: min(650px, 100%);

    text-align: center;

}

.gift-label {

    color: var(--pink-dark);

    font-size: 12px;

    font-weight: bold;

}

.flower-wrapper h1 {

    margin-top: 6px;

    font-size: clamp(25px, 6vw, 38px);

    color: var(--navy);

}

.page-description {

    margin-top: 8px;

    color: var(--muted);

    font-size: 12px;

    line-height: 2;

}


/* GARDEN */

.flower-garden {

    position: relative;

    width: 100%;

    max-width: 580px;

    height: 300px;

    margin: 22px auto;

    overflow: hidden;

    border-radius: 30px;

    background:

        linear-gradient(
            180deg,
            #dff2fc,
            #f9eaf2
        );

    box-shadow:

        0 20px 50px

        rgba(70,90,120,.1);

}

.moon {

    position: absolute;

    width: 55px;
    height: 55px;

    top: 30px;
    right: 45px;

    border-radius: 50%;

    background: #fff9d9;

    box-shadow:

        0 0 25px

        rgba(255,240,170,.5);

}

.little-star {

    position: absolute;

    color: white;

    opacity: .8;

}

.star-a {

    top: 50px;
    left: 60px;

}

.star-b {

    top: 90px;
    left: 120px;

}

.star-c {

    top: 40px;
    right: 160px;

}

.ground {

    position: absolute;

    bottom: 0;
    left: 0;

    width: 100%;
    height: 48px;

    background: #9acaa5;

    border-radius: 50% 50% 0 0;

}


/* STEM */

.flower-stem {

    position: absolute;

    bottom: 40px;

    left: 50%;

    width: 7px;

    height: 0;

    transform: translateX(-50%);

    border-radius: 10px;

    background: #579969;

    transition: height 1.5s ease;

}

.leaf {

    position: absolute;

    width: 40px;
    height: 20px;

    background: #72ad7e;

    border-radius: 100% 0 100% 0;

    opacity: 0;

    transition: 1s;

}

.leaf-left {

    left: -35px;

    top: 70px;

    transform: rotate(-20deg);

}

.leaf-right {

    right: -35px;

    top: 100px;

    transform: rotate(20deg);

}


/* FLOWER */

.flower-head {

    position: absolute;

    width: 100px;
    height: 100px;

    left: 50%;

    bottom: 180px;

    transform:
        translateX(-50%)
        scale(0);

    opacity: 0;

    transition: 1s ease;

}

.petal {

    position: absolute;

    width: 53px;
    height: 53px;

    border-radius: 50%;

    background:

        linear-gradient(
            135deg,
            #f7bad2,
            #e988b1
        );

}

.petal-1 {

    top: 0;
    left: 24px;

}

.petal-2 {

    top: 24px;
    right: 0;

}

.petal-3 {

    bottom: 0;
    left: 24px;

}

.petal-4 {

    top: 24px;
    left: 0;

}

.petal-5 {

    top: 9px;
    left: 9px;

    opacity: .75;

}

.flower-center {

    position: absolute;

    width: 34px;
    height: 34px;

    top: 33px;
    left: 33px;

    background: #f4ca60;

    border-radius: 50%;

    z-index: 5;

}


/* FLOWER MESSAGE */

.flower-message {

    max-width: 520px;

    margin: 20px auto 0;

    opacity: 0;

    transform: translateY(15px);

    transition: 1s;

}

.flower-message.show {

    opacity: 1;

    transform: translateY(0);

}

.flower-message h2 {

    color: var(--navy);

    font-size: 18px;

}

.flower-message p {

    margin-top: 10px;

    color: var(--muted);

    font-size: 12px;

    line-height: 2;

}


/* =====================================================
   BUTTON
===================================================== */

.primary-button {

    border: none;

    padding: 14px 24px;

    border-radius: 17px;

    color: white;

    background:

        linear-gradient(
            100deg,
            var(--pink-dark),
            var(--blue-dark)
        );

    font-size: 12px;

    font-weight: bold;

    cursor: pointer;

    box-shadow:

        0 10px 25px

        rgba(80,150,190,.2);

    transition: .3s;

}

.primary-button:hover {

    transform: translateY(-3px);

    box-shadow:

        0 15px 30px

        rgba(80,150,190,.3);

}


/* =====================================================
   FOOTBALL PAGE
===================================================== */

.football-page {

    background:

        radial-gradient(
            circle at 50% 0,
            rgba(143,200,231,.25),
            transparent 40%
        ),

        #f8fbff;

}

.football-wrapper {

    width: min(750px, 100%);

    text-align: center;

}

.level-title {

    margin-top: 5px;

    display: flex;

    justify-content: center;

    align-items: baseline;

    gap: 10px;

}

.level-title span {

    font-size: clamp(38px, 9vw, 70px);

    font-weight: 900;

    color: var(--navy);

}

.level-title strong {

    font-size: clamp(48px, 11vw, 85px);

    font-weight: 900;

    background:

        linear-gradient(
            135deg,
            var(--pink-dark),
            var(--blue-dark)
        );

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

}

.level-subtitle {

    color: var(--muted);

    font-size: 13px;

}


/* CAKE PHOTO */

.cake-photo-wrapper {

    position: relative;

    width: min(300px, 80%);

    height: 210px;

    margin: 18px auto;

}

.cake-photo-glow {

    position: absolute;

    inset: 10px;

    border-radius: 30px;

    background:

        linear-gradient(
            135deg,
            rgba(242,167,196,.5),
            rgba(143,200,231,.5)
        );

    filter: blur(18px);

}

.cake-photo {

    position: relative;

    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 25px;

    border: 4px solid white;

    box-shadow:

        0 20px 45px

        rgba(50,80,110,.12);

}


/* STATS */

.football-stats {

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 12px;

    margin-top: 25px;

    opacity: 0;

    transform: translateY(15px);

    transition: 1s;

}

.football-stats.show {

    opacity: 1;

    transform: translateY(0);

}

.stat-card {

    padding: 18px 12px;

    background: white;

    border-radius: 20px;

    box-shadow:

        0 10px 30px

        rgba(60,90,120,.08);

}

.stat-icon {

    font-size: 28px;

}

.stat-card h3 {

    margin-top: 6px;

    color: var(--navy);

    font-size: 13px;

}

.stat-card p {

    margin-top: 6px;

    color: var(--muted);

    font-size: 10px;

    line-height: 1.8;

}


/* REAL MESSAGE */

.real-message {

    margin-top: 28px;

    opacity: 0;

    transform: scale(.9);

    transition: 1s;

}

.real-message.show {

    opacity: 1;

    transform: scale(1);

}

.football-ball {

    font-size: 50px;

    animation: ballBounce 2s infinite;

}

.real-message h2 {

    margin-top: 8px;

    color: var(--navy);

}

.real-message p {

    margin: 8px;

    color: var(--muted);

    font-size: 12px;

}

.real-message strong {

    color: var(--navy);

}


/* =====================================================
   LETTER
===================================================== */

.letter-page {

    background:

        radial-gradient(
            circle at 10% 20%,
            rgba(242,167,196,.18),
            transparent 30%
        ),

        radial-gradient(
            circle at 90% 80%,
            rgba(143,200,231,.2),
            transparent 30%
        ),

        white;

}

.letter-wrapper {

    width: min(650px, 100%);

    text-align: center;

}

.letter-wrapper h1 {

    margin-top: 5px;

    color: var(--navy);

    font-size: clamp(26px, 6vw, 40px);

}


/* ENVELOPE */

.envelope {

    position: relative;

    width: min(470px, 92%);

    height: 280px;

    margin: 30px auto;

    cursor: pointer;

}

.envelope-back {

    position: absolute;

    inset: 0;

    border-radius: 14px;

    background: #a6d5ed;

    box-shadow:

        0 20px 50px

        rgba(60,80,110,.12);

}


/* PAPER */

.letter-paper {

    position: absolute;

    left: 6%;

    bottom: 5%;

    width: 88%;

    height: 88%;

    background: #fffdf7;

    border-radius: 5px;

    z-index: 2;

    overflow: hidden;

    transition: 1s ease;

}

.letter-inner {

    height: 100%;

    padding: 22px;

    text-align: right;

    color: var(--text);

    font-size: 11px;

    line-height: 2;

    overflow-y: auto;

}

.letter-to {

    color: var(--pink-dark);

    font-weight: bold;

    margin-bottom: 10px;

}

#typedLetter {

    white-space: pre-line;

}

.letter-signature {

    margin-top: 15px;

    color: var(--pink-dark);

    font-weight: bold;

    opacity: 0;

    transition: 1s;

}

.letter-signature.show {

    opacity: 1;

}


/* FRONT */

.envelope-front {

    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 62%;

    z-index: 4;

    background: #91c9e8;

    clip-path:

        polygon(
            0 0,
            50% 55%,
            100% 0,
            100% 100%,
            0 100%
        );

    border-radius: 0 0 14px 14px;

    transition: .8s;

}

.envelope.open .letter-paper {

    transform: translateY(-150px);

    height: 108%;

    box-shadow:

        0 15px 40px

        rgba(40,60,80,.12);

}

.envelope.open .envelope-front {

    opacity: .25;

}


/* =====================================================
   SECRET LEVEL
===================================================== */

.secret-page {

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    padding: 40px 20px;

    color: white;

    background:

        radial-gradient(
            circle at 50% 0,
            rgba(120,180,220,.15),
            transparent 30%
        ),

        #07111f;

}

.secret-wrapper {

    width: min(750px, 100%);

}

.secret-label {

    color: #91c9e8;

    font-size: 10px;

    letter-spacing: 3px;

}

.secret-wrapper h1 {

    margin-top: 12px;

    font-size: clamp(28px, 7vw, 52px);

}


/* STADIUM */

.stadium {

    position: relative;

    width: min(580px, 100%);

    height: 260px;

    margin: 25px auto;

    padding: 20px;

    overflow: hidden;

    border-radius: 25px;

    background:

        radial-gradient(
            ellipse at center,
            #28614a,
            #102d24
        );

    box-shadow:

        0 0 70px

        rgba(143,200,231,.13),

        inset 0 0 60px

        rgba(0,0,0,.45);

}

.field {

    position: relative;

    width: 100%;
    height: 100%;

    border: 2px solid rgba(255,255,255,.35);

}

.field-center-line {

    position: absolute;

    top: 0;
    bottom: 0;

    left: 50%;

    width: 2px;

    background: rgba(255,255,255,.35);

}

.field-center-circle {

    position: absolute;

    width: 80px;
    height: 80px;

    top: 50%;
    left: 50%;

    transform: translate(-50%,-50%);

    border:

        2px solid

        rgba(255,255,255,.35);

    border-radius: 50%;

}

.penalty-box {

    position: absolute;

    top: 25%;

    width: 18%;

    height: 50%;

    border:

        2px solid

        rgba(255,255,255,.25);

}

.penalty-left {

    left: 0;

    border-left: none;

}

.penalty-right {

    right: 0;

    border-right: none;

}

.football-final {

    position: absolute;

    top: 50%;
    left: 50%;

    transform:
        translate(-50%,-50%);

    font-size: 60px;

    animation: stadiumBall 4s ease-in-out infinite;

}


/* SECRET TEXT */

.secret-wrapper h2 {

    font-size: 20px;

}

.secret-text {

    margin-top: 10px;

    color: #aeb9c8;

    font-size: 12px;

    line-height: 2;

}

.final-message {

    margin-top: 25px;

    display: flex;

    flex-direction: column;

    gap: 7px;

}

.final-message span {

    color: #91c9e8;

    font-size: 11px;

}

.final-message strong {

    font-size: 25px;

    background:

        linear-gradient(
            90deg,
            #f2a7c4,
            #91c9e8
        );

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

}

.final-message small {

    color: white;

}

.final-message b {

    margin-top: 5px;

    color: white;

}


/* =====================================================
   ANIMATIONS
===================================================== */

@keyframes floating {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-12px);
    }

}

@keyframes birthdayPulse {

    0%,100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.08);
    }

}

@keyframes ballBounce {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-14px);
    }

}

@keyframes stadiumBall {

    0%,100% {
        transform:
            translate(-50%,-50%)
            rotate(0deg);
    }

    50% {
        transform:
            translate(-50%,-70%)
            rotate(180deg);
    }

}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 600px) {

    #homePage {

        align-items: flex-start;

    }

    .home-wrapper {

        padding-top: 10px;

    }

    .photo-frame,
    .anahita-photo {

        width: 125px;
        height: 125px;

    }

    .gift-page {

        align-items: flex-start;

        padding-top: 70px;

    }

    .flower-garden {

        height: 260px;

    }

    .football-stats {

        grid-template-columns: 1fr;

    }

    .stat-card {

        padding: 13px;

    }

    .cake-photo-wrapper {

        height: 180px;

    }

    .envelope {

        height: 235px;

    }

    .envelope.open .letter-paper {

        transform: translateY(-105px);

    }

    .stadium {

        height: 190px;

    }

    .secret-page {

        align-items: flex-start;

        padding-top: 75px;

    }

}


/* =====================================================
   VERY SMALL PHONES
===================================================== */

@media (max-height: 700px) {

    #homePage {

        padding-top: 25px;

    }

    .photo-frame,
    .anahita-photo {

        width: 105px;
        height: 105px;

    }

    .gift-cards {

        margin-top: 18px;

    }

    .gift-icon {

        width: 50px;
        height: 50px;

    }

    .gift-card {

        padding: 10px;

    }

}
