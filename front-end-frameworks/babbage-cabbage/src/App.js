import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header companyName="Babbage Cabbage" eventName="50 for 50" eventDate="January 7th-9th from 9:00am - 3:00pm" image="50-for-50.png" />
      <Item name="Charcoal Grill" discountedPrice="$197.00" image="charcoal-grill.jpg" />
      <Item name="Fruit Platter" discountedPrice="$12.88" image="fruit-platter.jpg" />
      <Item name="Gourmet Cupcakes 6 Count" discountedPrice="$19.99" image="gourmet-cupcakes.jpg" />
      <Item name="Charcuterie Board" discountedPrice="$29.87" image="charcuterie-board.jpg" />
      <Item name="Organic Avocados" discountedPrice="$4.24" image="organic-avocados.jpeg" />
      <Item name="Kitchen Knife Set" discountedPrice="$63.59" image="kitchen-knife-set.jpg" />
      <Item name="Cabbage" discountedPrice="$3.75" image="cabbage.jpg" />
      <Footer storeHours="9am to 9pm, Tuesday-Sunday" storeLocation="123 Babbage Street, Beverly Hills CA 90210" storePhone="101-101-1010" />
    </div>
  );
}

export default App;
