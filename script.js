let field = document.getElementById('field');
let title = document.getElementById('header');
let level = document.getElementById('level');
let choice, line, card, front, back, result;
let playGame = true;

level.addEventListener('click', chooseLevel => {
  if (choice) {
    choice.classList.toggle('start__level_chosen');
  };
  choice = chooseLevel.target;
  choice.classList.toggle('start__level_chosen');
});

let btn = document.getElementById('button');
btn.addEventListener('click', start => {
  choice.classList.toggle('start__level_chosen');
  title.classList.toggle('start_then');
  field.classList.toggle('start_then');
  document.body.classList.toggle('game');
  (choice.id === 'easy') ? getEasy():
  (choice.id === 'normal') ? getNormal():
  getHard();
  let cards = document.querySelectorAll('.game__img');
  console.log(cards);
  for(let i of cards) {
    playGame = false;
    i.addEventListener('mouseover', getHover => {
      let hover = getHover.target;
      hover.classList.toggle('game__img_hover');
    });
    i.addEventListener('mouseout', getHover => {
      let hover = getHover.target;
      hover.classList.toggle('game__img_hover');
    });
    i.addEventListener('click', check => {
      choice = check.target;
      choice.id = 'back';
      back = document.querySelector('#back ~ div')
      result = getRandomInt(2);
      (result === 0) ? back.classList.add('game__front_false'):
      back.classList.add('game__front_true');
      let rotate = choice.closest('.game__img');
      console.log(rotate);
      rotate.classList.toggle('game__img_change');
      i.addEventListener('click', getNewGame => {
                let newGame = document.querySelectorAll('div');
                for (let k of newGame){
                  k.remove();
                }
                document.body.classList.toggle('game');
                title.classList.toggle('start_then');
                field.classList.toggle('start_then');
              })
    });
  }
});
/*
 */

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
  front = document.createElement('div');
  back.after(front);
  front.classList.toggle('game__front');
};

let getEasy = () => {
  makeLine();
  for (let i = 0; i < 3; i++) {
    getCards();
  }
};

let getNormal = () => {
  for (let k = 0; k<2; k++) {
    getEasy();
  }
};

let getHard = () => {
  for (let k = 0; k<2; k++) {
    makeLine();
    for (let i = 0; i < 5; i++) {
      getCards();
    }
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
