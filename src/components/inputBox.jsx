import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  let amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          Disable={amountDisable}
          value={amount}
          onChange={(evt) => {
            {
              onAmountChange && onAmountChange(Number(evt.target.value));
            }
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          Disable={currencyDisable}
          onChange={(evt) => {
            onCurrencyChange && onCurrencyChange(evt.target.value);
          }}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
// useId hook gives a unique id everytime because of this hook we can improve performance of the app
// Id hook koo kabii list kee items koo unique id daynay k leay  use nahi karnaa chahyee faizan
