let yearContainer = document.getElementById("year");
let hourContainer = document.getElementById("hour");



setInterval(function ()
{

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if(month < 10){
        month = "0"+`${month}`;
    }
    let day = date.getDate();
    if(day < 10){
        day = "0"+`${day}`;
    }
    /////////////
    let hour = date.getHours();
    if(hour < 10){
        hour = "0"+`${hour}`;
    }
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = "0"+`${minutes}`;
    }
    let seconds = date.getSeconds();
    if(seconds < 10){
        seconds = "0"+`${seconds}`;
    }

    let fullTime = `${year} ${month} ${day}, ${hour}:${minutes}:${seconds}`;

    let dateTime = `${year}/${month}/${day}`;
    let hourTime = `${hour}:${minutes}:${seconds}`;

    yearContainer.textContent = dateTime;
    hourContainer.textContent = hourTime;



}, 1000);

