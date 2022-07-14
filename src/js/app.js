import '../css/style.css';
import GoblinGame from './GoblinGame';
import 'bootstrap';

const goblinGame = new GoblinGame();
goblinGame.boardGeneration(4);
goblinGame.imgCreate(2000);
