import { ReactNode } from 'react'

import s from './FormField.module.scss'

type FormFieldProps = {
  fieldName: string
  children: ReactNode
}

export const FormField = ({ fieldName, children }: FormFieldProps) => {
  return (
    <div className={s['form-field']}>
      <span className={s['form-field__label']}>{fieldName}: </span>
      <div className={s['form-field__info']}>{children}</div>
    </div>
  )
}
