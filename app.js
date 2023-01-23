// create a board to hold the values of each box
const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

// factory to create a new player
function player(name, mark) {
  return { name, mark };
}

// module and logic to create and play the game
const displayController = (() => {
  const { board } = gameBoard;
  const boxes = document.querySelectorAll('#data-cell');
  const xChoice = document.getElementById('xChoice');
  const oChoice = document.getElementById('oChoice');
  const message = document.getElementById('message');
  const messageText = document.querySelector('[data-winning-message-text]');
  const restartButton = document.getElementById('restartButton');

  board.forEach((spot) => {
    boxes.forEach((box) => {
      box.textContent = spot;
    });
  });

  // module or IIFE to create the game
  const playGame = (() => {
    boxes.forEach((box) => {
      box.addEventListener('click', selection, { once: true });
    });

    // calling the factory to create two players
    const playerOne = player('playerOne', 'X');
    const playerTwo = player('playerTwo', 'O');

    let current = playerOne.mark; // create a variable to hold the symbol

    // buttons to select which symbol goes first
    xChoice.addEventListener('click', () => {
      current = playerOne.mark;
    });

    oChoice.addEventListener('click', () => {
      current = playerTwo.mark;
    });

    // logic to switching between symbols
    const swapTurns = () => {
      if (current === playerOne.mark) {
        current = playerTwo.mark;
      } else {
        current = playerOne.mark;
      }
    };

    // logic to check for a winner
    const checkWinner = () => {
      if (
        boxes[0].textContent === current
        && boxes[1].textContent === current
        && boxes[2].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[3].textContent === current
        && boxes[4].textContent === current
        && boxes[5].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[6].textContent === current
        && boxes[7].textContent === current
        && boxes[8].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[0].textContent === current
        && boxes[3].textContent === current
        && boxes[6].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[1].textContent === current
        && boxes[4].textContent === current
        && boxes[7].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[2].textContent === current
        && boxes[5].textContent === current
        && boxes[8].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[0].textContent === current
        && boxes[4].textContent === current
        && boxes[8].textContent === current
      ) {
        messageText.textContent = `${current}'s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[2].textContent === current
        && boxes[4].textContent === current
        && boxes[6].textContent === current
      ) {
        messageText.textContent = `${current}s WINS!`;
        message.classList.add('show');
      }
      if (
        boxes[0].textContent !== ''
        && boxes[1].textContent !== ''
        && boxes[2].textContent !== ''
        && boxes[3].textContent !== ''
        && boxes[4].textContent !== ''
        && boxes[5].textContent !== ''
        && boxes[6].textContent !== ''
        && boxes[7].textContent !== ''
        && boxes[8].textContent !== ''
      ) {
        messageText.textContent = 'PUSH!';
        message.classList.add('show');
      }
    };

    // defines the logic of what happens after a selection is made
    function selection(e) {
      const box = e.target;
      placeMark(box);
      checkWinner();
      swapTurns();
    }

    // places a mark into each div
    const placeMark = (box) => {
      box.textContent = current;
    };

    // restart the game after a round ends
    restartButton.addEventListener('click', () => {
      message.classList.remove('show');
      boxes.forEach((box) => {
        box.textContent = '';
        box.addEventListener('click', selection, { once: true });
        current = playerOne.mark;
      });
    });

    return {
      placeMark,
      checkWinner,
      swapTurns,
      selection,
    };
  })();

  return { playGame };
})();
