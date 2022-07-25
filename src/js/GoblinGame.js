import image from '../assets/goblin.png';

export default class GoblinGame {
  constructor() {
    this.position = -1;
    this.field = 0;
    this.boarSize = 1;
    this.successShot = 0;
    this.bossShot = 0;
    this.rounds = 0;
  }

  goblinSetter() {
    const position = Math.floor(Math.random() * (this.boarSize ** 2 + 1));
    if (position === this.lastPosition) {
      const position2 = this.goblinSetter();
      return position2;
    }
    return position;
  }

  boardGeneration(countOfCells) {
    this.boarSize = countOfCells;
    this.field = document.createElement('div');
    this.field.classList.add('board');
    const width = 124 * countOfCells;
    this.field.style.width = `${width}px`;
    document.body.appendChild(this.field);
    for (let i = 0; i < countOfCells ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.appendChild(cell);
    }
    const gameResults = document.createElement('p');
    gameResults.classList.add('score');
    document.body.insertAdjacentHTML('beforeEnd', gameResults);
  }

  imgCreate(interval) {
    const goblin = new Image();
    goblin.src = image;
    const gameResults = document.getElementsByClassName('score');
    setInterval(() => {
      const position = this.goblinSetter();
      this.field.childNodes[position].appendChild(goblin);
      this.rounds++;
      gameResults.textContent = `Попадания: ${this.successShot} / Промахи: ${this.bossShot} / Число попыток: ${this.rounds}`;
    }, interval);
  }

  shootsRecorder() {
    const board = document.getElementsByClassName('board');
    board.addEventListner('click', (ev) => {
      ev.currentTarget.parantElement === board ? this.bossShot++ : this.successShot++;
    })
    if (this.bossShot === 5) {
      alert('Поражение((');
      return location.reload();
    }
  }

}
