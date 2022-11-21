import React from 'react';
import styles from '../styles/Answer.module.css';
export default function Answer({ answer }) {
  return (
    <div className={styles.container}>
      <p>Answer: </p>
      <div className={styles.inputs}>
        {[...answer].map((char, i) => {
          return <input key={i} value={char} className={styles.inputLetter}></input>;
        })}
      </div>
    </div>
  );
}
