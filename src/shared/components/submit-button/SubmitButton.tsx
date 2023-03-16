import s from './SubmitButton.module.scss'

type SubmitButtonProps = {
  onSubmit: () => void
  title: string
}

export const SubmitButton = ({ onSubmit, title }: SubmitButtonProps) => {
  return (
    <button className={s['submit-button']} onClick={onSubmit}>
      {title}
    </button>
  )
}
