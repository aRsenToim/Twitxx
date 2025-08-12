
import type { FC } from 'react'
import s from './input.module.scss'


interface IProps {
    value: string
    onChange: (value: string) => void
    placeholder: string
    type?: string
    label?: string
}

const Input: FC<IProps> = ({ value, onChange, placeholder, type, label }) => {
    return <form className={s.Input}>
        {label && <label className={s.Input__label}>{label}</label>}
        <input className={s.Input__input} type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.currentTarget.value)} />
    </form>

}


export default Input