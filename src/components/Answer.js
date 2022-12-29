import React, { useRef } from 'react';

import styles from '../styles/Answer.module.css';

export default function Answer({ answer }) {
  let inputRefs = useRef([]);
  inputRefs.current = [];
  const avaiableCharacters = /^[a-zA-Z0-9_.-]*$/;
  const addRef = el => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };
  const checkAnswer = () => {
    console.log(inputRefs.current);
    let guess = '';
    for (let i = 0; i < inputRefs.current.length; i++) {
      guess += inputRefs.current[i].value;
    }
    console.log(guess + ' = guess');
    console.log(answer + ' = answer');
    for (let i = 0; i < inputRefs.current.length; i++) {
      if (answer.at(i) === inputRefs.current[i].value) {
        inputRefs.current[i].classList.add(styles.correct);
      } else {
        inputRefs.current[i].classList.add(styles.incorrect);
      }
    }
    if (guess === answer) {
      console.log('correct');
    } else {
      console.log('incorrect');
    }
  };
  return (
    <div className={'container'}>
      <h2 className={styles.answer}>Answer: </h2>

      <div className={styles.inputs}>
        {[...answer].map(char => {
          if (avaiableCharacters.test(char)) {
            return (
              <input
                ref={addRef}
                maxLength={1}
                key={crypto.randomUUID()}
                className={styles.inputLetter}
              ></input>
            );
          } else {
            return (
              <input
                ref={addRef}
                maxLength={1}
                key={crypto.randomUUID()}
                defaultValue={char}
                className={styles.inputLetter}
                disabled
              ></input>
            );
          }
        })}
      </div>
      <div>
        <button onClick={checkAnswer}>Check</button>
      </div>
    </div>
  );
}
