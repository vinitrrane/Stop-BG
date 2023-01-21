
const body = document.body;
const stopButton = document.querySelector('button');

const intervalId = setInterval(() => {

    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    body.style.backgroundColor = `rgb(${red},${green},${blue})`

}, 1000)

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
})
