import Score from './Score';

function Student(props) {
  const { name, bio, scores } = props.student;

  return (
    <article>
      <h1>{name}</h1>
      <p>{bio}</p>
      {scores.map((score, index) => <Score score={score} key={index} />)}
    </article>
  );
}

export default Student;
