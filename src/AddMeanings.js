import { useState } from "react";
import { BsSearch } from "react-icons/bs";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const AddMeanings = ({ setMeanings }) => {
  const [passedWords, setpassedWords] = useState("");

  const getWordMeaning = async (e) => {
    try {
      // const response = await
    } catch {}
  };

  const passedWordsEntered = (e) => {
    e.preventDefault();
    const wordsList = passedWords.split(" ");
    wordsList.forEach((word) => {
      getWordMeaning(word);
    });
    setpassedWords("");
  };
  return (
    <form className="search-form" onSubmit={passedWordsEntered}>
      <div className="input-group">
        <input
          className="search-field"
          type="text"
          placeholder="Enter a word or group of words"
          value={passedWords}
          required
          onChange={(e) => {
            setpassedWords(e.target.value);
          }}
        />
        <button type="submit" className="search-icon-wrapper">
          <BsSearch className="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default AddMeanings;
