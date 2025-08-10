
import type { FC } from 'react'
import s from './input.module.scss'


interface IProps {
    value: string
    onChange: (value: string) => void
    placeholder: string
    type?: string
}

const Input: FC<IProps> = ({ value, onChange, placeholder, type }) => {
    return <input className={s.input} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.currentTarget.value)} />

}


export default Input