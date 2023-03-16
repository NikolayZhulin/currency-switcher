import { ReactNode } from 'react'

import s from './FormField.module.scss'

type FormFieldProps = {
  title: string
  children: ReactNode
}

export const FormField = ({ title, children }: FormFieldProps) => {
  return (
    <div className={s['form-field']}>
      <span className={s['form-field__label']}>{title}: </span>
      <div className={s['form-field__info']}>{children}</div>
    </div>
  )
}
