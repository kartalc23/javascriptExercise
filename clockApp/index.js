function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    const clockText = document.getElementById('clock')
    clockText.innerHTML = `${h}:${m}:${s}`;
    setTimeout(clock, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}