import React, { useState } from 'react';

export default function RandomWord() {
  const [word, setWord] = useState('');
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
        <select>
          Source language
          </select>
        <input onChange={e => setWord(e.target.value)} value={word}></input>
        <button type="button" onClick={() => handleClick()}>
          Generate Word
        </button>
        <select>
          Target Language

          

          
          </select>
      </form>
    </div>
  );
}
