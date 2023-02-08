import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

import styles from '../styles/Word.module.css';

export default function RandomWord({ translate }) {
  const [word, setWord] = useState('');
  const key = process.env.REACT_APP_NINJA_API;
  const [sourceLanguage, setSourceLanguage] = useState('EN');
  const [targetLanguage, setTargetLanguage] = useState('PL');
  let { data, isLoading, makeFetch } = useFetch();
  const languages = [
    'CS',
    'DA',
    'DE',
    'EN',
    'ES',
    'ET',
    'FI',
    'FR',
    'HU',
    'ID',
    'IT',
    'LT',
    'LV',
    'NL',
    'PL',
    'PT',
    'RO',
    'SK',
    'SL',
    'SV',
    'TR',
  ];
  const handleClick = () => {
    makeFetch('https://api.api-ninjas.com/v1/randomword', {
      headers: {
        'X-Api-Key': key,
      },
    });
  };
  useEffect(() => {
    setWord(data?.word);
  }, [data]);
  return (
    <div className={'container'}>
      <form className={styles.inputForm}>
        <div className={styles.sourceDiv}>
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

        <div className={styles.inputDiv}>
          <input
            onChange={e => setWord(e.target.value)}
            value={isLoading ? 'Loading...' : word}
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
        <div className={styles.targetDiv}>
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
