import WordMeaning from "./WordMeaning";

const MeaningsBox = ({ meanings }) => {
  return (
    <div className="meaning-box">
      {meanings.map((meaning, index) => (
        <WordMeaning key={index} meaning={meaning} />
      ))}
    </div>
  );
};

export default MeaningsBox;
