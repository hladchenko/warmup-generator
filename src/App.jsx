import './App.scss';
import './Button.scss';
import {questions} from "./questions";
import {useEffect, useRef, useState} from "react";
import Alert from "./compoments/Alert/Alert";

function App() {
  const [questionSet, setQuestionSet] = useState(questions);
  const [showAlert, setShowAlert] = useState(false);
  const [justAttached, setJustAttached] = useState(false);

  const getRandomQuestion = () => {
    const num = Math.floor(Math.random() * questionSet.length);
    return questionSet[num];
  };
  const [question, setQuestion] = useState(getRandomQuestion);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  const buttonRef = useRef(null);

  const clickHandler = async () => {
    hideButton();
    setAnimateButton(true);
    setTimeout(() => {
      setAnimateButton(false);
    }, 700);
    changeQuestion();
    setTimeout(() => {
      showAnimation();
    showButton();
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

  useEffect(() => {
    setJustAttached(true);
    if (showAlert) {
      setTimeout(() => {
        setJustAttached(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 500);
      }, 2000);
    }
  }, [showAlert]);

  const questionContainerOnClickHandler = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setShowAlert(true);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const getText = () => {
    let fullText = question?.title + "\n\n" + question?.description;

    fullText += question?.link ? `\n\n${question?.link}` : '';

    const isHints = question?.hints?.length> 0;

    if (isHints) {
      fullText += '\n';
    }

    question?.hints?.forEach((hint, index) => fullText+= "\n- " + hint);

    fullText += question?.star ? '\n\n' + "* " + question?.star : '';

    return fullText;
  };

  const hideButton = () => {
    buttonRef.current.style.opacity = `0%`;
  };

  let interval = null;
  const showButton = () => {
    interval = setInterval(fadeIn, 10);
  };

  const fadeIn = () => {
    let opacity = Number(buttonRef.current.style.opacity);
    if (opacity < 1) {
      opacity = opacity + 0.01;
      buttonRef.current.style.opacity = opacity
    } else {
      clearInterval(interval);
    }
  };

  return (
      <div className="App">
        <div className="container">
          <div className="menu--item">
            <div className="question-container" onClick={questionContainerOnClickHandler}>
              <div className={buttonPressed ? "question question-shake"
                  : "question"}>
                <div className="title">{question?.title}</div>
                <div className="description">
                  {question?.link
                      ? <a href={question?.link}>
                        <p>{question?.description}</p>
                      </a>
                      : <p>{question?.description}</p>
                  }
                  {question?.hints && <ul>{question?.hints?.map(
                      (hint, key) => <li key={key}>{hint}</li>)}</ul>}
                  {question?.star && <p className="star">* {question?.star}</p>}
                </div>
              </div>
            </div>
            <button ref={buttonRef} onClick={clickHandler}
                    className={animateButton ? "bubbly-button animate"
                        : "bubbly-button"}>7AM
            </button>
          </div>
        </div>
        {showAlert && <Alert justAttached={justAttached} />}
      </div>
  );
}

export default App;
