import type { FC } from 'react'
import s from './profileHeader.module.scss'
import ProfileStatus from '../profileStatus/profileStatus'
import Button from '../../../../widgets/ui/button/button'

interface IProps {
    id: string
    avatar: string
    name: string
    desc: string
    background: string
    isProfile: boolean
    setDesc: (desc: string) => void
    editProfileWindow: () => void
    logout: () => void
}

const ProfileHeader: FC<IProps> = ({ id, avatar, editProfileWindow, logout, isProfile, name, desc, background, setDesc }) => {
    return <div className={s.ProfileHeader}>
        <img src={'http://localhost:3003/' + background} alt="" className={s.ProfileHeader__background} />
        <img src={'http://localhost:3003/' + avatar} alt="" className={s.ProfileHeader__avatar} />
        <div className={s.ProfileHeader__info}>
            <h1 className={s.ProfileHeader__name}>{name}</h1>
            {isProfile ? <ProfileStatus setDesc={(desc: string) => setDesc(desc)} content={desc} /> : <p>{desc}</p>}
        </div>
        {isProfile && <div className={s.ProfileHeader__buttons}>
            <Button title='Edit profile' onclick={editProfileWindow} />
            <Button title='Log out' onclick={logout} />
        </div>}
    </div>
}


export default ProfileHeader