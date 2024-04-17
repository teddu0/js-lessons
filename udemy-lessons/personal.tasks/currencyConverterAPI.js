async function getRates(currencyName) {
  const response = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await response.json();
  const rates = data.rates;
  return rates[currencyName];
}

let usd = await getRates("USD");
console.log(usd);
