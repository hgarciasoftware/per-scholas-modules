import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, an sea omnis luptatum, ea consul iudicabit duo. Cu enim lucilius vix, ut pri decore nostro petentium. Ne sea summo deleniti. Ea omnes nominati pro. At vis propriae consequat torquatos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio eum eu.';

function App() {
  return (
    <div className="App">
      <Header />
      <Book title="The Power of Now" image="./the-power-of-now.jpg" description={LOREM_IPSUM} />
      <Book title="The Alchemist" image="./the-alchemist.jpg" description={LOREM_IPSUM} />
      <Footer />
    </div>
  );
}

export default App;
