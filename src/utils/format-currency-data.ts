import { round } from './round'

export const formatPrice = (value: number): string => {
  switch (true) {
    case value < 1 && value >= 0: {
      const fixedValue = value.toFixed(20)
      const ind = fixedValue.split('').findIndex(el => el !== '0' && el !== '.')

      return '$' + fixedValue.slice(0, ind + 3)
    }
    case value < 1000 && value >= 1:
      return '$' + round(value, 2).toFixed(2).toString()
    case value >= 1000 && value < 1000000:
      return '$' + round(value, 0).toString()
    default:
      return 'error'
  }
}
