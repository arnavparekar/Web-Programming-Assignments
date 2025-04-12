import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being initialized');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component has been rendered to the DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: Component has been updated');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is about to be removed from the DOM');
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    console.log('Render: Component is being rendered');
    return (
      <div style={{ margin: '20px', padding: '20px', border: '1px solid #ddd' }}>
        <h2>Component Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>
          Update State
        </button>
        <div style={{ marginTop: '10px' }}>
          <p>Check the console to see lifecycle method logs</p>
        </div>
      </div>
    );
  }
}

// Parent component to demonstrate unmounting
class LifecycleDemoContainer extends Component {
  state = {
    showLifecycleDemo: true
  };

  toggleComponent = () => {
    this.setState(prevState => ({
      showLifecycleDemo: !prevState.showLifecycleDemo
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showLifecycleDemo ? 'Unmount Component' : 'Mount Component'}
        </button>
        {this.state.showLifecycleDemo && <LifecycleDemo />}
      </div>
    );
  }
}

export default LifecycleDemoContainer;