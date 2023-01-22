const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return { board };
})();

function player(name, mark) {
  return { name, mark };
}

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

  const playGame = (() => {
    boxes.forEach((box) => {
      box.addEventListener('click', selection, { once: true });
    });

    const playerOne = player('playerOne', 'X');
    const playerTwo = player('playerTwo', 'O');

    let current = playerOne.mark;

    xChoice.addEventListener('click', () => {
      current = playerOne.mark;
    });

    oChoice.addEventListener('click', () => {
      current = playerTwo.mark;
    });

    const swapTurns = () => {
      if (current === playerOne.mark) {
        current = playerTwo.mark;
      } else {
        current = playerOne.mark;
      }
    };

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

    function selection(e) {
      const box = e.target;
      placeMark(box, current);
      checkWinner();
      swapTurns();
    }

    const placeMark = (box, current) => {
      box.textContent = current;
    };

    restartButton.addEventListener('click', () => {
      message.classList.remove('show');
      boxes.forEach((box) => {
        box.textContent = '';
        box.addEventListener('click', selection);
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
