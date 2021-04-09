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

    console.log(hour + ":" + min + ":" + sec)

}

