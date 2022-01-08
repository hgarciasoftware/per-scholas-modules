import './App.css';
import Header from './components/Header';
import ContactList from './components/ContactList';
import Footer from './components/Footer';
import contact from './data/contact.json';

function App() {
  return (
    <div className="App">
      <Header />
      <ContactList results={contact.results} />
      <Footer />
    </div>
  );
}

export default App;
