import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getList, deleteCar } from '../lib/api/cars';

function List() {
  const [carList, setCarList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCarList();
  }, []);

  const fetchCarList = async () => {
    try {
      const response = await getList();
      setCarList(response.data);
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCar(id);
      fetchCarList(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1>Car List</h1>
      <Link to="/new" className="btn btn-primary mb-3">Add New Car</Link>
      <Link to="/search" className="btn btn-secondary mb-3 ms-2">Search Cars</Link>
      <ul className="list-group">
        {carList.map((car) => (
          <li key={car.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{car.car}</strong>: {car.details}
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(car.id)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;