import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState("");
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigation after update

  const getSingleUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/${id}`);
      const result = await response.json();
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      } else {
        // Check if result contains the expected fields
        console.log("Fetched user:", result);
        setName(result.name || ""); // Default to empty string if undefined
        setEmail(result.email || "");
        setAge(result.age || 0);
        setError(""); // Clear any previous error
      }
    } catch (err) {
      console.error("Failed to fetch user data:", err);
      setError("Failed to fetch user data.");
    }
  };

  // Call the function to fetch user data on component mount
  useEffect(() => {
    getSingleUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const updatedUser = { name, email, age };

    try {
      const response = await fetch(`http://localhost:3000/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      const result = await response.json();
      if (!response.ok) {
        console.log(result.error);
        setError(result.error);
      } else {
        console.log("User updated:", result);
        navigate("/"); // Redirect after update (adjust the path as necessary)
      }
    } catch (err) {
      console.error("Failed to update user:", err);
      setError("Failed to update user.");
    }
  };

  return (
    <div className="container my-2">
      {error && <div className="alert alert-danger">{error}</div>}
      <h2 className="text-center">Edit the data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
