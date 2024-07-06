// src/components/AddStudent.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    degree: ''
  });
  const history = useHistory();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/students', student);
    history.push('/');
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" value={student.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" value={student.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Degree</label>
          <input type="text" name="degree" className="form-control" value={student.degree} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
