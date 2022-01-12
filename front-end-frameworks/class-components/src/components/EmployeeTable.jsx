import { Component } from 'react';
import EmployeeTableHead from './EmployeeTableHead';
import EmployeeTableBody from './EmployeeTableBody';

class EmployeeTable extends Component {
  render() {
    return (
      <div className="table-wrap" role="region" aria-labelledby="employees" tabIndex="0">
        <table>
          <caption id="employees">
            <h2>Employees</h2>
          </caption>
          <EmployeeTableHead />
          <EmployeeTableBody employees={this.props.employees} />
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
