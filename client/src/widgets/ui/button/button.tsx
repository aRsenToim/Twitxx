import type { FC } from 'react'
import s from './button.module.scss'

interface IProps {
    title: string
    onclick: () => void
}

const Button: FC<IProps> = ({title, onclick}) => {
    return <button onClick={onclick} className={s.Button}>{title}</button>
}

export default Button