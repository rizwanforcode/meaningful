import WordMeaning from "./WordMeaning";

const MeaningsBox = ({ meanings }) => {
  return (
    <main className="meaning-box">
      {meanings.map((meaning, index) => (
        <WordMeaning meaning={meaning} key={index} />
      ))}
    </main>
  );
};

export default MeaningsBox;
