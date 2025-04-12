import React, { useRef, useState } from 'react';

function FormWithRef() {
  // Using useRef for form inputs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  
  const [submittedData, setSubmittedData] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmittedData({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };
  
  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2>Form with useRef</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label htmlFor="nameRef">Name: </label>
          <input
            type="text"
            id="nameRef"
            ref={nameRef}
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
          <label htmlFor="emailRef">Email: </label>
          <input
            type="email"
            id="emailRef"
            ref={emailRef}
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
      
      <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
        Note: With useRef, values are only shown upon form submission.
      </p>
    </div>
  );
}

export default FormWithRef;