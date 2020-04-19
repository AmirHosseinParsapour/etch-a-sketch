var mouseDown = false;
const container = document.querySelector('.container');
let root = document.documentElement;
getNewGrid(16);//get a grid for first use.

function clearElements(parent){
  console.log('cleaning childs...')
  while (parent.hasChildNodes()) {
      parent.removeChild(container.firstChild);
  }
  //clears all childs from an element
}

function getNewGrid(gridSize){
  clearElements(container);
  //initializez a new grid in page
  for (var i = 0; i < +gridSize*gridSize; i++) {
    console.log('getting a div...')
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseover', changeColor);
    container.appendChild(div);
  }
  root.style.setProperty('--grid-size', `${gridSize}`);
}

function changeColor(e){
  if(!mouseDown) return; //mouse key is not pressed so stop the function from running
  this.style.backgroundColor = 'red';
  //changes backgroundColor to red when clicked on a div
}

function btnClicked(e){
  const gridSize = prompt('Enter Grid Size:');
  if(Number.isNaN(gridSize)){
    alert('please enter a number!');
    return; //stop function from running all together
  }
  getNewGrid(gridSize);
}
const button = document.querySelector('#generate');
button.addEventListener('click', btnClicked);
container.addEventListener('mousedown', function(e){
  mouseDown = true;
});

container.addEventListener('mouseup', function(e){
  mouseDown = false;
});
