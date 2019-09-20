import Question from './Question';
import startNewGame from './startGame';

class Game {
  constructor(questions) {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.questions = questions;
    this.questionDiv = document.querySelector('#question');
    this.anwserDivs = [...document.querySelectorAll('#anwserarea>div')];

    this.anwserDivs.map(el => el.addEventListener('click', e => this.onQuestionAnwser(e)));
    console.log(this);
    this.askQuestion();
  }

  askQuestion() {
    this.currentQuestion = new Question(this.questions[this.currentQuestionIndex]);
    this.currentQuestion.show(this.questionDiv, this.anwserDivs);
  }
  onQuestionAnwser(e) {
    if (e.target.id == this.currentQuestion.correctAnwserIndex) this.score++;

    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.endGame();
    } else {
      this.currentQuestionIndex++;
      this.askQuestion();
    }
  }
  endGame() {
    this.questionDiv.innerHTML = `Gratulacje! Odpowiedziałeś poprawanie na ${this.score} z ${this.questions.length}`;
    // document.querySelector('#anwserarea').innerHTML = ' <div class="btn">Nowa gra</div>';
    const newGameDiv = document.createElement('div');
    newGameDiv.innerHTML = 'Jeszcze raz !';
    newGameDiv.classList.add('btn');
    newGameDiv.addEventListener('click', startNewGame);

    const anwserArea = document.querySelector('#anwserarea');
    anwserArea.innerHTML = '';
    document.querySelector('#anwserarea').appendChild(newGameDiv);
  }
}

export default Game;
