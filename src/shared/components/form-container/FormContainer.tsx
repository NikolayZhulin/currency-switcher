import { ReactNode } from 'react'

import s from './FormContainer.module.scss'

type FormContainerProps = {
  children: ReactNode
}

export const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className={s['form-wrapper']}>
      <span className={s['form-wrapper__label']}>Currency switcher:</span>
      <div className={s['form-container']}>{children}</div>
    </div>
  )
}
