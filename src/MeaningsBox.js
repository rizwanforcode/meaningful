import WordMeaning from "./WordMeaning";

const MeaningsBox = ({ meanings }) => {
  return (
    <div>
      {meanings.map((meaning, index) => (
        <WordMeaning key={index} meaning={meaning} />
      ))}
    </div>
  );
};

export default MeaningsBox;
