import type { FC } from 'react'
import s from './changeInput.module.scss'

interface IProps {
    label: string
    placeholder: string
    value: string
    setValue: (v: string) => void 
}

const ChangeInput: FC<IProps> = ({label, placeholder, value, setValue}) => {
    return <form className={s.ChangeInput}>
        <label className={s.ChangeInput__label}>{label}</label>
        <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} className={s.ChangeInput__input} placeholder={placeholder} />
    </form>
}

export default ChangeInput