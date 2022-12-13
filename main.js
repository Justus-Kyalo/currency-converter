const converterForm = document.getElementById("converterForm");

converterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0fb530922fmshcf984fa12dde996p1214cbjsn4b899d45fb48",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch(
    `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        const oldAmountEl = document.getElementById("oldAmount");
        oldAmountEl.innerText= `${response.old_currency} ${response.old_amount}`;
        const newAmountEl = document.getElementById("newAmount");
        newAmountEl.innerText = `${response.new_currency} ${response.new_amount}`;
    })
    .catch((err) => console.error(err));
});
