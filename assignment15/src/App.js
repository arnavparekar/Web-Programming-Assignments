import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import StyledButton from './components/StyledButton';
import LifecycleDemoContainer from './components/LifeCycleDemo';
import Parent from './components/Parent';
import Counter from './components/Counter';
import JokeFetcher from './components/JokeFetcher';
import RefFormExample from './components/RefFormExample';
import ThemedApp from './components/ThemedApp';
import FormWithState from './components/FormWithState';
import FormWithRef from './components/FormWithRef';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Header title="React Components Demo" />
            <Content />
          </>
        );
      case 'styledButton':
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Styled Button Examples</h2>
            <StyledButton onClick={() => alert('Button clicked!')}>
              Click Me!
            </StyledButton>
          </div>
        );
      case 'lifecycle':
        return <LifecycleDemoContainer />;
      case 'props':
        return <Parent />;
      case 'hooks':
        return <Counter />;
      case 'effect':
        return <JokeFetcher />;
      case 'ref':
        return <RefFormExample />;
      case 'context':
        return <ThemedApp />;
      case 'formState':
        return <FormWithState />;
      case 'formRef':
        return <FormWithRef />;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="App">
      <div style={{
        backgroundColor: '#444',
        padding: '10px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <button style={buttonStyle} onClick={() => setActiveSection('home')}>Home</button>
        <button style={buttonStyle} onClick={() => setActiveSection('styledButton')}>Styled Buttons</button>
        <button style={buttonStyle} onClick={() => setActiveSection('lifecycle')}>Lifecycle</button>
        <button style={buttonStyle} onClick={() => setActiveSection('props')}>Props</button>
        <button style={buttonStyle} onClick={() => setActiveSection('hooks')}>Hooks - State</button>
        <button style={buttonStyle} onClick={() => setActiveSection('effect')}>Hooks - Effect</button>
        <button style={buttonStyle} onClick={() => setActiveSection('ref')}>Hooks - Ref</button>
        <button style={buttonStyle} onClick={() => setActiveSection('context')}>Hooks - Context</button>
        <button style={buttonStyle} onClick={() => setActiveSection('formState')}>Form - useState</button>
        <button style={buttonStyle} onClick={() => setActiveSection('formRef')}>Form - useRef</button>
      </div>

      <div style={{ marginBottom: '60px' }}>
        {renderSection()}
      </div>

      <Footer />
    </div>
  );
}

const buttonStyle = {
  backgroundColor: '#333',
  color: 'white',
  border: 'none',
  margin: '5px',
  padding: '8px 12px',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default App;