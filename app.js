let body = document.getElementsByTagName("body");
let dayOfWeek = document.querySelectorAll("li");
let type1 = document.querySelector(".type1");
let type2 = document.querySelector(".type2");
let display = document.querySelector("h1");

document.addEventListener("onload", showTime());

// Time Getter
function showTime() {
    type1.className += " active";
    var date = new Date();    
    var h, m, s, time;
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    session = "AM";

    if(h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
        session = "PM"
    }

    if (h < 10) {
        h = `0${h}`
    }

    if (m < 10) {
        m = `0${m}`
    }

    if (s < 10) {
        s = `0${s}`
    }


    // type1.addEventListener('click', function(){
    //     type1.className += " active";
    //     type2.classList.remove("active");
    // });
    
    // type2.addEventListener('click', function(){
    //     type2.className += " active";
    //     type1.classList.remove("active");
    // });


    time = `${h}:${m}:${s} ${session}`;
    display.innerHTML = time;
    setTimeout(showTime, 1000);
    
}
showTime();

// looping through the days of the week
for(let i = 0, max = dayOfWeek.length; i < max; i++) {
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


