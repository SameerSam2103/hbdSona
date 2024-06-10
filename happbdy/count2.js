function startCountdown(targetDate, elements) {
    const countdownDate = new Date(targetDate).getTime();

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(elements.days).innerText = days;
        document.getElementById(elements.hours).innerText = hours;
        document.getElementById(elements.minutes).innerText = minutes;
        document.getElementById(elements.seconds).innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById(elements.container).innerHTML = "EXPIRED";
        }
    }, 1000);
}

startCountdown("Sep 16, 2024 00:00:00", {
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    container: "countdown"
});

startCountdown("dec 02, 2024 00:00:00", {
    days: "days1",
    hours: "hours1",
    minutes: "minutes1",
    seconds: "seconds1",
    container: "countdown1"
});