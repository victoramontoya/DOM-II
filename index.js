const redBlock = document.querySelector('.block--red');
const blueBlock  = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const parent = document.querySelector('.blocks');

var counter = 0;

const rockets = e => {
    counter--;
    e.target.style.order = counter;
}

const travelers = e => {
  console.log('yo')
  //e.stopPropagation()
  e.target.style.marginLeft = '120px';
  e.target.style.transition = 'margin-left 0.5s';
//  e.target.style.position = 'relative';

}

const travelersUp = e => {
  console.log('mouse up')
  e.target.style.transition = 'margin-left 0.5s';
  e.target.style.marginLeft = '10px';
}

//parent.addEventListener('mouseup', travelersUp);

// Commit 1:
//redBlock.addEventListener('click', rockets);
//blueBlock.addEventListener('click', rockets);
//greenBlock.addEventListener('click', rockets);
//pinkBlock.addEventListener('click', rockets);
//grayBlock.addEventListener('click', rockets);

redBlock.addEventListener('mousedown', travelers);
blueBlock.addEventListener('mousedown', travelers);
greenBlock.addEventListener('mousedown', travelers);
pinkBlock.addEventListener('mousedown', travelers);
grayBlock.addEventListener('mousedown', travelers);

redBlock.addEventListener('mouseup', travelersUp);
blueBlock.addEventListener('mouseup', travelersUp);
greenBlock.addEventListener('mouseup', travelersUp);
pinkBlock.addEventListener('mouseup', travelersUp);
grayBlock.addEventListener('mouseup', travelersUp);

