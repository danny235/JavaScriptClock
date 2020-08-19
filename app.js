let body = document.getElementsByTagName("body");
let dayOfWeek = document.querySelectorAll("li");
let type1 = document.querySelector(".type1");
let type2 = document.querySelector(".type2");
let display = document.querySelector("h1");


// Time Getter
function showTime() {
    var date = new Date();    
    var h, m, s, time;
    var ng_offset = date.getTimezoneOffset();
    date.setMinutes(date.getMinutes() + (60+ng_offset));
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    

    if(h == 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12;
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

    type1.addEventListener('click', function(){
        type1.className += " active";
        type2.classList.remove("active");
    });
    
    type2.addEventListener('click', function(){
        type2.className += " active";
        type1.classList.remove("active");
    });

    time = `${h}:${m}:${s}`;
    display.innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();

// looping through the days of the week
for(let i = 0, max = dayOfWeek.length; i < max; i++) {
    var date = new Date();
    var day = date.getDay();

    if (i === day) {
        dayOfWeek[i].className += "active";
    }
}


