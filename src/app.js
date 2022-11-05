import React from 'react';
import './app.css';
import Calculator from './components/Calculator';
import Navbar from './pages/Navbar';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default App;
