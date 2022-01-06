import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header companyName="Babbage Cabbage" eventName="50 for 50" eventDate="January 7th-9th from 9:00am - 3:00pm" image="" />
      <Item name="Charcoal Grill" discountedPrice="$197.00" image="" />
      <Item name="Fruit Platter" discountedPrice="$12.88" image="" />
      <Item name="Gourmet Cupcakes 6 Count" discountedPrice="$19.99" image="" />
      <Item name="Charcuterie Board" discountedPrice="$29.87" image="" />
      <Item name="Organic Avocados" discountedPrice="$4.24" image="" />
      <Item name="Kitchen Knife Set" discountedPrice="$63.59" image="" />
      <Item name="Cabbage" discountedPrice="$3.75" image="" />
      <Footer storeHours="9am to 9pm, Tuesday-Sunday" storeLocation="123 Babbage Street, Beverly Hills CA 90210" storePhone="101-101-1010" />
    </div>
  );
}

export default App;
