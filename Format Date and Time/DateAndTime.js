function formatDate() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${year}/${month}/${day}`;
}
formatDate();

function formatTime() {
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let amOrPm = hour >= 12 ? "PM" : "AM"
    //to change it from military time to standard time
    hour = (hour % 12) || 12;

    hour = setZero(hour);
    minute = setZero(minute);
    second = setZero(second);

    return `${hour}:${minute}:${second} ${amOrPm}`;

    function setZero(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}
formatTime();