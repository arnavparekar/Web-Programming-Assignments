import React from 'react';

const LoginForm = () => {
  return (
    <form style={{ margin: "20px" }}>
      <h2>Novell Services Login</h2>
      <label>Username: <input type="text" /></label><br /><br />
      <label>Password: <input type="password" /></label><br /><br />
      <label>City of Employment: <input type="text" /></label><br /><br />
      <label>Web server:
        <select>
          <option>-- Choose a server --</option>
          <option>Server A</option>
          <option>Server B</option>
        </select>
      </label><br /><br />

      <label>Please specify your role:</label><br />
      <input type="radio" name="role" /> Admin<br />
      <input type="radio" name="role" /> Engineer<br />
      <input type="radio" name="role" /> Manager<br />
      <input type="radio" name="role" /> Guest<br /><br />

      <label>Single Sign-on to the following:</label><br />
      <input type="checkbox" /> Mail<br />
      <input type="checkbox" /> Payroll<br />
      <input type="checkbox" /> Self-service<br /><br />

      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default LoginForm;
