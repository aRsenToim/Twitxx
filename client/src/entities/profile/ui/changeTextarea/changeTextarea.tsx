import type { FC } from 'react'
import s from './changeTextarea.module.scss'


interface IProps {
    label: string
    placeholder: string
    value: string
    setValue: (v: string) => void 
}


const ChangeTextarea: FC<IProps> = ({label, placeholder, value, setValue}) => {
    return <form className={s.ChangeTextarea}>
        <label className={s.ChangeTextarea__label}>{label}</label>
        <textarea className={s.ChangeTextarea__textarea} value={value} onChange={(e) => setValue(e.currentTarget.value)} placeholder={placeholder} />
    </form>
}

export default ChangeTextarea