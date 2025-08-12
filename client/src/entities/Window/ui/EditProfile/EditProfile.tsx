import { useState, type FC } from 'react'
import s from './EditProfile.module.scss'
import Input from '../../../../widgets/ui/input/input'
import { useAppDispatch, useAppSelector } from '../../../../App/AppStore'
import { setWindowEditProfile } from '../../model/WindowSlice'
import Button from '../../../../widgets/ui/button/button'
import ImageEdit from '../ImageEdit/ImageEdit'
import { changePicture, changeProfile } from '../../../Auth'


const EditProfile: FC = () => {
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const [name, setName] = useState<string>(profile?.name ?? "Safar")
    const [avatar, setAvatar] = useState<File>()
    const [background, setBackground] = useState<File>()
    const dispatch = useAppDispatch()

    return <>
        <div className={s.Shadow}>

        </div>
        <div className={s.EditProfile}>
            <div className={s.EditProfile__header}>
                <h1 className={s.EditProfile__title}>Edit profile</h1>
                <img onClick={() => { dispatch(setWindowEditProfile()) }} className={s.EditProfile__close} src='/images/icons/close.svg'></img>
            </div>
            <div className={s.EditProfile__content}>
                <ImageEdit title='Change Background' onchange={(v: File) => setBackground(v)} />
                <ImageEdit title='Change Avatar' onchange={(v: File) => setAvatar(v)} />
                <Input label='Change your name' value={name} onChange={(v: string) => setName(v)} placeholder='Your name' />
                <Button title='Change' onclick={() => {
                    if (name != profile?.name) {
                        dispatch(changeProfile(profile?.id ?? "", name))
                    }
                    if (avatar || background) {
                        dispatch(changePicture(profile?.id ?? "", avatar, background))
                    }
                    dispatch(setWindowEditProfile())
                }} />
            </div>
        </div>
    </>
}

export default EditProfile