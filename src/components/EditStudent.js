// src/components/EditStudent.js
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    degree: ''
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    const response = await axios.get(`/api/students/${id}`);
    setStudent(response.data);
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/students/${id}`, student);
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Student</h2>
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
        <button type="submit" className="btn btn-success">Update Student</button>
      </form>
    </div>
  );
};

export default EditStudent;
