const cellElement = document.getElementsByClassName('cell');
const segConteiner = document.getElementById('conteirner-seg');

const winirMeassage = document.getElementById('message-paragrafo');

const mess = document.getElementById('menssagem');

const button = document.getElementById("button-click")

let inCircle;
const winnig = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkForWin = (currentPlayer) => {
    return winnig.some((comb) => {
        return comb.every((index) => {
            return cellElement[index].classList.contains(currentPlayer);
        });
    });
};

const atie = () =>{
    return [... cellElement].every(cel =>{
      return  cel.classList.contains("x") || cel.classList.contains("circle")
    })
}

const restart = (drew) => {
    if (drew) {
        winirMeassage.innerText = 'Empate!'
    } else {
        winirMeassage.innerText = inCircle ? 'Circulo Venceu!' : 'X Venceu!';
    }

    mess.classList.add('show-message');
};

const start = () => {
    inCircle = false;

    for (const cell of cellElement) {
        cell.classList.remove("circle")
        cell.classList.remove("x")
        cell.addEventListener('click', clickedthebutton, { once: true });
       
    }


    setSegcon()

    mess.classList.remove("show-message")
};

const mark = (cell, classAdd) => {
    cell.classList.add(classAdd);
};

const setSegcon = () => {
    segConteiner.classList.remove('circle');
    segConteiner.classList.remove('x');

    if (inCircle) {
        segConteiner.classList.add('circle');
    } else {
        segConteiner.classList.add('x');
    }
}

const swapturns = () => {
    inCircle = !inCircle;

    setSegcon()

};

const clickedthebutton = (e) => {
    const cell = e.target;
    const classAdd = inCircle ? 'circle' : 'x';

    mark(cell, classAdd);

    const drew = atie()

    const isWin = checkForWin(classAdd);

    if (isWin) {
        restart(false);
    }else if(drew){
        restart(true)
    }else{
        swapturns();
    }
    

   
};

start();

button.addEventListener("click", start)