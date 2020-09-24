let dayOfWeek = document.querySelectorAll("li");
let type1 = document.querySelector(".type1");
let type2 = document.querySelector(".type2");
let display = document.querySelector("h1");


document.addEventListener("DOMContentLoaded", milTime);
// Show military time
function milTime() {

    // clearing the hourTime
    clearTimeout(window.htime);
    function createMiltimeObject() {
        // declaration
        var date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        // logic
        h = h < 10 ? h = `0${h}` : h;
        m = m < 10 ? m = `0${m}` : m;
        s = s < 10 ? s = `0${s}` : s;
        // time output
        let time = `${h}:${m}:${s}`;
        display.innerHTML = time;
        mTime = setTimeout(createMiltimeObject, 1000);

    }



    createMiltimeObject();


    type2.classList.remove('active');
    type1.className += " active";



}


// Show 12 hour time
function hourTime() {

    // clearing the militaryTime
    clearTimeout(mTime);

    function createHourTime() {
        // declaration
        var date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        session = "AM";

        // logic
        if (h > 12) {
            h -= 12;
        }

        if (h <= 12) {
            session = "PM"
        }
        h = h == 0 ? h = 12 : h;
        h = h < 10 ? h = `0${h}` : h;
        m = m < 10 ? m = `0${m}` : m;
        s = s < 10 ? s = `0${s}` : s;

        // make this global so it can be accessed by militaryTime
        window.htime = setTimeout(createHourTime, 1000);

        // time output
        let time = `${h}:${m}:${s} ${session}`;
        display.innerHTML = time;
    }

    createHourTime();


    type1.classList.remove('active');
    type2.className += " active";


}
type1.addEventListener("click", milTime);
type2.addEventListener("click", hourTime);


// looping through the days of the week
for (let i = 0, max = dayOfWeek.length; i < max; i++) {
    var date = new Date();
    var day = date.getDay();
    var screenWidth = window.innerWidth;

    if (i === day) {
        dayOfWeek[i].className += "active";
    }

    if (screenWidth < 768 && dayOfWeek[i].className == "active") {
        dayOfWeek[i].style.display = "inline-block";
    }


}








