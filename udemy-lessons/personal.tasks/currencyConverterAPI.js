let getRates = async () => {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();
    const rates = await data.rates;
    return rates;
  } catch (error) {
    console.error("Ошибка при получении данных: ", error);
  }
};

let getUSD = async () => {
  try {
    let rates = await getRates();
    let usd = rates["USD"];
    // return usd;
    console.log(usd);
  } catch (error) {
    console.error("Ошибка ответа: ", error);
  }
};

let getRUB = async () => {
  try {
    let rates = await getRates();
    let rub = rates["RUB"];
    // return rub;
    console.log(rub);
  } catch (error) {
    console.error("Ошибка ответа: ", error);
  }
};

let usd = getUSD();
let rub = getRUB();
