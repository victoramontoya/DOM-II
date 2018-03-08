const redBlock = document.querySelector('.block--red');
const blueBlock  = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const parent = document.querySelector('.blocks');

const rockets = (e) => {
    e.target.style.background = 'blue';
    
}

parent.addEventListener('click', rockets);

//redBlock.addEventListener('click', rockets);
//blueBlock.addEventListener('click', rockets);
//greenBlock.addEventListener('click', rockets);
//pinkBlock.addEventListener('click', rockets);
//grayBlock.addEventListener('click', rockets);
