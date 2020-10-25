let field = document.getElementById('field');
let title = document.getElementById('header');
let level = document.getElementsByClassName('start__choose');
let choice, line, card, front, back, backImg, frontImg, result;
for (let l of level) {
  l.addEventListener('click', chooseLevel => {
    if (choice) {
      choice.classList.toggle('start__chosen');
    };
    choice = chooseLevel.target;
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
  console.log(front);
  console.log(frontImg);
  let cards = document.querySelectorAll('.game__img');
  for(let i of cards) {
    i.addEventListener('click', check => {
      choice = check.target;
      let rotate = choice.closest('.game__img');
      rotate.classList.toggle('game__img_change');
      for (let card of cards) {
        card.addEventListener('click', getNewGame => {
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
  back = document.createElement('div');
  back.classList.toggle('game__back');
  card.append(back);
  backImg = document.createElement('img');
  backImg.src = 'Img/Back.png';
  back.append(backImg);
  backImg.classList.toggle('game__pic');
  front = document.createElement('div');
  back.after(front);
  front.classList.toggle('game__front');
  frontImg = document.createElement('img');
  result = getRandomInt(2);
  (result === 0) ? frontImg.src = 'Img/GameOver.png':
  frontImg.src = 'Img/Bug.png';
  front.append(frontImg);
  frontImg.classList.toggle('game__result');
};

let getEasy = () => {
  if (window.innerWidth <= 375) {
    for (let k = 0; k < 3; k++) {
      makeLine();
      getCards();
  }
  } else {
    makeLine();
    for (let i = 0; i < 3; i++) {
      getCards();
    }
  }
};

let getNormal = () => {
  if (window.innerWidth <= 375) {
    for (let k = 0; k < 3; k++) {
      makeLine();
      for (let i = 0; i < 2; i++) {
        getCards();
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
        getCards();
      }
    }
  } else {
    for (let k = 0; k < 2; k++) {
      makeLine();
      for (let i = 0; i < 5; i++) {
        getCards();
      }
    }
  }

};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
