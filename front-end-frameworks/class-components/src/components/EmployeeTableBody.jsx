import { Component } from 'react';
import Employee from './Employee';

class EmployeeTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.employees.map(employee => {
          return <Employee employee={employee} key={employee.key} />;
        })}
      </tbody>
    );
  }
}

export default EmployeeTableBody;
