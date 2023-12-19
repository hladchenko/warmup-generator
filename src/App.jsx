import './App.scss';
import './Button.scss';
import {juniorQuestions, middleQuestions, seniorQuestions} from "./questions";
import {useEffect, useState} from "react";
import Dropdown from "./Dropdown/Dropdown";

const questions = {
  junior: juniorQuestions,
  middle: middleQuestions,
  senior: seniorQuestions,
};

function App() {
  const [questionSet, setQuestionSet] = useState(juniorQuestions);
  const getRandomQuestion = () => {
    const num = Math.floor(Math.random() * questionSet.length);
    return questionSet[num];
  };
  const [question, setQuestion] = useState(getRandomQuestion);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const clickHandler = async () => {
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 700);

    changeQuestion();
    // showAnimation();
  };

  const setRandomQuestion = () => setQuestion(getRandomQuestion);

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

  useEffect(() => {
    if (triggered === true) {
      setRandomQuestion();
      console.log("triggered");
    } else {
      setTriggered(true);
    }
  }, [questionSet]);

  const changeLevel = (level) => {
    setQuestionSet(questions[level]);
  };

  return (
      <div className="App">
        <div className="container">
          <Dropdown actionHandler={changeLevel}/>
          <div className="menu--item">
            <div className="question-container">
              <div className={buttonPressed ? "question-shake"
                  : "question"}>{question}</div>
            </div>
            <button onClick={clickHandler}
                    className={animateButton ? "bubbly-button animate"
                        : "bubbly-button"}>Ask
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
