import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const AddMeanings = ({ meanings, setMeanings }) => {
  const [passedWords, setpassedWords] = useState("");

  const passedWordsEntered = (e) => {
    e.preventDefault();
    const wordsList = passedWords.split(" ");
    const newMeanings = [];
    wordsList.forEach(async (word) => {
      try {
        const response = await axios.get(`${API_URL}/${word}`);
        setMeanings((previousMeanings) => [
          ...previousMeanings,
          response.data[0],
        ]);
      } catch (error) {
        console.log(error);
      }
    });
    console.table(newMeanings);

    setpassedWords("");
  };

  // incase you need to change the value multiple times you'll have to use another way of dealing with things in useState

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
