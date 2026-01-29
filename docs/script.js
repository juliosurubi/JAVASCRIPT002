// Seleciona o botão de conversão
const convertButton = document.querySelector(".convert-button")

// Seleciona o campo <select> com as opções de moedas
const currencySelect = document.querySelector(".currency-select")

// Função assíncrona responsável por converter os valores
async function convertValues() {
    // Captura o valor digitado no input e transforma em número
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValue = document.querySelector(".currency-value") // valor convertido

    // Faz a requisição na API para obter as cotações
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
    const data = await response.json()

    // Guarda os valores atuais das moedas
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitCoinToday = data.BTCBRL.high
    const librasToday = data.GBPBRL.high

    let convertedValue = 0 // resultado da conversão

    // Conversão para Dólar
    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    // Conversão para Euro
    if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    // Conversão para Bitcoin
    if (currencySelect.value === "bitcoin") {
        convertedValue = inputCurrencyValue / bitCoinToday
        currencyValue.innerHTML = `${convertedValue.toFixed(6)} BTC`
    }

    // Conversão para Libras Esterlinas
    if (currencySelect.value === "libras") {
        convertedValue = inputCurrencyValue / librasToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)
    }

    // Mostra o valor original em Real
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    console.log(convertedValue) // debug no console
}

// Função para trocar nome e imagem da moeda
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/logoUSA.png"
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/logoEURO.png"
    }

    if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/logoBITCOIN.png"
    }

    if (currencySelect.value === "libras") {
        currencyName.innerHTML = "Libras Esterlinas"
        currencyImg.src = "./img/logoLIBRA.png"
    }

    // Atualiza a conversão automaticamente
    convertValues()
}

// Eventos
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)
