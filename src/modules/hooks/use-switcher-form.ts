import { useState } from 'react'

import { Currency } from '../enums'

const NFT = {
  name: 'Some NFT object',
  prices: {
    [Currency.ETH]: 1200,
    [Currency.USD]: 45,
  },
}

export const useSwitcherForm = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(Currency.USD)
  const [currencyCount, setCurrencyCount] = useState(1)

  const oneNFTPrice = NFT.prices[selectedCurrency]
  const totalPrice = +oneNFTPrice * currencyCount

  const currencies: { label: string; value: Currency }[] = [
    { value: Currency.ETH, label: 'ETH' },
    { value: Currency.USD, label: 'USD' },
  ]

  const changeSelectedCurrency = (currency: Currency) => {
    setSelectedCurrency(currency)
    setCurrencyCount(1)
  }

  return {
    totalPrice,
    changeSelectedCurrency,
    currencies,
    selectedCurrency,
    currencyCount,
    oneNFTPrice,
    setCurrencyCount,
  }
}
