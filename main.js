const sliderWorkStart = document.getElementById('slider-work-start');
const sliderWorkEnd = document.getElementById('slider-work-end');
const startTime = document.getElementById('work-start-time');

function getStartTime() {
    let value = sliderWorkStart.value;
    startTime.textContent = convertTohhmm(value);
};

getStartTime();

function convertTohhmm(value) {
    let rawTimeArray = value.split('.');
    let rawHour = rawTimeArray[0];
    let twenty4Hr = rawHour - 1;
    let twelveHr;
    let ampm;
    if (twenty4Hr > 12) {
        twelveHr = twenty4Hr - 12;
        ampm = 'PM'
    } else {
        twelveHr = twenty4Hr;
        ampm = 'AM'
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
    let hourMinute = twelveHr + ':' + minute + ' ' + ampm;
    if (hourMinute == '12:00 AM') {hourMinute = '12:00 PM'}
    else if (hourMinute == '12:00 PM') {hourMinute = '12:00AM'};
    return hourMinute;
}