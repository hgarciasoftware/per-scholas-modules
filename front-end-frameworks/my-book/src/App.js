import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

const loremIpsum = 'Lorem ipsum dolor sit amet, an sea omnis luptatum, ea consul iudicabit duo. Cu enim lucilius vix, ut pri decore nostro petentium. Ne sea summo deleniti. Ea omnes nominati pro. At vis propriae consequat torquatos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio eum eu.'

function App() {
  return (
    <div className="App">
      <Header />
      <Book title="The Power of Now" image="https://images-na.ssl-images-amazon.com/images/I/71wzP4rL1mL.jpg" description={loremIpsum} />
      <Book title="The Alchemist" image="https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._SX329_BO1,204,203,200_.jpg" description={loremIpsum} />
      <Footer />
    </div>
  );
}

export default App;
