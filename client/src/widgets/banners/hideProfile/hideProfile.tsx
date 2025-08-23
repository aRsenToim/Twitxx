import type { FC } from 'react'
import s from './hideProfile.module.scss'


const HideProfile: FC = () => {
    return <div className={s.HideProfile}>
        <img className={s.HideProfile__image} src="/images/icons/hide.svg" alt="" />
        <h1 className={s.HideProfile__title}>Profile hidden</h1>
        <p className={s.HideProfile__desc}>Yesterday I killed a homeless man who shouted in my back that we are not beautiful</ p>
    </div>
}

export default HideProfile