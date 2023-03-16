import { CurrencyType } from '../../types'

import s from './ItemSwitcher.module.scss'

type CurrencySwitcherProps = {
  itemList: CurrencyType[]
  setSelectedItem: (currencyName: string) => void
  selectedItem: string
}

export const ItemSwitcher = ({
  itemList,
  setSelectedItem,
  selectedItem,
}: CurrencySwitcherProps) => {
  return (
    <div className={s['switcher-container']}>
      {itemList.map(item => (
        <button
          key={item.name}
          className={
            selectedItem === item.name
              ? `${s['switcher-container__button']} ${s['switcher-container__button_active']}`
              : s['switcher-container__button']
          }
          onClick={() => setSelectedItem(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}
