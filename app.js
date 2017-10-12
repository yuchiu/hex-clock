function HexClock() {
    let clock = document.getElementById('clock');
    let hexColor = document.getElementById('hex-color');
    let time = new Date();
    let hms = [];
    let hours = time.getHours() % 12
    hms.push(hours.toString());
    hms.push(time.getMinutes().toString());
    hms.push(time.getSeconds().toString());

    for (let i = 0; i < hms.length; i++) {
        if (hms[i].length < 2) {
            hms[i] = '0' + hms[i];
        }
    }

    let clockStr = hms[0] + " : " + hms[1] + " : " + hms[2];
    let hexColorStr = "#" + hms[0] + hms[1] + hms[2];
    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;
    console.log(hexColor.textContent);
    document.body.style.backgroundColor = hexColorStr;
}

setInterval(HexClock, 1000);