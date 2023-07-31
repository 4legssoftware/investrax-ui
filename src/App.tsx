import './App.css';
import SummaryDisplay from './SummaryDisplay.tsx';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const data = [
    { name: 'Stock', amount: 7000, percent: 70 },
    { name: 'Cash', amount: 3000, percent: 30 },
  ];

  return (
    <div>
      <h1>InvesTrax</h1>
      <button onClick={handleClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <SummaryDisplay data={data} />
    </div>
  );
}

export default App;
