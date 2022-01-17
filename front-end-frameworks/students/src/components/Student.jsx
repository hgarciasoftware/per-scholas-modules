import Score from './Score';

function Student(props) {
  const { name, bio, scores } = props.student;
  const nameKebab = name.split(' ').map(str => str.toLowerCase()).join('-');

  return (
    <article>
      <h1>{name}</h1>
      <p>{bio}</p>
      <table role="region" aria-labelledby={`scores-${nameKebab}`}>
        <caption id={`scores-${nameKebab}`}>{name}'s Scores</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => <Score score={score} key={index} />)}
        </tbody>
      </table>
    </article>
  );
}

export default Student;
