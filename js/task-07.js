const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', updateFontSize);

textEl.style.fontSize = inputEl.value + 'px';

function updateFontSize(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
    // console.log(`${event.currentTarget.value} + "px"`);
    // console.log(textEl.style.fontSize);
}


