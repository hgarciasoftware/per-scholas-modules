function Score(props) {
  const { date, score } = props.score;

  return (
    <tr>
      <td>{date}</td>
      <td className="text-right">{score}</td>
    </tr>
  );
}

export default Score;
