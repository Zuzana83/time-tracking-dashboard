import data from "./data.js";

const timeBtns = document.querySelectorAll(".time button");
const timeBtnsWrapper = document.querySelector(".time");
const dailyT = document.getElementById("daily");
const weeklyT = document.getElementById("weekly");
const monthlyT = document.getElementById("monthly");

const hoursEl = document.querySelectorAll(".hours span");
const lastEl = document.querySelectorAll(".last-week span");

// function showDailyTime() {
//     const dailyAmount = data.map((interval, index) => {
//        const {title} = interval;
//        const {current: currentD, previous: previousD} = interval.timeframes.daily;
//        const {current: currentW, previous: previousW} = interval.timeframes.weekly;
//        const {current: currentM, previous: previousM} = interval.timeframes.monthly;

//        console.log(title, currentD, previousD, currentW, previousW, currentM, previousM);

//        hoursEl[index].textContent =  currentD;
//        lastEl[index].textContent = previousD;
//     })
// }

// function showWeeklyTime() {
//     const weeklyAmount = data.map((interval, index) => {
//        const {title} = interval;
//        const {current: currentD, previous: previousD} = interval.timeframes.daily;
//        const {current: currentW, previous: previousW} = interval.timeframes.weekly;
//        const {current: currentM, previous: previousM} = interval.timeframes.monthly;

//        console.log(title, currentD, previousD, currentW, previousW, currentM, previousM);

//        hoursEl[index].textContent =  currentW;
//        lastEl[index].textContent = previousW;
//     })
// }

// function showMonthlyTime() {
//     const weeklyAmount = data.map((interval, index) => {
//        const {title} = interval;
//        const {current: currentD, previous: previousD} = interval.timeframes.daily;
//        const {current: currentW, previous: previousW} = interval.timeframes.weekly;
//        const {current: currentM, previous: previousM} = interval.timeframes.monthly;

//        console.log(title, currentD, previousD, currentW, previousW, currentM, previousM);

//        hoursEl[index].textContent =  currentM;
//        lastEl[index].textContent = previousM;
//     })
// }

// Event listeners
// dailyT.addEventListener("click", function(e) {
//     showDailyTime();

    
//      //    removing active class
//      timeBtns.forEach((btn) => {
//         btn.classList.remove("active");
//         e.target.classList.add("active");
//     });

// });

// weeklyT.addEventListener("click", function(e) {
//     showWeeklyTime();

//      //    removing active class
//      timeBtns.forEach((btn) => {
//         btn.classList.remove("active");
//         e.target.classList.add("active");
//     });

// });

// monthlyT.addEventListener("click", function(e) {
//     showMonthlyTime();

//      //    removing active class
//      timeBtns.forEach((btn) => {
//         btn.classList.remove("active");
//         e.target.classList.add("active");
//     });

// });


timeBtnsWrapper.addEventListener("click", function(e) {
    const btnId = e.target.id;

    timeBtns.forEach((btn) => {
        btn.classList.remove("active");
        e.target.classList.add("active");
    });

    if(btnId === "daily") {
        console.log("Getting daily data info");
        showData(btnId);
    }
    if(btnId === "weekly") {
        console.log("Getting weekly data info");
        showData(btnId);
    } 
    if(btnId === "monthly") {
        console.log("Getting monthly data info");
        showData(btnId);
    } return;
    
});

function showData(timeAmount) {
    const weeklyAmount = data.map((interval, index) => {
       const {title} = interval;
       const {current: currentD, previous: previousD} = interval.timeframes.daily;
       const {current: currentW, previous: previousW} = interval.timeframes.weekly;
       const {current: currentM, previous: previousM} = interval.timeframes.monthly;

    //    console.log(title, currentD, previousD, currentW, previousW, currentM, previousM);

       if(timeAmount === "daily") {
        hoursEl[index].textContent =  currentD;
        lastEl[index].textContent = previousD;
       }

       if(timeAmount === "weekly") {
        hoursEl[index].textContent =  currentW;
        lastEl[index].textContent = previousW;
       }

       if(timeAmount === "monthly") {
        hoursEl[index].textContent =  currentM;
        lastEl[index].textContent = previousM;
       }
       
    })
}