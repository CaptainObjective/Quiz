class Question {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.text = question;
    this.correctAnwserIndex = null;
    this.correctAnwser = correct_answer;
    this.anwsers = [...incorrect_answers];
    this.shuffleAnswers();
  }
  shuffleAnswers() {
    const random = (Math.random() * 3).toFixed(0);
    this.anwsers.splice(random, 0, this.correctAnwser);
    this.correctAnwserIndex = random;
  }
  show(questionDiv, anwserDivs) {
    questionDiv.innerHTML = this.text;
    anwserDivs.map((el, i) => {
      el.innerHTML = this.anwsers[i];
    });
  }
}

export default Question;
