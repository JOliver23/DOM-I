function timer() {
    let count = tens + ones + colon + seconds + milli;

    let tens = document.getElementById("secondTens");
    tens.textContent = 0;
    let ones = document.getElementById('secondOnes');
    ones.textContent = 0;
    let colon = document.getElementById("colon");
    colon.textContent = ":"
    let seconds = document.getElementById("msTens");
    seconds.textContent = 0;
    let milli = document.getElementById("msHundreds");
    milli.textContent = 0;

    let clock = document.getElementsByClassName("digits");

    if (count >= 10.00){
        console.log("10!10!10!");
        clearInterval(stretch);
    }
}

window.setInterval(timer, 10);
