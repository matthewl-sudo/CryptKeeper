import { CurrencyBitcoin } from '@mui/icons-material'
import React, { createContext, useContext, useState } from 'react'

const CurrencyCTX = createContext()

const CurrencyContext = ({ children}) => {

    const [currency, setCurrency] = useState("CAD");
    const [symbol, SetSymbol] = useState("CAD");
    useEffect(() => {
    switch (currency !== "CAD") {
        case "USD":
            setCurrency("USD")
            break;
        case "JPY":
            setCurrency("JPY")
            break;
        case "USD":
            setCurrency("USD")
            break;
        case "USD":
            setCurrency("USD")
            break;
                        
        default:
            break;
    }
    }, [currency])

  return (
    <CurrencyCTX.Provider>{children}</CurrencyCTX.Provider>
  )
}

export default CurrencyContext;

export const CurrencyState = () =>{
    return useContext(CurrencyCTX)
}