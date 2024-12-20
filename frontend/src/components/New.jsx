import { useState } from 'react';
import { createCar } from '../lib/api/cars';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function New() {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCar(value);
      navigate('/');
    } catch (error) {
      console.error('Failed to create car:', error);
    }
  };

  return (
    <div className="container">
      <h1>Add New Car</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add"
      />
    </div>
  );
}

export default New;