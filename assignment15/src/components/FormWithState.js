import React, { useState } from 'react';

function FormWithState() {
  // Using useState for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };
  
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>Form with useState</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '8px',
              margin: '0 10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              width: '250px'
            }}
          />
        </div>
        
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '8px',
              margin: '0 10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              width: '250px'
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Submit
        </button>
      </form>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Form Preview (Updates as you type):</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
      
      {submittedData && (
        <div style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '5px'
        }}>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormWithState;