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
    <div>
      <table>
        <tbody>
          <tr>
            <th>Category</th>
            <td>{clue.category.title}</td>
          </tr>
          <tr>
            <th>Points</th>
            <td>{clue.value}</td>
          </tr>
          <tr>
            <th>Answer</th>
            <td>{clue.question}</td>
          </tr>
          {showQuestion ? (
            <tr>
              <th>Question</th>
              <td>Who or what is <strong dangerouslySetInnerHTML={{__html: clue.answer}} />?</td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <button onClick={() => setShowQuestion(!showQuestion)}>
        {showQuestion ? 'Hide' : 'Show'} the question
      </button>
    </div>
  );
}

export default Clue;
