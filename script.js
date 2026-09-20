// ===============================
// گرفتن عناصر صفحه
// ===============================

const helloButton = document.getElementById("helloButton");

const questionSection =
    document.getElementById("questionSection");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const calendarSection =
    document.getElementById("calendarSection");

const confirmButton =
    document.getElementById("confirmButton");

const finalSection =
    document.getElementById("finalSection");

const dateInput =
    document.getElementById("dateInput");

const timeInput =
    document.getElementById("timeInput");

const finalDate =
    document.getElementById("finalDate");


// ===============================
// دکمه سلام
// ===============================

helloButton.addEventListener("click", function () {

    questionSection.classList.remove("hidden");

    helloButton.style.display = "none";

});


// ===============================
// دکمه آره
// ===============================

yesButton.addEventListener("click", function () {

    questionSection.classList.add("hidden");

    calendarSection.classList.remove("hidden");

});


// ===============================
// دکمه نه
// ===============================

let noClicks = 0;

noButton.addEventListener("click", function () {

    noClicks++;

    // بزرگ شدن دکمه نه
    const newWidth =
        Math.min(90 + noClicks * 35, 300);

    const newHeight =
        Math.min(40 + noClicks * 10, 100);

    noButton.style.width =
        newWidth + "px";

    noButton.style.height =
        newHeight + "px";


    // تغییر متن دکمه
    const messages = [

        "نه! 😭",

        "مطمئنی؟ 🥹",

        "دلم می شکنه ها... 💔",

        "یه بار دیگه فکر کن 🥺",

        "خواهش می کنم 😭❤️",

        "دیگه نه نگووو 😭😂"

    ];


    const index =
        Math.min(
            noClicks,
            messages.length - 1
        );


    noButton.textContent =
        messages[index];


    // تکان خوردن دکمه آره
    shakeYesButton();

});


// ===============================
// تکان دادن دکمه آره
// ===============================

function shakeYesButton() {

    yesButton.animate(

        [
            {
                transform: "translateX(0)"
            },

            {
                transform: "translateX(-12px)"
            },

            {
                transform: "translateX(12px)"
            },

            {
                transform: "translateX(-8px)"
            },

            {
                transform: "translateX(8px)"
            },

            {
                transform: "translateX(0)"
            }
        ],

        {
            duration: 500
        }

    );

}


// ===============================
// انتخاب تاریخ
// ===============================

confirmButton.addEventListener(
    "click",
    function () {

        const selectedDate =
            dateInput.value;

        const selectedTime =
            timeInput.value;


        // اگر تاریخ یا ساعت انتخاب نشده
        if (
            selectedDate === "" ||
            selectedTime === ""
        ) {

            alert(
                "اول تاریخ و ساعت قرارمون رو انتخاب کن 🥹❤️"
            );

            return;
        }


        // تبدیل تاریخ میلادی به نمایش فارسی
        const date =
            new Date(
                selectedDate + "T00:00:00"
            );


        const formattedDate =
            date.toLocaleDateString(
                "fa-IR"
            );


        // نمایش نتیجه
        finalDate.textContent =
            `📅 ${formattedDate} — ⏰ ${selectedTime}`;


        calendarSection.classList.add(
            "hidden"
        );

        finalSection.classList.remove(
            "hidden"
        );

    }
);
