const endDate = new Date("27 Dec, 2024 15:15:00").getTime();
const startDate = new Date().getTime();




let x = setInterval(function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    //calculate days , min, hrs, sec
    // 1 day = 24 * 60 * 60 * 1000ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHoursInMillis  = (60*60*1000);
    const oneMinutesInMillis = (60*1000);
    const oneSecondsInMiliis = (1000);
    const days = Math.floor(distancePending/ (oneDayInMillis));
    const hrs = Math.floor((distancePending % (oneDayInMillis) / (oneHoursInMillis)));
    const mins = Math.floor((distancePending %(oneHoursInMillis)/ (oneMinutesInMillis)));
    const sec = Math.floor((distancePending % (oneMinutesInMillis)/ (oneSecondsInMiliis)));

    // populate data in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = sec;

    //calculate width percentage for progress bar
    const totalDistance = endDate - startDate;

    const precentageDistance = (distanceCovered/totalDistance) *100;
    
    //set width for progrss bar
    document.getElementById("progress-bar").style.width = precentageDistance + "%";

    if(distancePending < 0) {
        clearInterval();
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width ="100%";
    }

},1000);









