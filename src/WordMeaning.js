const WordMeaning = ({ meaning }) => {
  return (
    <div className="meaning">
      <p className="word">{meaning.word}</p>
      <p className="phonetic">{meaning.phonetic}</p>

      {meaning.meanings.map((singleMeaning, index) => (
        <div className="single-meaning-wrapper" key={index}>
          <p className="part-of-speech">{singleMeaning.partOfSpeech}</p>
          <ol className="meaning-list">
            {singleMeaning.definitions.map((definition, index) => (
              <li key={index}>{definition.definition}</li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default WordMeaning;
