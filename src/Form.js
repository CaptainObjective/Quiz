import axios from 'axios';
import Game from './Game';

class Form {
  constructor() {
    this.element = document.createElement('div');
    this.element.innerHTML = `
        <div id="modal">
            <div id="modalwindow">
                <h1>Create your own quiz</h1>
                <form id="newgameform">
                <label for="questionNo">
                Number of Questions: <input type="number" name="questionNo" id="questionNo" min="1" max="50" value="10"
                /></label>
                <label for="category"
                    >Select Category:
                    <select name="category" id="category">
                    <option value="9">General Knowledge</option>
                    <option value="18">Science: Computers</option>
                    <option value="23">History</option>
                    </select>
                </label>
                <label for="difficulty"
                    >Select Difficulty:
                    <select name="difficulty" id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                    </select>
                </label>
                <input type="submit" value="Let the quiz begin!" />
                </form>
        </div>
    </div>
`;
    document.querySelector('#wrapper').appendChild(this.element);
    this.element.addEventListener('submit', e => this.submitForm(e));
  }
  async submitForm(e) {
    e.preventDefault();
    // console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    const amount = e.target[0].value;
    const category = e.target[1].value;
    const difficulty = e.target[2].value;
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );
    // console.log(response);
    new Game(response.data.results);
    this.element.parentNode.removeChild(this.element);
  }
}

export default Form;
