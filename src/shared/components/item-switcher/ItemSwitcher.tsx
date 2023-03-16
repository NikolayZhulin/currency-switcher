import s from './ItemSwitcher.module.scss'

type ItemSwitcherProps<T> = {
  items: { label: string; value: T }[]
  onSelectedItemChange: (value: T) => void
  selectedItem: T
}

export const ItemSwitcher = <T,>({
  items,
  onSelectedItemChange,
  selectedItem,
}: ItemSwitcherProps<T>) => {
  return (
    <div className={s['switcher-container']}>
      {items.map(item => (
        <button
          key={item.label}
          className={`${s['switcher-container__button']} ${
            selectedItem === item.value ? s['switcher-container__button_active'] : ''
          }`}
          onClick={() => onSelectedItemChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
