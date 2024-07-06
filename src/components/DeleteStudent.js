// src/components/DeleteStudent.js
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DeleteStudent = () => {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    deleteStudent();
  }, []);

  const deleteStudent = async () => {
    await axios.delete(`/api/students/${id}`);
    history.push('/');
  };

  return (
    <div>
      <h2>Deleting Student...</h2>
    </div>
  );
};

export default DeleteStudent;
