import questionData from './mock_data.json';
import Game from './Game';

const startNewGame = () => {
  const anwserArea = document.querySelector('#anwserarea');
  anwserArea.innerHTML = `
    <div id="0" class="btn">CodersCrew</div>
    <div id="1" class="btn">CodersCrew</div>
    <div id="2" class="btn">CodersCrew</div>
    <div id="3" class="btn">CodersCrew</div>
        `;
  const game = new Game(questionData.results);
  return questionData.results;
};
export default startNewGame;
