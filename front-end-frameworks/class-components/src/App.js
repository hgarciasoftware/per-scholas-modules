import './App.css';
// import Hello from './components/Hello';
// import Wish from './components/Wish';
import EmployeeTable from './components/EmployeeTable';

const employees = [
  {
    name: 'Garrick',
    department: 'Product Management',
    salary: '$78,328.45',
    key: '0'
  },
  {
    name: 'Becka',
    department: 'Human Resources',
    salary: '$67,090.64',
    key: '1'
  },
  {
    name: 'Herman',
    department: 'Engineering',
    salary: '$62,066.79',
    key: '2'
  }
];

function App() {
  return (
    <div className="App">
      {/* <Hello name="Tom" /> */}
      {/* <Hello name="Jack" /> */}
      {/* <Wish /> */}
      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
