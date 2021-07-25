const { caculateTip, farenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = caculateTip(10, .3)
    expect(total).toBe(13)
})

test('Should calculate total with default', () => {
    const total = caculateTip(10)
    expect(total).toBe(12.5)
})

test('farenheitToCelsius', () => {
    const result = farenheitToCelsius(32)
    expect(result).toBe(0)
})

test('celsiusToFahrenheit', () => {
    const result = celsiusToFahrenheit(0)
    expect(result).toBe(32)
})