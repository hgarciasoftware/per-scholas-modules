import { useState, useEffect } from 'react';

function Clue(props) {
  const { clue } = props;
  const [showQuestion, setShowQuestion] = useState(false);

  useEffect(() => {
    return function () {
      setShowQuestion(false);
    };
  }, [clue]);

  return (
    <div className="mt">
      <table>
        <tbody>
          <tr>
            <th scope="row">Category</th>
            <td>{clue.category.title}</td>
          </tr>
          <tr>
            <th scope="row">Points</th>
            <td>{clue.value}</td>
          </tr>
          <tr>
            <th scope="row">Answer</th>
            <td>{clue.question}</td>
          </tr>
          {showQuestion ? (
            <tr>
              <th scope="row">Question</th>
              <td>Who or what is <strong dangerouslySetInnerHTML={{__html: clue.answer}} />?</td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <div className="mt text-center">
        <button onClick={() => setShowQuestion(!showQuestion)}>
          {showQuestion ? 'Hide' : 'Show'} the question
        </button>
      </div>
    </div>
  );
}

export default Clue;
