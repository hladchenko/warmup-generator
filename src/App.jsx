import './App.css';
import './Button.scss';
import {juniorQuestions} from "./questions";
import {useState} from "react";
import Dropdown from "./Dropdown/Dropdown";

function App() {
    const questionSet = juniorQuestions;
    const [question, setQuestion] = useState(questionSet[0]);
    const [buttonPressed, setButtonPressed] = useState(false);
    const [animateButton, setAnimateButton] = useState(false);
    const clickHandler = async () => {
        setAnimateButton(true);
        setTimeout(() => {
            setAnimateButton(false);
        }, 700);

        await new Promise(resolve => changeQuestion())
            .then(() => showAnimation());
    };

    const changeQuestion = async () => {
        let timeout = 30;
        while (timeout < 2000) {
            setTimeout(() => {
                const num = Math.floor(Math.random() * questionSet.length);
                setQuestion(questionSet[num]);
            }, timeout);
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
                <Dropdown />
                <div className="menu--item">
                    <div className="question-container">
                        <div className={buttonPressed ? "question-shake" : "question"}>{question}</div>
                    </div>
                    <button onClick={clickHandler}
                            className={animateButton ? "bubbly-button animate" : "bubbly-button"}>Ask
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
