import React from 'react';
import Answer from './components/Answer';
import Word from './components/Word';
function App() {
  const handleClick = async () => {
    let res = await fetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&source_lang=EN&text=Hi&target_lang=PL`
    );
    let sentence = await res.json();
    console.log(sentence);
  };
  return (
    <>
      <Word />
      <Answer />
    </>
  );
}

export default App;
