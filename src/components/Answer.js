import React, { useRef } from 'react';

import styles from '../styles/Answer.module.css';

export default function Answer({ answer }) {
  let inputRefs = useRef([]);
  console.log(answer);
  const avaiableCharacters = /^[a-zA-Z0-9_.-]*$/;
  const addRef = el => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
    console.log(inputRefs.current);
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
    </div>
  );
}
