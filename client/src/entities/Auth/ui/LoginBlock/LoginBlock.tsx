import { useState, type FC } from 'react'
import s from './LoginBlock.module.scss'
import { NavLink } from 'react-router-dom'
import Input from '../../../../widgets/ui/input/input'

interface IProps {
    login: (email: string, password: string) => void
}

const LoginBlock: FC<IProps> = ({ login }) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    return <div className={s.LoginBlock}>
        <img className={s.LoginBlock__logo} src="/images/logo.svg" alt="" />
        <h1 className={s.LoginBlock__title}>Log in</h1>
        <div className={s.LoginBlock__form}>
            <Input value={email} onChange={(v: string) => setEmail(v)} placeholder='Email' />
            <Input type='password' value={password} onChange={(v: string) => setPassword(v)} placeholder='Password' />
        </div>
        <button className={s.LoginBlock__btn} onClick={() => login(email, password)}>Log in</button>
        <NavLink className={s.LoginBlock__link} to={'/regist'}>Regist</NavLink>
    </div>
}


export default LoginBlock