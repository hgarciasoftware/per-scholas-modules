import './App.css';
import Header from './components/Header';
import ReceiptList from './components/ReceiptList';

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const receipt1 = {
  person: 'Karolin',
  order: {
    main: 'Burrito',
    protein: 'Organic Tofu',
    rice: 'Purple Rice',
    sauce: 'Green Crack',
    toppings: [
      'Baby Bok Choy', 'Cucumber Kimchi'
    ],
    drink: 'Korchata',
    cost: 22
  },
  paid: false
};
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
};
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
};

let key = 0;

const receipts = [receipt1, receipt2, receipt3].map(receipt => {
  const r = {...deepClone(receipt), key: key++};

  r.order = Object.entries(r.order).reduce((order, [prop, val]) => {
    order[prop] = {val, key: key++};

    return order;
  }, {});

  return r;
});

function App() {
  return (
    <div className="App">
      <Header />
      <ReceiptList receipts={receipts} />
    </div>
  );
}

export default App;
