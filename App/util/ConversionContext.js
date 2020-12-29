import React, { createContext, useState } from 'react';

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, setBaseCurrency] = useState('EUR');
    const [quoteCurrency, setQuoteCurrency] = useState('USD');

    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency);
        setQuoteCurrency(baseCurrency);
    };

    const contextValue = {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        setBaseCurrency,
        setQuoteCurrency
    };

    return (
        <ConversionContext.Provider value={contextValue}>
            { children }
        </ConversionContext.Provider>
    )
}
// ConversionContext.Consumer