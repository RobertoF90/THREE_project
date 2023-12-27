import HeroStateMachine from './HeroStateMachine';
import HeroATB from './ui/HeroATB';

const uiBR = document.getElementById('ui-br') as HTMLCanvasElement;
const uiTR = document.getElementById('ui-tr') as HTMLCanvasElement;
const uiMenu = document.getElementById('ui-menu') as HTMLCanvasElement;
const ctxBR = uiBR.getContext('2d');
const ctxTR = uiTR.getContext('2d');
const ctxMenu = uiMenu.getContext('2d');

const heroATB = new HeroATB(window.innerWidth / 2, window.innerHeight / 6 );



ctxBR.canvas.width = window.innerWidth / 2;
ctxBR.canvas.height = window.innerHeight / 6;

ctxTR.canvas.width = window.innerWidth / 4;

ctxMenu.canvas.width = window.innerWidth / 4;
ctxMenu.canvas.height = window.innerHeight / 3.5;


export function drawUI(hero1: HeroStateMachine) {
  if (uiBR.getContext) {
    const width = uiBR.clientWidth;
    const height = uiBR.clientHeight;
    const padding = 12;

    ctxBR.fillStyle = '#FFA500';
    ctxBR.fillRect(0, 0, width, height);

    ctxBR.fillStyle = '#000000';
    ctxBR.font = '24px serif';
    ctxBR.fillText('ATB', padding * 2, height / 2.5);
    ctxBR.fillText('LIMIT', padding * 2, height / 1.2);

    // console.log(width / 4);
    // console.log(padding * 19);

    heroATB.update(hero1.cur_cooldown)

  
    ctxBR.fillStyle = '#fff';
    ctxBR.fillRect((width / 4) * 2, height / 4, width / 4 - padding, padding);

    ctxBR.fillRect((width / 4) * 3, height / 4, width / 4 - padding, padding);

    ctxBR.fillRect(width / 4, height / 1.5, width / 4 - padding, padding);

    ctxBR.fillRect((width / 4) * 2, height / 1.5, width / 4 - padding, padding);

    ctxBR.fillRect((width / 4) * 3, height / 1.5, width / 4 - padding, padding);
  }
  if (uiTR.getContext) {
    const width = uiTR.clientWidth;
    const height = uiTR.clientHeight;
    const padding = 15;
    ctxTR.fillStyle = '#FFA500';

    ctxTR.fillRect(padding, padding, width - padding * 2, height - padding * 2);

    ctxTR.fillStyle = '#000000';
    ctxTR.font = '24px serif';
    ctxTR.fillText('Hero 1', padding * 2, height / 3);
    ctxTR.fillText('9999', width / 2.5, height / 3);
    ctxTR.fillText('/', width / 1.6 , height / 3);
    ctxTR.fillText('9999', width / 1.4, height / 3);

    ctxTR.fillText('Hero 2', padding * 2, height / 1.8);
    ctxTR.fillText('9999', width / 2.5, height / 1.8);
    ctxTR.fillText('/', width /1.6 , height / 1.8);
    ctxTR.fillText('9999', width / 1.4, height / 1.8);
    ctxTR.fillText('Hero 3', padding * 2, height / 1.3);
    ctxTR.fillText('9999', width / 2.5, height/ 1.3);
    ctxTR.fillText('/', width / 1.6 , height/ 1.3);
    ctxTR.fillText('9999', width / 1.4, height / 1.3);
  }

  if (uiMenu.getContext) {
    const width = uiMenu.clientWidth;
    const height = uiMenu.clientHeight;
    const padding = 15;
    ctxMenu.fillStyle = '#FFA500';

    ctxMenu.fillRect(padding, 0, width , height - padding);

    ctxMenu.fillStyle = '#000000';
    ctxMenu.font = '24px serif';
    ctxMenu.fillText('Command 1', width / 3, height / 5);
    ctxMenu.fillText('Command 2', width / 3, height / 5 * 2);
    ctxMenu.fillText('Command 3', width / 3, height /  5 * 3);
    ctxMenu.fillText('Command 4', width / 3, height /  5 * 4);
   
  }
}
