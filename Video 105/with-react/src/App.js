/**
 * ==========================================================================
 * Sigma Web Development Course - Video 105
 * Topic: Introduction to React.js
 * File: App.js
 * 
 * Description:
 *   Why React: Understanding Single Page Applications, Virtual DOM, JSX, and component-based architecture.
 * ==========================================================================
 */
import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <Navbar logoText="CodeWithCWHHarry"/>
      <div className='value'> {value}</div>
     <button onClick={()=>{setValue(value + 1)}}>Click me</button>
     <Footer/>
    </div>
  );
}

export default App;
