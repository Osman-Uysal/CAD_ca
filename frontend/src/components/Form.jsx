function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="car" className="form-label">
          Car:
        </label>
        <input
          type="text"
          className="form-control"
          id="car"
          name="car"
          onChange={handleChange}
          value={value.car || ''}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="details" className="form-label">
          Details:
        </label>
        <input
          type="text"
          className="form-control"
          id="details"
          name="details"
          onChange={handleChange}
          value={value.details || ''}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {buttonType}
      </button>
    </form>
  );
}

export default Form;