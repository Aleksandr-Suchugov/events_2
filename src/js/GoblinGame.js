// TODO: write code here
import image from '../assets/goblin.png';
export default class GoblinGame {
  constructor() {
    this.position = -1;
    this.field = 0;
    this.boarSize = 1;
  }

  goblinSetter() {
    // let position = -1;
    // do {
    //   position = Math.floor(Math.random() * (this.boarSize ** 2 + 1));
    // }
    // while (position === this.position);
    let position = Math.floor(Math.random() * (this.boarSize ** 2 + 1));
    if (position === this.lastPosition) {
      position = this.goblinSetter();
    }
    // this.position = position;
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
  }

  imgCreate(interval) {
    const goblin = new Image();
    // const goblin = document.createElement('img');
    goblin.src = image;  //выпадает ошибка 404 при попытке загрузить картинку при развертывании проекта
    // const goblin = document.getElementById('x01');
    // goblin.classList.remove('hidden');
      setInterval(() => {
        const position = this.goblinSetter();
        this.field.childNodes[position].appendChild(goblin);
    }, interval);
  }
}
