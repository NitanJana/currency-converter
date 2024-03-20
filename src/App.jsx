import { useState, useCallback } from 'react';
import { Footer, InputBox } from './components';
import { useCurrencyInfo } from './hooks';

const App = () => {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');

  const handleFromAmountChange = useCallback((fromAmount) => {
    setFromAmount(fromAmount);
  }, []);

  const handleFromCurrencyChange = useCallback((fromCurrency) => {
    setFromCurrency(fromCurrency);
  }, []);

  const handleToAmountChange = useCallback((toAmount) => {
    setToAmount(toAmount);
  }, []);

  const handleToCurrencyChange = useCallback((toCurrency) => {
    setToCurrency(toCurrency);
  }, []);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    setToAmount((fromAmount * currencyInfo[toCurrency]).toFixed(2));
  };

  const swap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div
        className="h-full w-2/5 bg-cover bg-no-repeat blur-sm"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      ></div>

      <div className="grid h-full w-full grid-rows-[4fr,1fr] items-center justify-items-center">
        <div className="border-gray-60 mx-auto w-full max-w-md rounded-lg border bg-white/30 p-5 backdrop-blur-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="mb-1 w-full">
              <InputBox
                label="From"
                value={fromAmount}
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onValueChange={handleFromAmountChange}
                onCurrencyChange={handleFromCurrencyChange}
                ariaLabel="Amount to convert from"
              />
            </div>

            <div className="relative h-0.5 w-full">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-blue-600 px-2 py-0.5 text-white"
              >
                swap
              </button>
            </div>

            <div className="mb-4 mt-1 w-full">
              <InputBox
                label="To"
                value={toAmount}
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onValueChange={handleToAmountChange}
                onCurrencyChange={handleToCurrencyChange}
                ariaLabel="Amount to convert to"
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
