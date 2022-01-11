let timer = () => {
    let now = new Date();
    document.querySelector('#timer').innerHTML =
        `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

let timerID = setInterval(timer, 500);