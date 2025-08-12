import { useState, type FC } from 'react'
import s from './profileStatus.module.scss'

interface IProps {
    content: string
    setDesc: (desc: string) => void
}

const ProfileStatus: FC<IProps> = ({ content, setDesc }) => {
    const [isSet, setIsSet] = useState<boolean>()
    const [value, setValue] = useState<string>(content)
    if (isSet) {
        return <input type="text" value={value} onChange={(e) => setValue(e.currentTarget.value)} onBlur={() => {
            setIsSet(false)
            if (value != content) setDesc(value)
        }} />
    }
    return <p onDoubleClick={() => setIsSet(true)} className={s.ProfileStatus}>{content}</p>
}


export default ProfileStatus