const express = require('express');
const router = express.Router();

// Initialize data array to store Employee records
const employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Project Manager' },
  { id: 3, name: 'Tom jerry', position: 'Developer'}
  // Add more employee records as needed
];

// Get All Employees Data
router.get('/', (req, res) => {
  res.json(employees);
});

// Get a Single Employee Record by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const employee = employees.find(emp => emp.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send('Employee not found');
  }
});

// Insert a New Employee Record
router.post('/', (req, res) => {
    const { name, position } = req.body;
  
    if (!name || !position) {
      return res.status(400).send('Name and position are required');
    }
  
    const newEmployee = {
      id: employees.length + 1,
      name,
      position
    };
  
    employees.push(newEmployee);
    res.status(201).send('Employee added successfully');
  });


  //put method
  router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, position } = req.body;
    const employeeIndex = employees.findIndex(emp => emp.id === id);
  
    if (employeeIndex !== -1) {
      const updatedEmployee = {
        ...employees[employeeIndex],
        name: name || employees[employeeIndex].name,
        position: position || employees[employeeIndex].position
      };
  
      employees[employeeIndex] = updatedEmployee;
      res.status(200).send('Employee updated successfully');
    } else {
      res.status(404).send('Employee not found');
    }
  });


  // Delete an Employee Record
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const employeeIndex = employees.findIndex(emp => emp.id === id);
  
    if (employeeIndex !== -1) {
      employees.splice(employeeIndex, 1);
      res.status(204).send(); // No content
    } else {
      res.status(404).send('Employee not found');
    }
  });
module.exports = router;
