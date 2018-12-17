class Timer {
    constructor(time, callback) {
        this.startTimer = false;
        this.pauseTimer = false;
        this.timeIsOver = false;

        this.requiredDelay = 0;
        this.remainedTime = 0;
        this.timeout;
    }

    start() {
        this.startTimer = true;
        this.requiredDelay = document.getElementById('tF').value;
        if (this.pauseTimer) {
            this.pauseTimer = false;
            this.timer(this.remainedTime);
        } else this.timer(+this.requiredDelay);
    }

    stop() {
        this.pauseTimer = false;
        this.startTimer = false;
        clearInterval(this.timeout);
        document.getElementById('remTime').value = 0;
    }

    pause() {
        this.pauseTimer = true;
        this.remainedTime = document.getElementById('remTime').value;
        clearInterval(this.timeout);
    }

    reset() {
        this.pauseTimer = false;
        clearInterval(this.timeout);
        this.timer(+this.requiredDelay);
    }

    timer(tim) {
        if (tim >= 0) {
            document.getElementById('remTime').value = tim;
            this.timeout = setInterval(() => {
                document.getElementById('remTime').value = --tim;
                if (tim == 0) {
                    clearInterval(this.timeout);
                    getAlert();
                }
            }, 1000);
        }
    }
}



function getAlert() {
    let message = document.getElementById('nF').value;
    alert(message);
}

window.onload = function () {
    const t = new Timer(document.getElementById('tF'), getAlert);
    document.getElementById("butStart").onclick = () => t.start();
    document.getElementById("butStop").onclick = () => t.stop();
    document.getElementById("butPause").onclick = () => t.pause();
    document.getElementById("butReset").onclick = () => t.reset();
};
