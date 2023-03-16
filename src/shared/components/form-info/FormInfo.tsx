import { ReactNode } from 'react'

import s from './FormInfo.module.scss'

type FormInfoProps = {
  children: ReactNode
}
export const FormInfo = ({ children }: FormInfoProps) => {
  return <span className={s['form-description']}>{children}</span>
}
