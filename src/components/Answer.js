import React, { useRef } from 'react';
import styles from '../styles/Answer.module.css';
export default function Answer({ answer }) {
  let inputRefs = useRef([]);

  const addRef = el => {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  };
  return (
    <div className={styles.container}>
      <p>Answer: </p>
      <div className={styles.inputs}>
        {[...answer].map((char, i) => {
          return (
            <input
              ref={addRef}
              maxLength={1}
              key={i}
              defaultValue={char}
              className={styles.inputLetter}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
