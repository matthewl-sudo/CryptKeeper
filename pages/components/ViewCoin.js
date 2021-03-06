import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';
import {Select, MenuItem, Button, Box} from '@mui/material';
import CoinMarkets from './CoinMarkets';
import { useTheme } from '@mui/material/styles';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const ViewCoin = () =>{
    const theme = useTheme();
    const [zeroLine, setZeroLine] = useState([]);
    const [timeLabels, setTimeLabels] = useState([]);
    const [prices, setPrices] = useState([]);
    const [coin, setCoin] = useState("polkadot");
    const [currency, setCurrency] = useState("usd")
    useEffect(() => {
      fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1646100049&to=1654048849`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.prices)
        const month = {1:"Jan", 2:"Feb", 3:"Mar", 4:"Apr", 5:"May", 6:"Jun", 7:"Jul", 8:"Aug", 9:"Sep", 10:"Oct", 11:"Nov", 12:"Dec"};

        const zL = [];
        const tL = [];
        const p = [];
        for(var i = 0; i <= result.prices.length - 1; i++){
            zL.push(result.prices[0][1]);
            tL.push(month[parseInt(new Date(result.prices[i][0]).toLocaleString('en-GB',{hour12:false}).slice(3,5))]+' '+new Date(result.prices[i][0]).toLocaleString('en-GB',{hour12:false}).slice(0,2));
            p.push(result.prices[i][1]);
        }
        setZeroLine(zL);
        setTimeLabels(tL);
        setPrices(p);
      });
    }, [coin, currency]);
    // console.log(currency);

    const chartData = {
      labels: timeLabels,
      datasets: [
        {
          label: 'Price in ' + currency.toUpperCase() + '$',
          fill: false,
          lineTension: 0,
          backgroundColor: theme.palette.graph.main,
          borderColor: theme.palette.graph.main,
          borderWidth: 1.5,
          data: prices
        },
        {
          //Change this to create points for every time/date
          label: coin.charAt(0).toUpperCase() + coin.slice(1),
          fill: false,
          borderDash: [3,1],
          data: zeroLine,
          
        }
      ]
    }

    return(<>
      <Box>
        <CoinMarkets setCoin={setCoin}/>
      </Box>
      <Box sx={{pt: 3}}>
        <label htmlFor="currency">Change currency to: </label>
        <Select size="small" name="currency" defaultValue={"CAD"} id="currency" onChange={(e)=>setCurrency(e.target.value)}>
          <MenuItem value={"CAD"}>Canadian Dollar</MenuItem>
          <MenuItem value={"USD"}>US Dollar</MenuItem>         
          <MenuItem value={"GBP"}>British Pound</MenuItem>
          <MenuItem value={"INR"}>Indian Rupee</MenuItem>
          <MenuItem value={"CNY"}>Chinese Yuan</MenuItem>
          <MenuItem value={"JPY"}>Japanese Yen</MenuItem>
        </Select>
        <Line style={{height:'100'}}
            data={chartData}
            options={{
              elements:{
                point: {
                  radius: 0
                }
              },
              title:{
                display:true,
                text: coin.charAt(0).toUpperCase() + coin.slice(1),
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
            />
      </Box>
    </>  
    )
}

export default ViewCoin;

// import React, {useState, useEffect} from 'react';
// import {Line} from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';
// import {Select, MenuItem} from '@mui/material';
// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);


// const ViewCoin = () =>{
//     const [zeroLine, setZeroLine] = useState([]);
//     const [timeLabels, setTimeLabels] = useState([]);
//     const [prices, setPrices] = useState([]);
//     const [coin, setCoin] = useState("polkadot");
//     const [currency, setCurrency] = useState("usd")
//     useEffect(() => {
//       fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${currency}&from=1646100049&to=1654048849`)
//       .then((res) => res.json())
//       .then((result) => {
//         // console.log(result.prices)
//         const month = {1:"Jan", 2:"Feb", 3:"Mar", 4:"Apr", 5:"May", 6:"Jun", 7:"Jul", 8:"Aug", 9:"Sep", 10:"Oct", 11:"Nov", 12:"Dec"};

//         const zL = [];
//         const tL = [];
//         const p = [];
//         for(var i = 0; i <= result.prices.length - 1; i++){
//             zL.push(result.prices[0][1]);
//             tL.push(month[parseInt(new Date(result.prices[i][0]).toLocaleString('en-GB',{hour12:false}).slice(3,5))]+' '+new Date(result.prices[i][0]).toLocaleString('en-GB',{hour12:false}).slice(0,2));
//             p.push(result.prices[i][1]);
//         }
//         setZeroLine(zL);
//         setTimeLabels(tL);
//         setPrices(p);
//       });
//     }, [coin, currency]);
//     // console.log(currency);

//     const chartData = {
//       labels: timeLabels,
//       datasets: [
//         {
//           label: 'Price in '+currency.toUpperCase()+'$',
//           fill: false,
//           lineTension: 0,
//           backgroundColor: 'rgba(75,192,192,1)',
//           borderColor: 'rgba(0,0,0,1)',
//           borderWidth: 1,
//           data: prices
//         },
//         {
//           //Change this to create points for every time/date
//           label: coin.charAt(0).toUpperCase() + coin.slice(1),
//           fill: false,
//           borderDash: [1,3],
//           data: zeroLine,
          
//         }
//       ]
//     }

//     return(<>
//       <div>
//         <button onClick={()=>setCoin('bitcoin')}>Bitcoin</button>
//         <button onClick={()=>setCoin('dogecoin')}>Dogecoin</button>
//         <button onClick={()=>setCoin('ethereum')}>Ethereum</button>
//         <button onClick={()=>setCoin('polkadot')}>Polkadot</button>
//       </div>
//       <div>
//         <label htmlFor="currency">Change $:</label>
//         <Select name="currency" id="currency" onChange={(e)=>setCurrency(e.target.value)}>
//           <MenuItem value={"USD"}>US Dollar</MenuItem>         
//           <MenuItem value={"CAD"}>Canadian Dollar</MenuItem>
//           <MenuItem value={"GBP"}>British Pound</MenuItem>
//           <MenuItem value={"INR"}>Indian Rupee</MenuItem>
//           <MenuItem value={"CNY"}>Chinese Yuan</MenuItem>
//           <MenuItem value={"JPY"}>Japanese Yen</MenuItem>
//         </Select>
//       </div>

//       <Line style={{height:'100'}}
//           data={chartData}
//           options={{
//             elements:{
//                 point: {
//                     radius: 0
//                 }
//             },
//             title:{
//               display:true,
//               text:'BTC Price',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//     </>  
//     )
// }

// export default ViewCoin;