import type { FC } from 'react'
import s from './button.module.scss'

interface IProps {
    title: string
    isDisable?: boolean
    onclick: () => void
}

const Button: FC<IProps> = ({title, onclick, isDisable}) => {
    return <button onClick={onclick} className={isDisable ? s.ButtonDispable : s.Button} disabled={isDisable}>{title}</button>
}

export default Button