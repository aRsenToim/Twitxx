import type { FC } from 'react'
import s from './userCard.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps{
    avatar: string
    name: string
    email: string
    id: string
    link: string
}

const UserCard: FC<IProps> = ({avatar, name, email, id, link}) => {
    return <div className={s.UserCard}>
        <img src={`http://localhost:3003/` + avatar} className={s.UserCard__image} alt="" />
        <div className={s.UserCard__info}>
            <NavLink to={link} className={s.UserCard__link}>
                {name}
            </NavLink>
            <p className={s.UserCard__desc}>{email}</p>
        </div>
    </div>
}


export default UserCard