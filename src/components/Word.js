import React, { useState } from 'react';

import styles from '../styles/Word.module.css';
export default function RandomWord({ translate }) {
  const [word, setWord] = useState('');

  const [sourceLanguage, setSourceLanguage] = useState('EN');

  const [targetLanguage, setTargetLanguage] = useState('PL');

  const languages = [
    'BG',
    'CS',
    'DA',
    'DE',
    'EL',
    'EN',
    'ES',
    'ET',
    'FI',
    'FR',
    'HU',
    'ID',
    'IT',
    'JA',
    'LT',
    'LV',
    'NL',
    'PL',
    'PT',
    'RO',
    'RU',
    'SK',
    'SL',
    'SV',
    'TR',
    'UK',
    'ZH',
  ];

  const handleClick = async () => {
    let res = await fetch('https://api.api-ninjas.com/v1/randomword');
    let data = await res.json();

    setWord(data.word);
  };

  return (
    <div className={styles.container}>
      <form className={styles.inputForm}>
        <div>
          <label htmlFor="source">Source Language</label>
          <select
            id="source"
            value={sourceLanguage}
            onChange={e => setSourceLanguage(e.target.value)}
          >
            {languages.map(language => {
              return <option key={language}>{language}</option>;
            })}
          </select>
        </div>

        <div>
          <input
            onChange={e => setWord(e.target.value)}
            value={word}
            className={styles.input}
          ></input>
          <div className={styles.buttons}>
            <button type="button" onClick={() => handleClick()}>
              Generate Word
            </button>
            <button type="button" onClick={() => translate(sourceLanguage, word, targetLanguage)}>
              Translate
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="target">Target Language</label>
          <select
            id="target"
            value={targetLanguage}
            onChange={e => setTargetLanguage(e.target.value)}
          >
            {languages.map(language => {
              return <option key={language}>{language}</option>;
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
