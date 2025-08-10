import type { FC } from 'react'
import s from './profileID.module.scss'


interface IProps {
    id: string
}

const ProfileID: FC<IProps> = ({id}) => {
    return <h1 className={s.ProfileID}>{id}</h1>
}


export default ProfileID