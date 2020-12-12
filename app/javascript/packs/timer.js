let minutesLabel , secondsLabel, totalSeconds = 0, setIntervalId, startButton, stopButton, activity_duration;

// function to auto focus modal when activated
$('#grooveModal').on('shown.bs.modal', function () {
    $('#grooveInput').trigger('focus')
});

window.initialize = function() {
    minutesLabel = document.getElementById("minutes");
    secondsLabel = document.getElementById("seconds");
    startButton =  document.getElementById("start");
    stopButton =  document.getElementById("stop");
    activity_duration =  document.getElementById("activity_duration");
}

window.start = function() {
    setIntervalId = setInterval(setTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}
window.stop = function() {
    clearInterval(setIntervalId);
    stopButton.disabled = true;
    startButton.disabled = false;
}

window.getDuration = function() {
    activity_duration.value = totalSeconds;
}

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}
function pad(val) {
    const valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

// window.onload = function() {
//     console.log('this one loaded');
//     activity_view = window.document.getElementById("activity_duration");
//     window.document.getElementById("start").addEventListener("click", start);
//     window.document.getElementById("stop").addEventListener("click", stop);
//     window.document.getElementById("duration").addEventListener("click", getDuration);
// }

