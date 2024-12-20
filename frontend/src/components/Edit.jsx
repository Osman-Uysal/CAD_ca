// Edit.jsx

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCar, getDetail } from '../lib/api/cars';
import FormBody from './Form';

function Edit() {
  const [value, setValue] = useState({ car: '', details: '' });
  const query = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(query);
  }, [query]);

  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { car, details } = response.data;
      setValue({ car, details });
    } catch (error) {
      console.error(error);
    }
  };

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
      await updateCar(query.id, value);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit</h1>
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update"
      />
    </div>
  );
}

export default Edit;
