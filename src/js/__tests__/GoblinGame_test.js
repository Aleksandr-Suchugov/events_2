import GoblinGame from '../GoblinGame';

test('board 4x4 is created', () => {
  const board = new GoblinGame();
  const body = document.getElementsByTagName('baody');
  const result = body.insertAdjacentElement('afterbegin', '<div class="board" style="width: 496px;"><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div></div>');
  expect(board.boardGeneration(2)).toBe(result);
});
