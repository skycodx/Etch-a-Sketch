const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button');
const btnClear = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

//grid 16x16
function createGrid(col, row){
    for(let i = 0; i < (col * row); i++){
        const div = document.createElement('div');
        div.style.border = '1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}
createGrid(16, 16);

//clear all
function clear(){
    const boxs = container.querySelectorAll('.box');
    boxs.forEach(box => box.remove());
}

//Resize button for user to input grid size
function reSize(){
    btnSize.textContent = 'GRID SIZE';
    btnSize.addEventListener('click', () =>{
        let user = prompt('Input your grid size')
        if(user == null || user < 1 || user > 64){
            window.alert('Cant create that size, sorry!')
            clear();
            createGrid(16,16);
            blackColor();
            grayColor();
            rgbColor();
        }
        else{
            clear();
            createGrid(user,user);
            blackColor();
            grayColor();
            rgbColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()

//Clear grid and return to basic size
function clearAll(){
    btnClear.textContent = 'CLEAR GRID';
    btnClear.addEventListener('click', () =>{
        clear();
        createGrid(16, 16);
        blackColor();
        grayColor();
        rgbColor();
    })
    buttonsContainer.appendChild(btnClear).classList.add('btn');
}
clearAll()

//Black color on hover over grid
function blackColor(){
    const boxs = container.querySelectorAll('.box');
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            let rNum = Math.floor(Math.random() * 255)
            box.style.background = `black`;
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}
blackColor();

//Gray color on hover over grid
function grayColor(){
    const boxs = container.querySelectorAll('.box');
    btnGray.textContent = 'GRAY';
    btnGray.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', ()=>{
            let rNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${rNum},${rNum},${rNum})`
        })) 
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}
grayColor();

//RGB color on hover over grid
function rgbColor(){
    const boxs = container.querySelectorAll('.box');
    btnRGB.textContent = 'RAINBOW';
    btnRGB.addEventListener('click', () =>{
        boxs.forEach(box => box.addEventListener('mouseover', () =>{
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${G},${B})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}
rgbColor();