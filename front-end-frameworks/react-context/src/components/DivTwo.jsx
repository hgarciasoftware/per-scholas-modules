import DivThree from './DivThree';

function DivTwo(props) {
  return (
    <div>
      Div Two
      <DivThree logUser={props.logUser} user={props.user} />
      <DivThree logUser={props.logUser} user={props.user} />
    </div>
  )
}

export default DivTwo;
