import Hello from './components/Hello';
import Wish from './components/Wish';

function App() {
  return (
    <div>
      <Hello name="Tom" />
      <Hello name="Jack" />
      <Wish />
    </div>
  );
}

export default App;
