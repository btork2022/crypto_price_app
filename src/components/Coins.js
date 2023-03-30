// Importing React library
import React from 'react';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import LineChart from './chart';


// Defining the Coin component and adding props
function Coin({ name, icon, price, symbol }) {
  const formattedPrice = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const chartUrl = `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${name.toLowerCase()}`; // replace with actual URL of chart component
  const [coinChartData, setCoinChartData] = useState([]);

  function getChartData() {

    Axios.get(chartUrl).then(
      (response) => {
        console.log(response.data);
        setCoinChartData(response.data);
      })
  }

  return (
    <div className='coin'>
      <h1> Name: {name}</h1>
      
        
        {coinChartData.length !== 0 ? <LineChart data={coinChartData} /> 
        : <img onClick={getChartData} src={icon} alt='' /> }
        
      <h3> Price:  $ {formattedPrice}</h3>
      <h3> Symbol:  {symbol}</h3>
    </div>
  );
}

// Exporting the Coin component as the default export of the module
export default Coin;
