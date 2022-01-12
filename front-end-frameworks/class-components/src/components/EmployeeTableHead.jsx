import { Component } from 'react';

class EmployeeTableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>
    );
  }
}

export default EmployeeTableHead;
