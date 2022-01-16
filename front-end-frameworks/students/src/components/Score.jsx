function Score(props) {
  const { date, score } = props.score;

  return (
    <li>
      <span>{date}</span> | <span>{score}</span>
    </li>
  );
}

export default Score;
