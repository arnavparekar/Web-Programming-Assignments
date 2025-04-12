import React, { useState, useEffect } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // This is a simulation since we're not making actual API calls
      // In a real application, you would use fetch() to call an actual API
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call a fake noodle? An impasta!",
        "How do you organize a space party? You planet!"
      ];
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setJoke(jokes[randomIndex]);
    } catch (err) {
      setError('Failed to fetch joke');
      console.error('Error fetching joke:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      textAlign: 'center'
    }}>
      <h2>Random Joke Fetcher</h2>
      
      {loading && <p>Loading joke...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && (
        <div style={{
          padding: '15px',
          margin: '15px 0',
          backgroundColor: '#f9f9f9',
          borderRadius: '5px'
        }}>
          <p>{joke}</p>
        </div>
      )}
      
      <button 
        onClick={fetchJoke} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#cccccc' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'default' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'Get New Joke'}
      </button>
    </div>
  );
}

export default JokeFetcher;