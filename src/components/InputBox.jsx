import React, { useId } from "react";

function InputBox({ label, amt, onAmtChange, onCurrChange, currOpts = [], selectCurr = "usd", amtDis = false, currDis = false, className = "" }) {
  const amtInpId = useId();
  const selectId = useId(); 

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amtInpId}>
          {label}
        </label>
        <input
          id={amtInpId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Enter amount"
          disabled={amtDis}
          value={amt}
          onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <label className="text-black/40 mb-2 w-full" htmlFor={selectId}>
          Currency type
        </label>
        <select
          id={selectId}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurr}
          onChange={(e) => onCurrChange && onCurrChange(e.target.value)}
          disabled={currDis}
        >
          {currOpts.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
