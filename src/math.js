const caculateTip = (total, tipPercent=.25) => total + (total * tipPercent)

const farenheitToCelsius = temp => (temp - 32) / 1.8

const celsiusToFahrenheit = temp => temp * 1.8 + 32

module.exports = {
    caculateTip,
    farenheitToCelsius,
    celsiusToFahrenheit
}