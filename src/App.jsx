import './App.css';
import logo from './images/logo.svg';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         BarElement, 
         Title,
         Tooltip,
       } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)


function App() {
  const state = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], 
    datasets: [
      {
        label: "",
        backgroundColor: "#EC755D",
        hoverBackgroundColor: "#76B5BC", 
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  }

  return (
    <>
      <div className='expenses-component'>

        {/* Balance Component */}
        <div className='balance-component'>
          <div>
            <p>My balance</p>
            <h2>$921.48</h2>
          </div>
          <img src={logo} alt="" />
        </div>

        {/* Monthly Component */}
        <div className='month-component'>
          <h1>Spending - Last 7 days</h1>
          
          <Bar data={state} />

          <hr />

          <div className='monthly-summary'>
            <div className='monthly-total'>
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className='monthly-perc'>
              <h5>+2.4%</h5>
              <p>from last month</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
