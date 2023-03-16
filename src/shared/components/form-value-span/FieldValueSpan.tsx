import s from './FieldValueSpan.module.scss'

type FieldValueSpanProps = {
  value: string | number
  primary?: boolean
}

export const FieldValueSpan = ({ value, primary }: FieldValueSpanProps) => {
  return (
    <span className={`${s['field-value-span']} ${primary ? s['field-value-span_primary'] : ''}`}>
      {value}
    </span>
  )
}
