import { useState } from "react";
import MeaningsBox from "./MeaningsBox";
import AddMeanings from "./AddMeanings";

function App() {
  const [meanings, setMeanings] = useState([]);
  return (
    <div className="container">
      <AddMeanings setMeanings={setMeanings} />
      <MeaningsBox meanings={meanings} />
    </div>
  );
}

export default App;
