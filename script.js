let field = document.getElementById('field');
let title = document.getElementById('header');
let difficulty = document.getElementsByClassName('start__choose');
let choice, line, card;
for (let e of difficulty) {
  e.addEventListener('click', chooseDifficulty => {
    if (choice) {
      choice.classList.toggle('start__chosen');
    };
    choice = chooseDifficulty.target;
    choice.classList.toggle('start__chosen');
  });
}

let btn = document.getElementById('button');
btn.addEventListener('click', start => {
  choice.classList.toggle('start__chosen');
  title.classList.toggle('start_then');
  field.classList.toggle('start_then');
  document.body.classList.toggle('game');
  (choice.id === 'easy') ? getEasy():
  (choice.id === 'normal') ? getNormal():
  getHard();
  choice = null;
  let cards = document.querySelectorAll('.game__img');
  let cardChoice;
  for(let e of cards) {
    e.addEventListener('click', check => {
      cardChoice = check.target;
      let rotate = cardChoice.closest('.game__img');
      rotate.classList.toggle('game__img_change');
      for (let ev of cards) {
        ev.addEventListener('click', getNewGame => {
                  let newGame = document.querySelectorAll('div');
                  for (let k of newGame) {
                    k.remove();
                  }
                  document.body.classList.toggle('game');
                  title.classList.toggle('start_then');
                  field.classList.toggle('start_then');
                })
      }
    });
  }
});

let makeLine = () => {
  line = document.createElement('div');
  document.body.append(line);
  line.classList.toggle('game__line');
}

let getCards = () => {
  card = document.createElement('div');
  line.append(card);
  card.classList.toggle('game__img');
  getBackCardImg(getBackCard);
  getFrontCardImg(getFrontCard);
}

let getBackCard = () => {
  let back = document.createElement('div');
  back.classList.toggle('game__back');
  card.append(back);
  return back;
}

let getBackCardImg = () => {
  let backImg = document.createElement('img');
  backImg.src = 'Img/Back.png';
  getBackCard().append(backImg);
  backImg.classList.toggle('game__pic');
  return backImg;
}

let getFrontCard = () => {
  let front = document.createElement('div');
  card.append(front);
  front.classList.toggle('game__front');
  return front;
}

let getFrontCardImg = () => {
  let frontImg = document.createElement('img');
  let result = getRandomInt(2);
  (result === 0) ? frontImg.src = 'Img/GameOver.png':
  frontImg.src = 'Img/Bug.png';
  getFrontCard().append(frontImg);
  frontImg.classList.toggle('game__result');
  return frontImg;
}

let getEasy = () => {
  if (window.innerWidth <= 375) {
    for (let k = 0; k < 3; k++) {
      makeLine();
      getCards(makeLine);
  }
  } else {
    makeLine();
    for (let i = 0; i < 3; i++) {
      getCards(makeLine);
    }
  }
};

let getNormal = () => {
  if (window.innerWidth <= 375) {
    for (let k = 0; k < 3; k++) {
      makeLine();
      for (let i = 0; i < 2; i++) {
        getCards(makeLine);
      }
    }
  } else {
    for (let k = 0; k < 2; k++) {
      getEasy();
    }
  }

};

let getHard = () => {
  if (window.innerWidth <= 375) {
    for (let k = 0; k < 5; k++) {
      makeLine();
      for (let i = 0; i < 2; i++) {
        getCards(makeLine);
      }
    }
  } else {
    for (let k = 0; k < 2; k++) {
      makeLine();
      for (let i = 0; i < 5; i++) {
        getCards(makeLine);
      }
    }
  }
};

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
