let cells = document.querySelectorAll('.col');
let button = document.querySelector('.btn');
let info = document.querySelector('.info');

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ['', '', '', '', '', '', '', '', ''];

currentPlayer = 'x';

info.textContent = `${currentPlayer}` + '\'s Turn'


running = true;

cells.forEach(cell => {
    cell.addEventListener('click', cellClicked)
});

function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex');

    if (options[cellIndex] != '' || running === false) {
        return; 
    }

    updateCell(this, cellIndex)

}

function updateCell(cell, index) {
options[index] = currentPlayer;
cell.textContent = currentPlayer;
checkForWin();
changePlayer();
if (info.textContent.includes('Wins!')) {
//do nothing
}

else if (!options.includes('')){
    info.textContent = 'Draw';
    running = false;
}

else info.textContent = `${currentPlayer}` + '\'s Turn'};


function checkForWin() {
    for(let i = 0; i < winCombo.length; i++) {
        let condition = winCombo[i];
        let cellA = options[condition[0]]
        let cellB = options[condition[1]]
        let cellC = options[condition[2]]

        if (cellA == '' || cellB == '' || cellC == '') {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            info.textContent = `${currentPlayer}` + ' Wins!'

            running = false;
            break;
        }
        //if (!options.includes('')){
          //  info.textContent = 'Draw';
          //  running = false;
          //  break;
       // }
}
}

function changePlayer() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o'
    }
    else {
        currentPlayer = 'x'
    }
}


    button.addEventListener('click', () => {
        options = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'x'
        cells.forEach(cell => {
            cell.textContent = ''
        })
        info.textContent = `${currentPlayer}` + '\'s Turn'
        running = true;

    })