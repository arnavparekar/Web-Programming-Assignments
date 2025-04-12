import React, { useState } from 'react';

function Content() {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a fake noodle? An impasta!",
    "How do you organize a space party? You planet!"
  ];
  
  const [joke, setJoke] = useState("");
  
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };
  
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      minHeight: '200px' 
    }}>
      <h2>Random Joke Generator</h2>
      <button 
        onClick={getRandomJoke}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Get Joke
      </button>
      {joke && (
        <div style={{ 
          margin: '20px', 
          padding: '15px', 
          backgroundColor: '#f8f8f8',
          borderRadius: '5px'
        }}>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
}

export default Content;