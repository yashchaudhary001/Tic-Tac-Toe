let boxes = document.querySelectorAll('.btn')
let resetButton = document.querySelector('#reset-btn')
let winMsg = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let restartBtn = document.querySelector('#restart-btn')




const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]]

let turnO = true;

const restartGame = () => {
  turnO = true;
  enableBox();
  winMsg.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO === true) {
      box.innerText = '0';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;
    console.log(box.innerText);
    checkWinner();
  });
});


const disabledBox = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableBox = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
}

const showWinner = (winner) => {
  msg.innerText = (`Congratulations Winner is ${winner}`);
  winMsg.classList.remove("hide");
  disabledBox();
}

checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1 = (boxes[pattern[0]].innerText);
    let pos2 = (boxes[pattern[1]].innerText);
    let pos3 = (boxes[pattern[2]].innerText);
    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log(pos1 + 'winner!!!')
        showWinner(pos1);
        // msg.innerText = `${pos1} wins!!`;
      }
    }
  }
}

restartBtn.addEventListener('click', restartGame);
resetButton.addEventListener('click', restartGame);

