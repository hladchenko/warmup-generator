import './style.scss';
import {useState} from "react";

const JUNIOR = "👶";
const MIDDLE = "😏";
const SENIOR = "👽";

const levels = {
  "junior": JUNIOR,
  "middle": MIDDLE,
  "senior": SENIOR,
};

const Dropdown = ({actionHandler}) => {

  const [level, setLevel] = useState(JUNIOR);
  const [isChecked, setIsChecked] = useState(false);

  const clickHandler = (level) => {
    setIsChecked(!isChecked)
    setLevel(levels[level]);
    actionHandler(level);
  };

  return (
      <>
        <div className="dropdown">
          <input type="checkbox" id="dropdown" checked={isChecked}
                 onChange={() => {
                 }}/>

          <label className="dropdown__face" htmlFor="dropdown"
                 onClick={() => setIsChecked(!isChecked)}>
            <div className="dropdown__text">{level}</div>

            <div className="dropdown__arrow"></div>
          </label>

          <ul className="dropdown__items">
            <li className="dropdown__item"
                onClick={() => clickHandler("junior")}>{JUNIOR}
            </li>
            <li className="dropdown__item"
                onClick={() => clickHandler("middle")}>{MIDDLE}
            </li>
            <li className="dropdown__item"
                onClick={() => clickHandler("senior")}>{SENIOR}
            </li>
          </ul>
        </div>

        <svg>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
            <feColorMatrix in="blur" type="matrix"
                           values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                           result="goo"/>
            <feBlend in="SourceGraphic" in2="goo"/>
          </filter>
        </svg>
      </>
  )
};

export default Dropdown;