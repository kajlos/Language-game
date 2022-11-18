import React, { useState } from 'react';

export default function RandomWord() {
  const [word, setWord] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('EN');
  const [targetLanguage, setTargetLanguage] = useState('EN');
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
    <div>
      <form>
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

        <input onChange={e => setWord(e.target.value)} value={word}></input>

        <button type="button" onClick={() => handleClick()}>
          Generate Word
        </button>
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
      </form>
    </div>
  );
}
