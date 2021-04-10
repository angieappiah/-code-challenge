let timer = setInterval(TimeHandler, 1000);
let sec = 0;
let min = 0;
let hour = 0;

function TimeHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++
    }

    if (min == 60) {
        min == 0;
        hour++

    }

    DisplayTime();

}

function DisplayTime() {
    let sec_new;
    let min_new;
    let hour_new;

    let timer_element = document.getElementById("timer");
    if (sec < 10) {
        sec_new = 0 + sec;
    }

    if (min < 10) {
        min_new = 0 + min;

    }

    if (hour < 10) {
        hour_new = 0 + hour;
    }

    timer_element.innerHTML = hour_new + ":" + min_new + ":" + sec_new;
}





