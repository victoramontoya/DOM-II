const redBlock = document.querySelector('.block--red');
const blueBlock  = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const parent = document.querySelector('.blocks');

var counter = -1;

const rockets = (e) => {
    counter--;
    e.target.style.order = counter;
    
}

//parent.addEventListener('click', rockets);

redBlock.addEventListener('click', rockets);
blueBlock.addEventListener('click', rockets);
greenBlock.addEventListener('click', rockets);
pinkBlock.addEventListener('click', rockets);
grayBlock.addEventListener('click', rockets);
