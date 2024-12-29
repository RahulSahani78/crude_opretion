
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Read = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // For loading feedback
  const [success, setSuccess] = useState(""); // For success feedback

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000");
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch data.");
      }

      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: "DELETE"
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to delete data.");
      }

      setSuccess("Data deleted successfully");
      setTimeout(() => setSuccess(""), 2000); // Clear success message after 2 seconds
      getData(); // Refresh the data list
    } catch (err) {
      console.error("Error deleting data:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {loading && <p>Loading data...</p>}

      <h2 className="text-center">All Data</h2>
      <div className="row">
        {data.map((ele) => (
          <div className="col-3" key={ele._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Email: {ele.email}</h6>
                <h6 className="text-muted">Age: {ele.age}</h6>
                <a
                  href="#"
                  className="card-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(ele._id);
                  }}
                >
                  Delete
                </a>
                <Link to={`/edit/${ele._id}`} className="card-link">Edit</Link>              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;
