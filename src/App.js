// Importing App.css file for styling
import './App.css';

// Importing the useEffect and useState hooks from the React library
import { useEffect, useState } from 'react';

// Importing Axios library for making HTTP requests
import Axios from 'axios';

// Importing the Coin component
import Coin from './components/Coin';

// Defining the App component
function App() {

  // Declaring state variables for list of coins and search word
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  // Defining the useEffect hook to fetch the list of coins from the API when the component mounts
  useEffect(() => {
    Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
      (response) => {
        setListOfCoins(response.data.coins);
      });
  }, []);

  // Filtering the list of coins based on the search word
  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  // Rendering the App component
  return (
    <div className="App">

      {/* Container for Header*/}
      <div className='Header'>
        <h2>Search: </h2>
        <input type="text" placeholder='type your token...' onChange={(event) => {setSearchWord(event.target.value);}}>
        </input>
      </div>
      
      {/* Container for displaying crypto list*/}
      <div className='Display'>
        {/* Mapping over the filtered coins to display each coin */}
        {filteredCoins.map((coin) => {
          return (
            <Coin 
              name={coin.name} 
              icon={coin.icon} 
              price={coin.price} 
              symbol={coin.symbol}
            />
          );
        })
        }
      </div>
    </div>
  );
}

// Exporting the App component as the default export of the module
export default App;
