import { Component } from 'react';

class Employee extends Component {
  render() {
    const { name, department, salary } = this.props.employee;

    return (
      <tr>
        <td>{name}</td>
        <td>{department}</td>
        <td className="text-right">{salary}</td>
      </tr>
    );
  }
}

export default Employee;
