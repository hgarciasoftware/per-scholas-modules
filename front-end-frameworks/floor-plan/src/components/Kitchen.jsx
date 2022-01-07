import Oven from './Oven';
import Sink from './Sink';

function Kitchen() {
  return (
    <div className="component kitchen">
      Kitchen
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;
