import { FieldValueSpan } from '../form-value-span'

import s from './CounterContainer.module.scss'

type CurrencyCounterProps = {
  setItemCount: (count: number) => void
  itemCount: number
}

export const CurrencyCounter = ({ setItemCount, itemCount }: CurrencyCounterProps) => {
  const increaseCount = () => {
    setItemCount(itemCount + 1)
  }
  const decreaseCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1)
    }
  }

  return (
    <div className={s['counter']}>
      <button
        className={`${s['counter__button']} ${s['counter__button_minus']}`}
        onClick={decreaseCount}
      ></button>
      <div className={s['counter__count']}>
        <FieldValueSpan value={itemCount} />
      </div>
      <button
        className={`${s['counter__button']} ${s['counter__button_plus']}`}
        onClick={increaseCount}
      ></button>
    </div>
  )
}
