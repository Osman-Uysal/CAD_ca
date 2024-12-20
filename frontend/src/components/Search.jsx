import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/cars", {
        headers: { "X-Api-Key": "WXfx90l7yctydBS98IUdcQ==Akvk3kB96GwvqvDl" },
        params: { model: query },
      });
      setCarData(response.data);
    } catch (err) {
      setError("Unable to fetch car details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Car Search</h1>
      <div className="mb-3">
        <label htmlFor="search" className="form-label">
          Search Car by Model:
        </label>
        <input
          type="text"
          id="search"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-primary mt-3"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {carData.length > 0 && (
        <div className="mt-4">
          <h3>Results</h3>
          <div className="card-deck">
            {carData.map((car, index) => (
              <div className="card mb-3" style={{ width: "18rem" }} key={index}>
                <div className="card-body">
                  <h5 className="card-title">{car.make} {car.model}</h5>
                  <p className="card-text">
                    <strong>Year:</strong> {car.year} <br />
                    <strong>Fuel Type:</strong> {car.fuel_type} <br />
                    <strong>Transmission:</strong> {car.transmission} <br />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
