import { useEffect, useState } from "react";
function useCurrencyInfo(currency) {
  let [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setdata(res[currency]));
  }, [currency]);
  console.log(data);
  return data ;
}

export default useCurrencyInfo ; 

// We can create our own hooks called custom hook
// hook is nothing is just a  norml function that return varible any function in an array format
