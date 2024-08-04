import { useState } from 'react';
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);

  const currInfo = useCurrencyInfo(from);
  const options = Object.keys(currInfo);

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });
    setAmt((prevAmt) => {
      setConvertedAmt(prevAmt);
      return convertedAmt;
    });
  };

  const convert = () => {
    setConvertedAmt(amt * currInfo[to]);
  };

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-brown-500'>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-700 rounded-lg p-5'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='w-full mb-4'>
              <InputBox
                label="From"
                amt={amt}
                currOpts={options}
                onAmtChange={(amount) => setAmt(amount)}
                onCurrChange={(currency) => setFrom(currency)}
                selectCurr={from}
              />
            </div>
            <div className='relative w-full mb-4'>
              <button
                type='button'
                className='absolute left-1/2 transform -translate-x-1/2 border-2 border-white rounded-md text-white bg-gray-500 px-2 py-1'
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className='w-full mb-4'>
              <InputBox
                label="To"
                amt={convertedAmt}
                currOpts={options}
                onAmtChange={() => {}}
                onCurrChange={(currency) => setTo(currency)}
                selectCurr={to}
              />
            </div>
            <div className='w-full mb-4'>
              <button
                type='button'
                className='w-full bg-blue-500 text-white py-2 rounded-md'
                onClick={convert}
              >
                Convert {from} to {to}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
