import DivTwo from './DivTwo';

function DivOne(props) {
  return (
    <div>
      DivOne
      <DivTwo logUser={props.logUser} user={props.user} />
    </div>
  );
}

export default DivOne;
