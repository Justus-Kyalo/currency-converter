
# Currency Converter
![Screenshot](APP.png)

This is a simple currency converter that allows you to convert pairs of currencies. Choose from over 100 different currencies. The conversion is based on the trend within the previous hour of the currency value in the world.

# implementation

The code is a simple JavaScript implementation of a currency converter. When the user submits the form, the code gets the values of the fromCurrency, toCurrency, and amount input fields. It then makes a GET request to the currency conversion API using these values as query parameters.

The API response is in JSON format, and it contains the old and new amounts and currencies. The code then updates the corresponding elements on the page with this information, allowing the user to see the result of the conversion.

The code also defines event listeners for the footer links that display alerts with additional information about the converter and how to contact us.

# app navigation

1.Enter the amount of the currency you want to convert in the amount input field.
2.Select the currency you want to convert from in the fromCurrency input field.
3.Select the currency you want to convert to in the toCurrency input field.
4.Submit the form by clicking the Convert button.
5.The old and new amounts will be displayed below the form, along with the corresponding currencies.



# Dependencies

This code uses the Fetch API and requires a RapidAPI key to access the currency conversion API.

# Contact

If you have any questions or suggestions, please contact us at info@currencyconverter.com or donate to 0792374057 -KYALO for development.
