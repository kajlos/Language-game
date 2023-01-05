import React, { useState } from 'react';
import Answer from './Answer';
import Word from './Word';
function Main() {
  const [answer, setAnswer] = useState('');
  const handleClick = async (source, word, target) => {
    let res = await fetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&source_lang=${source}&text=${word}&target_lang=${target}`
    );
    let sentence = await res.json();
    setAnswer(sentence.translations[0].text);
  };
  return (
    <main>
      <Word translate={handleClick} />
      <Answer answer={answer} />
    </main>
  );
}

export default Main;
