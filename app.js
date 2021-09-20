const board = document.querySelector('#board');
const SQUARES_NUM = 3075;
const colors = [
  '#fffb00',
  '#ffa722',
  '#5ae447',
  '#28fff4',
  '#c228ff',
  '#ff3683',
];

for (let i = 0; i < SQUARES_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);
}

function setColor(e) {
  const square = e.target;
  const color = getRandColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
}

function removeColor(e) {
  const square = e.target;
  square.style.backgroundColor = '#33262b';
  square.style.boxShadow = `0 0 2px #000`;
}

function getRandColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
