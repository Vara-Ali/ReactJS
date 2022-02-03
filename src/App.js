
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import BubbleChart from './components/BubbleGraph'
import Header from './components/Header';
import Chart from 'chart.js/auto';

function App() {
  return (

    <div className="App">
      <Header title = "Dashboard" searchBar= {true}/>
      <div class="row row-cols-2">
    <div class="col"><BarChart/></div>
    <div class="col"><LineChart/></div>
    <div class="col"><PieChart/> </div>
    <div class="col"><BubbleChart/> </div>
  </div>
     
    </div>

  );
}

export default App;
