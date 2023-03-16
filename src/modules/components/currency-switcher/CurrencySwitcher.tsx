import {
  CurrencyCounter,
  FormField,
  FormInfo,
  ItemSwitcher,
  FieldValueSpan,
} from '../../../shared/components'
import { FormContainer } from '../../../shared/components/form-container'
import { SubmitButton } from '../../../shared/components/submit-button'
import { formatPrice } from '../../../utils'
import { Currency } from '../../enums'
import { useSwitcherForm } from '../../hooks/use-switcher-form'

import s from './CurrencySwitcherForm.module.scss'

export const CurrencySwitcherForm = () => {
  const {
    currencies,
    changeSelectedCurrency,
    totalPrice,
    selectedCurrency,
    oneNFTPrice,
    currencyCount,
    setCurrencyCount,
  } = useSwitcherForm()

  return (
    <div className={s['currency-switcher']}>
      <FormField fieldName={'Currency'}>
        <ItemSwitcher
          selectedItem={selectedCurrency}
          items={currencies}
          onSelectedItemChange={changeSelectedCurrency}
        />
      </FormField>
      <FormField fieldName={'One NFT price'}>
        <FieldValueSpan value={formatPrice(oneNFTPrice)} />
      </FormField>
      <FormField fieldName={'Quantity'}>
        <CurrencyCounter itemCount={currencyCount} setItemCount={setCurrencyCount} />
      </FormField>
      <span className={s['currency-switcher__separator']}></span>
      <FormField fieldName={'Total price'}>
        <FieldValueSpan value={formatPrice(totalPrice)} primary />
      </FormField>
      <SubmitButton title="mint now" onSubmit={() => {}} />
      <FormInfo>All NFTs will reveal ind will be available for sale after Mint Stage</FormInfo>
    </div>
  )
}
