import './App.scss';
import './Button.scss';
import {questions} from "./questions";
import {useState} from "react";

function App() {
  const [questionSet, setQuestionSet] = useState(questions);

  const getRandomQuestion = () => {
    const num = Math.floor(Math.random() * questionSet.length);
    console.log(num);
    return questionSet[num];
  };
  const [question, setQuestion] = useState(getRandomQuestion);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const clickHandler = async () => {
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 700);

    changeQuestion();
    setTimeout(() => {
      showAnimation();
    }, 2000);
  };

  const setRandomQuestion = (fromQuestionSet = false) => setQuestion(
      getRandomQuestion(fromQuestionSet));

  const changeQuestion = () => {
    let timeout = 30;
    while (timeout < 2000) {
      setTimeout(setRandomQuestion, timeout);
      timeout += 100;
    }
  };

  const showAnimation = () => {
    setButtonPressed(true);
    setTimeout(() => {
      setButtonPressed(false);
    }, 2000)
  };

  return (
      <div className="App">
        <div className="container">
          <div className="menu--item">
            <div className="question-container">
              <div className={buttonPressed ? "question question-shake"
                  : "question"}>
                <div className="title">{question?.title}</div>
                <div className="description">{question?.description}</div>
              </div>
            </div>
            <button onClick={clickHandler}
                    className={animateButton ? "bubbly-button animate"
                        : "bubbly-button"}>7AM
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
