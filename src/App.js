
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BubbleChart from './components/BubbleGraph'
import Chart from 'chart.js/auto';

function App() {
  return (

    <div className="App">
      <h1>Dashboard</h1>
      <table >
      <tr>
          <td > <BarChart/></td>
          <td><LineChart/></td>
        </tr>
        <tr>
          <td> <PieChart/></td>
          <td><BubbleChart/></td>
        </tr>
        </table>
     
    </div>

  );
}

export default App;
