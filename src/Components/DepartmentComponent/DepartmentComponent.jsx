import React from 'react';
import '../DepartmentComponent/DepartmentComponent.css'; // Import the CSS file

const DepartmentComponent = () => {
  const departments = [
    { name: 'AIDS', count: 120 },
    { name: 'ECE', count: 150 },
    { name: 'AI&IOT', count: 110 },
    { name: 'Medical Electronic', count: 110 },
    { name: 'BME', count: 110 },
    { name: 'EEE', count: 100 },
    { name: 'MECH', count: 130 },
    { name: 'EIE', count: 90 },
    { name: 'AIML', count: 110 },
    { name: 'AICS', count: 80 },
    { name: 'CSE', count: 200 },
  ];

  return (
    <div className="department-container">
      <h1>Departments</h1>
      <table className="department-table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={index} className="department-row">
              <td>{dept.name}</td>
              <td>{dept.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentComponent;
