import type { FC } from 'react'
import s from './profileHeader.module.scss'

interface IProps {
    id: string
    avatar: string
    name: string
    desc: string
    background: string
}

const ProfileHeader: FC<IProps> = ({id, avatar, name, desc, background}) => {
    return <div className={s.ProfileHeader}>
        <img src={'http://localhost:3003/' + background} alt="" className={s.ProfileHeader__background} />
        <img src={'http://localhost:3003/' + avatar} alt="" className={s.ProfileHeader__avatar} />
        <div className={s.ProfileHeader__info}>
            <h1 className={s.ProfileHeader__name}>{name}</h1>
            <p className={s.ProfileHeader__desc}>{desc}</p>
        </div>
    </div>
}


export default ProfileHeader