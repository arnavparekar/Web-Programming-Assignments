import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return (
    <div style={{
      padding: '15px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      border: '1px solid #eee',
      borderRadius: '4px'
    }}>
      <h3>Child Component with Prop Validation</h3>
      <p>Message from parent: {message}</p>
    </div>
  );
}

Child.propTypes = {
  message: PropTypes.string.isRequired
};

export default Child;