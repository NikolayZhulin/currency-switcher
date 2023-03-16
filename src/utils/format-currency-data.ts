import { round } from './round'

export const formatPrice = (value: number, selectedCurrency: string): string => {
  const currencySymbols = selectedCurrency === 'usd' ? '$' : selectedCurrency.toUpperCase() + ' '

  switch (true) {
    case value < 1 && value >= 0: {
      const fixedValue = value.toFixed(20)
      const ind = fixedValue.split('').findIndex(el => el !== '0' && el !== '.')

      return currencySymbols + fixedValue.slice(0, ind + 1)
    }
    case value < 1000 && value >= 1:
      return currencySymbols + round(value, 2).toFixed(2).toString()
    case value >= 1000 && value < 1000000:
      return currencySymbols + round(value, 0).toString()
    default:
      return 'error'
  }
}
