import React, { Component, useState } from 'react';

// 1(i) Without JSX
const HelloWithoutJSX = () => {
  return React.createElement('h1', null, 'Hello, React!');
};

// 1(ii) With JSX
const HelloWithJSX = () => {
  return <h1>Hello, React!</h1>;
};

// 1(iii) With variable
const HelloVariable = () => {
  const message = "Hello from a variable!";
  return <h1>{message}</h1>;
};

// 2. List of fruits
const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return (
    <ul>
      {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
    </ul>
  );
};

// 3. Styled message with inline CSS
const StyledMessage = () => {
  const style = {
    color: 'green',
    fontSize: '24px',
    fontWeight: 'bold'
  };
  return <p style={style}>This is a styled message!</p>;
};

// 4. Sum of squares
const SumOfSquares = () => {
  const a = 3;
  const b = 4;
  const sum = a * a + b * b;
  return <p>Sum of squares: {sum}</p>;
};

// 5. Conditional Greeting
const ConditionalGreeting = ({ isMorning }) => {
  return <h2>{isMorning ? 'Good Morning' : 'Good Evening'}</h2>;
};

// 6. Current Day
const CurrentDay = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  return <p>Today is: {days[today]}</p>;
};

// 7. Prime Check
const PrimeChecker = ({ number }) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return <p>{number} is {isPrime(number) ? 'a Prime' : 'not a Prime'} number.</p>;
};

// 8. Temperature Converter
class TemperatureConverter extends Component {
  constructor() {
    super();
    this.state = {
      celsius: '',
      fahrenheit: ''
    };
  }

  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    const fahrenheit = (celsius * 9 / 5 + 32).toFixed(2);
    this.setState({ celsius, fahrenheit });
  };

  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    this.setState({ fahrenheit, celsius });
  };

  render() {
    return (
      <div>
        <h3>Temperature Converter</h3>
        <input
          type="number"
          placeholder="Celsius"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
        />
        <input
          type="number"
          placeholder="Fahrenheit"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

// 9. Reverse and Palindrome
const StringAnalyzer = ({ text }) => {
  const reversed = text.split('').reverse().join('');
  const isPalindrome = text === reversed;
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{text} is {isPalindrome ? '' : 'not '}a palindrome</p>
    </div>
  );
};

// 10. Random Number Generator
const RandomNumber = () => {
  const [num, setNum] = useState(null);
  const generate = () => {
    setNum(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div>
      <button onClick={generate}>Generate Random Number</button>
      {num && <p>Random Number: {num}</p>}
    </div>
  );
};

// 11. Leap Year Checker
const LeapYearChecker = ({ year }) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return <p>{year} is {isLeap ? '' : 'not '}a leap year.</p>;
};

// 12. Class Component with Props
class UserGreeting extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h2>Hello, {firstName} {lastName}!</h2>;
  }
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <HelloWithoutJSX />
      <HelloWithJSX />
      <HelloVariable />
      <FruitList />
      <StyledMessage />
      <SumOfSquares />
      <ConditionalGreeting isMorning={true} />
      <CurrentDay />
      <PrimeChecker number={17} />
      <TemperatureConverter />
      <StringAnalyzer text="madam" />
      <RandomNumber />
      <LeapYearChecker year={2024} />
      <UserGreeting firstName="Arnav" lastName="Parekar" />
    </div>
  );
}

export default App;
