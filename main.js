const converterForm = document.getElementById("converterForm");
// Add event listener for form submission
converterForm.addEventListener("submit", (e) => {
  // Prevent default form submission behavior
  e.preventDefault();
  // Get values of fromCurrency, toCurrency, and amount input fields
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const amount = document.getElementById("amount").value;
  // Set up options for fetch call, including required headers
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0fb530922fmshcf984fa12dde996p1214cbjsn4b899d45fb48",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };
  // Make fetch call to API with fromCurrency, toCurrency, and amount as query parameters
  fetch(
    `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`,
    options
  )
    // Parse response as JSON
    .then((response) => response.json())
    .then((response) => {
      // Log response for debugging purposes
      console.log(response);
      // Get oldAmount element
      const oldAmountEl = document.getElementById("oldAmount");
      // Update oldAmount element with old_currency and old_amount from response
      oldAmountEl.innerText = `${response.old_currency} ${response.old_amount}`;
      //Get newAmount element
      const newAmountEl = document.getElementById("newAmount");
      //Update newAmount element with new_currency and new_amount from response
      newAmountEl.innerText = `${response.new_currency} ${response.new_amount}`;
    })
    //If there is an error with the fetch request or parsing the response, it is caught in the console.
    .catch((err) => console.error(err));
});
//alerts footer items
const services = () => {
  alert(
    "convert pairs of currencies. Choose from over 100 different currencies."
  );
};
const about = () => {
  alert(
    "We convert currency depending on the trend within the previous hour of the currency value in the world"
  );
};
const donate = () => {
  alert("M-pesa:0792374057");
};
