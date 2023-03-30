// Importing React library
import React from 'react';

// Defining the Coin component and adding props
function Coin({ name, icon, price, symbol}) {
    const formattedPrice = price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    return (
      <div className='coin'>
        <h1> Name: {name}</h1>
        <img src={icon} alt='' />
        <h3> Price:  $ {formattedPrice}</h3>
        <h3> Symbol:  {symbol}</h3>
      </div>
    );
  }

// Exporting the Coin component as the default export of the module
export default Coin;
