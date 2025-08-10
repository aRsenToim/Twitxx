import { useState, type FC } from 'react'
import s from './RegistBlock.module.scss'
import { NavLink } from 'react-router-dom'
import Input from '../../../../widgets/ui/input/input'

interface IProps {
    regist: (email: string, name: string, password: string) => void
}

const RegistBlock: FC<IProps> = ({ regist }) => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return <div className={s.RegistBlock}>
        <img className={s.RegistBlock__logo} src="/images/logo.svg" alt="" />
        <h1 className={s.RegistBlock__title}>Create profile in twitxx</h1>
        <div className={s.RegistBlock__form}>
            <Input value={email} onChange={(v: string) => setEmail(v)} placeholder='Email' />
            <Input value={name} onChange={(v: string) => setName(v)} placeholder='Your name' />
            <Input type='password' value={password} onChange={(v: string) => setPassword(v)} placeholder='Password' />
        </div>
        <button className={s.RegistBlock__btn} onClick={() => regist(email, name, password)}>Create</button>
        <NavLink className={s.RegistBlock__link} to={'/login'}>login</NavLink>
    </div>
}


export default RegistBlock