class Question {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.text = question;
    this.correctAnwserIndex = 3;
    this.anwsers = [...incorrect_answers, correct_answer];
  }

  show(questionDiv, anwserDivs) {
    questionDiv.innerHTML = this.text;
    anwserDivs.map((el, i) => {
      el.innerHTML = this.anwsers[i];
    });
  }
}

export default Question;
