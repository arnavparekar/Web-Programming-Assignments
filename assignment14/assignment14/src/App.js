import React from 'react';
import ShowImages from './components/Q1Images/ShowImages';
import LoginForm from './components/Q2LoginForm/LoginForm';
import ProfilePage from './components/Q3UserProfile/ProfilePage';

function App() {
  return (
    <div className="App">
      <h1>Assignment 14</h1>
      <hr />
      <ShowImages />
      <hr />
      <LoginForm />
      <hr />
      <ProfilePage />
    </div>
  );
}

export default App;
