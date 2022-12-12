let yearContainer = document.getElementById("year");
let hourContainer = document.getElementById("hour");



setInterval(function ()
{

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let fullTime = `${year} ${month} ${day}, ${hour}:${minutes}:${seconds}`;

    let dateTime = `${year} ${month} ${day}`;
    let hourTime = `${hour}:${minutes}:${seconds}`;

    yearContainer.textContent = dateTime;
    hourContainer.textContent = hourTime;



}, 1000);

