const btn = document.querySelector('#squareNumber');
btn.addEventListener('click',initGrid);


const slider = document.querySelector('#slider')
const labelSlider = document.querySelector('#sliderValue')

slider.oninput = ()=> labelSlider.textContent = slider.value + 'x' + slider.value;


function initGrid(e){
    
    const gridSize = slider.value;
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.replaceChildren();
    //gridContainer.innerHTML = '';
    
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for(let i = 0; i < gridSize * gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item')
            //div.setAttribute('draggable', 'false');
        div.addEventListener('mouseover',changeColor);
        div.addEventListener('mousedown',changeColor);
            //div.addEventListener('mouseup',setMouseup);
        gridContainer.appendChild(div);
        
    }
    
    
    
    
    
}

let random = false;
let picker = false;
let color =  'black';


const btnRandom = document.querySelector('#randomColors');
btnRandom.addEventListener("click", setColorRandom)


const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener("input", setColorPicker)

function setColorRandom(e){
    picker = false;
    random = true;
    
}


function setColorPicker(e){
    random = false;
    picker = true;
    
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    this.style.backgroundColor = color;
    if(random){
        this.style.backgroundColor = '#'+ Math.floor(Math.random()*0xFFFFFF).toString(16)
    } else if(picker) this.style.backgroundColor = document.querySelector('#colorPicker').value;

    
}

let mouseDown = false;
document.querySelector('body').onmousedown = () => mouseDown = true;
document.querySelector('body').onmouseup = () => mouseDown = false;






