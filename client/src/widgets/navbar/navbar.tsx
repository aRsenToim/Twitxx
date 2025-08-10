import type { FC } from 'react'
import s from './navbar.module.scss'
import { NavLink } from 'react-router-dom'


interface IProps {
    isAuth: boolean
}

const Navbar: FC<IProps> = ({ isAuth }) => {
    return <div className={s.Navbar}>
        <img src="/images/logo.svg" className={s.Navbar__logo} alt="" />
        <ul className={s.Navbar__items}>
            <li className={s.Navbar__item}>
                <NavLink to={'/'} className={s.Navbar__link}>
                    <img className={s.Navbar__icon} src="/images/icons/home.svg" alt="" />
                    Home
                </NavLink>
            </li>
            <li className={s.Navbar__item}>
                <NavLink to={'/profile'} className={s.Navbar__link}>
                    <img className={s.Navbar__icon} src="/images/icons/profile.svg" alt="" />
                    Profile
                </NavLink>
            </li>
            <li className={s.Navbar__item}>
                <NavLink to={'/users'} className={s.Navbar__link}>
                    <img className={s.Navbar__icon} src="/images/icons/users.svg" alt="" />
                    Users
                </NavLink>
            </li>
            {isAuth ? <li className={s.Navbar__item}>
                <NavLink to={'/change'} className={s.Navbar__link}>
                    <img className={s.Navbar__icon} src="/images/icons/settings.svg" alt="" />
                    Settings
                </NavLink>
            </li> : undefined}
        </ul>
    </div >
}


export default Navbar