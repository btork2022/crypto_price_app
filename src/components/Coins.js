// Importing React library
import React from 'react';

// Defining the Coin component and adding props
function Coin({ name, icon, price, symbol}) {
    const formattedPrice = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    const chartUrl = `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${name.toLowerCase()}`; // replace with actual URL of chart component
    return (
      <div className='coin'>
        <h1> Name: {name}</h1>
        <a href={chartUrl} target="_blank" rel="noopener noreferrer">
          <img src={icon} alt='' />
        </a>
        <h3> Price:  $ {formattedPrice}</h3>
        <h3> Symbol:  {symbol}</h3>
      </div>
    );
  }

// Exporting the Coin component as the default export of the module
export default Coin;
