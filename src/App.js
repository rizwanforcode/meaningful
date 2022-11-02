import { BsSearch } from "react-icons/bs";

function App() {
  return (
    <div className="container">
      <form class="search-form">
        <div className="input-group">
          <input
            className="search-field"
            type="text"
            placeholder="Enter a word or group of words"
          />
          <button type="submit" className="search-icon-wrapper">
            <BsSearch className="search-icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
