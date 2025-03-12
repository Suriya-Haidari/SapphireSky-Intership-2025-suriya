// Currency Converter
// Take a currency code ("USD", "EUR", "INR", "JPY").
// Use switch to print the conversion rate relative to a base currency (e.g., USD).

function currencyConverter(currencyCode) {
    let conversionRate;

    switch (currencyCode.toUpperCase()) {
        case "USD":
            conversionRate = 1;
            break;
        case "EUR":
            conversionRate = 0.85;
            break;
        case "INR": 
            conversionRate = 74.28;
            break;
        case "JPY":
            conversionRate = 109.75;
            break;
        default:
            conversionRate = "Currency not supported";
            break;
    }

    return conversionRate;
}
console.log(currencyConverter("AFG"));

// Test function
function testCurrencyConverter() {
    console.log(currencyConverter("USD") === 1 ? "PASS ✅" : "FAIL ❌");
    console.log(currencyConverter("EUR") === 0.85 ? "PASS ✅" : "FAIL ❌");
    console.log(currencyConverter("INR") === 74.28 ? "PASS ✅" : "FAIL ❌");
    console.log(currencyConverter("JPY") === 109.75 ? "PASS ✅" : "FAIL ❌");
    console.log(currencyConverter("GBP") === "Currency not supported" ? "PASS ✅" : "FAIL ❌");
}

testCurrencyConverter();
