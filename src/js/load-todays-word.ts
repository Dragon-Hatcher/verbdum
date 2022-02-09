import {loadGameForDate, updateStatsPage} from "./game";
import {getCurrentNumber, getCurrentTextForId, loadPreferredLanguage, translatePage} from "./translate";
import {showHelpModal} from "./modal";

function startTimer(duration, display) {
    let start = Date.now(),
        diff,
        hours,
        minutes,
        seconds,
        intervalId;

    function timer() {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        if (diff >= 0) {
            // does the same job as parseInt truncates the float
            hours = (diff / 3600) | 0;
            minutes = (diff / 60 % 60) | 0;
            seconds = (diff % 60) | 0;
            display.children[0].textContent = getCurrentNumber(hours);
            display.children[1].textContent = getCurrentNumber(minutes);
            display.children[2].textContent = getCurrentNumber(seconds);
        } else {
            display.innerHTML = `<span data-trans="now">${getCurrentTextForId("now")}</span>`;
            clearInterval(intervalId);
        }

    }

    // we don't want to wait a full second before the timer starts
    timer();
    intervalId = setInterval(timer, 1000);
}

function getSecondsTillTomorrow(): number {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow.getTime() - now.getTime(); // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

function checkShouldShowHelp() {
    if (localStorage.getItem("first-visit") == null) {
        localStorage.setItem("first-visit", "true");
        showHelpModal();
    }
}

loadGameForDate(new Date());
updateStatsPage();
startTimer(getSecondsTillTomorrow(), document.getElementById("countdown-timer"));
loadPreferredLanguage();
checkShouldShowHelp();