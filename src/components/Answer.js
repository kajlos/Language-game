import React, { useRef } from 'react';

import styles from '../styles/Answer.module.css';

export default function Answer({ answer, isLoading }) {
  let inputRefs = useRef([]);
  inputRefs.current = [];
  const avaiableCharacters = /^[a-zA-Z0-9_.-]*$/;
  const addRef = el => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };
  const checkAnswer = () => {
    for (let i = 0; i < inputRefs.current.length; i++) {
      if (answer.at(i) === inputRefs.current[i].value) {
        inputRefs.current[i].classList.add(styles.correct);
      } else {
        inputRefs.current[i].classList.add(styles.incorrect);
      }
    }
  };

  const handleInput = e => {
    let notDisabledInputs = inputRefs.current.filter(input => !input.disabled);
    let index = notDisabledInputs.indexOf(e.target);
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
      e.target.classList.remove(styles.correct, styles.incorrect);
      e.target.value = e.key;
      if (index === notDisabledInputs.length - 1) return;
      notDisabledInputs[index + 1].focus();
    } else if (e.key === 'Backspace') {
      e.target.classList.remove(styles.correct, styles.incorrect);
      e.target.value = '';
      if (index === 0) return;
      notDisabledInputs[index - 1].focus();
    } else if (e.key === 'ArrowRight') {
      if (index === notDisabledInputs.length - 1) return;
      notDisabledInputs[index + 1].focus();
    } else if (e.key === 'ArrowLeft') {
      if (index === 0) return;
      notDisabledInputs[index - 1].focus();
    } else {
      e.target.value = '';
    }
  };

  return (
    <div className={'container'}>
      <h2 className={styles.answer}>Answer: </h2>
      {isLoading ? <h2 className={styles.loading}>Loading ...</h2> : null}

      <div className={styles.inputs}>
        {[...answer].map(char => {
          if (avaiableCharacters.test(char)) {
            return (
              <input
                ref={addRef}
                maxLength={1}
                key={crypto.randomUUID()}
                onKeyUp={handleInput}
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
                className={[styles.inputLetter, styles.correct].join(' ')}
                disabled
              ></input>
            );
          }
        })}
      </div>
      {answer ? (
        <div className={styles.checkButtonDiv}>
          <button onClick={checkAnswer}>Check</button>
        </div>
      ) : null}
    </div>
  );
}
