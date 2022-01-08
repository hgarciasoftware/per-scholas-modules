import Oven from './Oven';
import Sink from './Sink';

function Kitchen() {
  return (
    <figure className="room kitchen">
      <figcaption className="room-caption">Kitchen</figcaption>
      <Oven />
      <Sink />
    </figure>
  );
}

export default Kitchen;
