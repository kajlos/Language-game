import React, { useState } from 'react';

export default function RandomWord() {
  const [word, setWord] = useState('');

  const handleClick = async () => {};

  return (
    <div>
      <p>{word}</p>
      <button onClick={() => handleClick()}>Generate Word</button>
    </div>
  );
}
