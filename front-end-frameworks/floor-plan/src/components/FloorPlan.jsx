import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';

function FloorPlan() {
  return (
    <main className="floor-plan">
      <Bedroom bedNum="1" />
      <Kitchen />
      <Bath size="full" />
      <Bedroom bedNum="2" />
      <LivingRoom />
      <Bath size="half" />
      <Bedroom bedNum="3" />
    </main>
  );
}

export default FloorPlan;
