/*
PROCEDIMENTO 2
- Primeiro passo: como queremos que ao clicar no botão converter, automaticamente converta os valores inseridos,
chamamos então o button que tem a class(convert-button)
*/
const convertButton = document.querySelector(".convert-button")

/*
PROCEDIMENTO 1
- Na variável currencySelect é armazenado o que foi chamado do HTML da TAG "select"
*/
const currencySelect = document.querySelector(".currency-Select")

/*
PROCEDIMENTO 1
- Procedimento para fazer a conversão de moedas
*/
function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value)
    /* Foi criada a variável (inputCurrencyValue) onde será armazenado o que está sendo chamado do HTML.
       Do HTML o valor do (input-currency) */

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    /* Aqui eu estou chamando o valor da moeda original (Real) */
    const currencyValue = document.querySelector(".currency-value")
    /* Aqui eu estou chamando o valor da moeda convertida (Dólar, Euro, Bitcoin ou Libras) */

    const dolarToday = 5.2
    const euroToday = 6.2
    const bitCoinToday = 7.2
    const librasToday = 8.2
    /* Nas variáveis acima são guardados os valores atualizados das moedas */

    let convertedValue = 0
    /* Variável que vai receber o resultado da conversão */

    if (currencySelect.value == "dolar") {
        convertedValue = inputCurrencyValue / dolarToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
        /* Aqui mostra o valor convertido em dólar, ex: US$ 192.31 */
    }

    if (currencySelect.value == "euro") {
        convertedValue = inputCurrencyValue / euroToday
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
        /* Aqui mostra o valor convertido em euro, ex: € 161,29 */
    }

    if (currencySelect.value == "bitcoin") {
        convertedValue = inputCurrencyValue / bitCoinToday
        currencyValue.innerHTML = `${convertedValue.toFixed(2)} BTC`
        /* Aqui mostra o valor convertido em Bitcoin */
    }

    if (currencySelect.value == "libras") {
        convertedValue = inputCurrencyValue / librasToday
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue)
        /* Aqui mostra o valor convertido em Libras Esterlinas */
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    /* Este é o modelo de conversão de moeda, nas configurações o valor da moeda a ser convertido é o REAL BRASILEIRO */

    console.log(convertedValue)
    /* Aqui o valor convertido será chamado e logo após exibido no console */
}

/*
PROCEDIMENTO 2
- Procedimento para trocar o nome da moeda e a imagem do país
*/
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    /* Aqui eu estou chamando o elemento que mostra o nome da moeda */
    const currencyImg = document.querySelector(".currency-img")
    /* Aqui eu estou chamando a imagem que representa a moeda */

    if (currencySelect.value == "dolar") { 
        currencyName.innerHTML = "Dólar Americano" 
        currencyImg.src = "./img/logoUSA.png"
    }

    if (currencySelect.value == "euro") { 
        currencyName.innerHTML = "Euro" 
        currencyImg.src = "./img/logoEURO.png"
    }

    if (currencySelect.value == "bitcoin") { 
        currencyName.innerHTML = "Bitcoin" 
        currencyImg.src = "./img/logoBITCOIN.png"
    }

    if (currencySelect.value == "libras") { 
        currencyName.innerHTML = "Libras Esterlinas" 
        currencyImg.src = "./img/logoLIBRA.png"
    }

    convertValues()
}

/*EVENTO: neste evento o botão está na espera ao receber um "CLICK".
Ao receber o click no botão iniciará imediatamente o processo da (FUNCTION convertValues()) */
convertButton.addEventListener("click", convertValues)

/*EVENTO: neste evento o select está na espera ao receber uma mudança de opção.
Ao receber a mudança, iniciará imediatamente o processo da (FUNCTION changeCurrency()) */
currencySelect.addEventListener("change", changeCurrency)
