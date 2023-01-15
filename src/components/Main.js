import React from 'react';
import useFetch from '../hooks/useFetch';
import Answer from './Answer';
import Word from './Word';
function Main() {
  let { data: answer, isLoading, makeFetch } = useFetch();
  const handleClick = (source, word, target) => {
    makeFetch(
      `https://api-free.deepl.com/v2/translate?auth_key=${process.env.REACT_APP_DEEPL_KEY}&source_lang=${source}&text=${word}&target_lang=${target}`
    );
  };
  return (
    <main>
      <Word translate={handleClick} />
      <Answer answer={answer ? answer.translations[0].text : ''} isLoading={isLoading} />
    </main>
  );
}

export default Main;
