import './App.css';
import SummaryDisplay from './SummaryDisplay.tsx';

function App() {
  const data = [
    { name: 'Stock', amount: 7000, percent: 70 },
    { name: 'Cash', amount: 3000, percent: 30 },
  ];

  return (
    <div>
      <h1>InvesTools</h1>
      <SummaryDisplay data={data} />
    </div>
  );
}

export default App;
