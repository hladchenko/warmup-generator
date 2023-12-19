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
  const [inputValue, setInputValue] = useState(questionSet.length);

  const getRandomQuestion = () => {
    const num = Math.floor(Math.random() * (inputValue - 1));
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
    setTimeout(() => {
      showAnimation();
    }, 2000);
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
      changeInputValue(questionSet.length);
    } else {
      setTriggered(true);
    }
  }, [questionSet]);

  const changeLevel = (level) => {
    setQuestionSet(questions[level]);
  };

  const handleInputChange = (event) => {
    let newValue = event?.target?.value;
    changeInputValue(newValue);
  };

  const changeInputValue = (newValue) => {
    if (newValue > questionSet.length || newValue <= 0 || !newValue) {
      newValue = questionSet.length;
    }
    setInputValue(newValue);
  };

  return (
      <div className="App">
        <div className="container">
          <div className="input-menu">
          <Dropdown actionHandler={changeLevel}/>
          <input align="center"
              className="question-quantity"
              type="number"
              id="number"
              value={inputValue}
              min={1}
              onChange={handleInputChange}/>
          </div>
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
