import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const [value, setValue] = useState()
  const onChange = (e) => setValue(e.target.value)
  const onChangeSelect = (e) => setSelectValue(e.target.value)
  const [selectValue,setSelectValue] = useState()

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then(json => {
      setCoins(json);
      setLoading(false)})
  }, []);
  console.log(selectValue)

  return (
      <>
        <h1>The Coins! {loading ? '' : `(${coins.length})`} </h1>
        <form>
          <input value = {value}
                 onChange = {onChange}
                 placeholder= 'insert coin ($)'
                 required
                 maxLength="20"
                 type="number"/>
          <button> exchange </button>
          {value ? <span> exchange : {(value / selectValue).toFixed(2)} </span> : <span> 없어 </span>}

        </form>
        {loading && selectValue ? <strong>Loading...</strong> :
            <select id="coin"
                    value={selectValue}
                    onChange={onChangeSelect}>
              {coins.map(coin => <option value={coin.quotes.USD.price}>{coin.id} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}
            </select>}

      </>
  )
}

export default App
