const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") // corrigido

async function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)

    if (isNaN(inputCurrencyValue)) {
        alert("Digite um valor válido em reais!")
        return
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")

    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BOB-BRL")
    const data = await response.json()

    const dolarToday = data.USDBRL.high
    const bolivianoToday = data.BOBBRL?.high
    const euroToday = data.EURBRL.high
    const bitCoinToday = data.BTCBRL.high
    const librasToday = data.GBPBRL.high

    let convertedValue = 0

    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(convertedValue)
    }

    if (currencySelect.value === "boliviano" && bolivianoToday) {
        convertedValue = inputCurrencyValue / bolivianoToday
        currencyValue.innerHTML = new Intl.NumberFormat("es-BO", { style: "currency", currency: "BOB" }).format(convertedValue)
    }

    if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(convertedValue)
    }

    if (currencySelect.value === "bitcoin") {
        convertedValue = inputCurrencyValue / bitCoinToday
        currencyValue.innerHTML = `${convertedValue.toFixed(6)} BTC`
    }

    if (currencySelect.value === "libras") {
        convertedValue = inputCurrencyValue / librasToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(convertedValue)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputCurrencyValue)
}
