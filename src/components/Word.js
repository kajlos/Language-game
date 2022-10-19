import React, { useState } from 'react';

export default function RandomWord() {
  const [word, setWord] = useState('');

  const handleClick = async () => {
    let res = await fetch('https://api.api-ninjas.com/v1/randomword');
    let data = await res.json();
    setWord(data.word);
  };

  return (
    <div>
      <input onChange={e => setWord(e.target.value)} value={word}></input>
      <button onClick={() => handleClick()}>Generate Word</button>
    </div>
  );
}
