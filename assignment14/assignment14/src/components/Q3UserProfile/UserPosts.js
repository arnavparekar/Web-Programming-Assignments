import React from 'react';

const UserPosts = () => {
  const posts = ['Learning React', 'Completed JS Basics', 'Won Hackathon'];

  return (
    <div>
      <h4>User Posts:</h4>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
