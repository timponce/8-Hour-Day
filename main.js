const slider = document.querySelector('.slider');
const startTime = document.getElementById('work-start-time');

function getStartTime() {
    let value = slider.value;
    startTime.textContent = convertTohhmm(value);
};

getStartTime();

function convertTohhmm(value) {
    let rawTimeArray = value.split('.');
    let rawHour = rawTimeArray[0];
    let twenty4Hr = rawHour - 1;
    let twelveHr;
    if (twenty4Hr > 12) {
        twelveHr = twenty4Hr - 12;
    } else {
        twelveHr = twenty4Hr;
    }
    let rawMinute = rawTimeArray[1];
    let minute;
    switch (rawMinute) {
        case '25':
            minute = '15';
            break;
        case '5':
            minute = '30';
            break;
        case '75':
            minute = '45';
            break;
        default:
            minute = '00';
    }
    let hourMinute = twelveHr + ':' + minute;
    return hourMinute;
}