import { useState, type FC } from 'react'
import s from './EditProfile.module.scss'
import Input from '../../../../widgets/ui/input/input'
import { useAppDispatch, useAppSelector } from '../../../../App/AppStore'
import { setWindowEditProfile } from '../../model/WindowSlice'
import Button from '../../../../widgets/ui/button/button'
import ImageEdit from '../ImageEdit/ImageEdit'
import { AuthApi, changeIdNameFetch, changePicture, changeProfile } from '../../../Auth'
import Error from '../../../../widgets/popup/error/error'

const EditProfile: FC = () => {
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const [name, setName] = useState<string>(profile?.name ?? "Xuisos")
    const [IdName, setIdName] = useState<string>("")

    const [avatar, setAvatar] = useState<File>()
    const [background, setBackground] = useState<File>()

    const [profession, setProfession] = useState<string>(profile?.profession ?? "Xuisos")
    const [Location, setLocation] = useState<string>(profile?.Location ?? "Xuisos")
    const dispatch = useAppDispatch()
    const [statusIdName, setStatusIdName] = useState<boolean>(true)

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
                <Input label='Change your location' value={Location} onChange={(v: string) => setLocation(v)} placeholder='Your location' />
                <Input label='Change your profession' value={profession} onChange={(v: string) => setProfession(v)} placeholder='Your profession' />

                <Button title='Change' onclick={() => {
                    if (name != profile?.name || Location != profile.Location || profession != profile.profession) {
                        dispatch(changeProfile(profile?.id ?? "", name, profile?.desc, Location, profession))
                    }
                    if (avatar || background) {
                        dispatch(changePicture(profile?.id ?? "", avatar, background))
                    }
                    dispatch(setWindowEditProfile())
                }} />
            </div>
            <div className={s.EditProfile__content}>
                <Input label='Change id name' value={IdName}
                    onKeyDown={() => {
                        AuthApi.getIdNameStatus(IdName).then((data) => {
                            setStatusIdName(data.status)
                        })
                    }}
                    onChange={(v: string) => {
                        setIdName(v)
                    }} placeholder='Your id name' />
                {!statusIdName ? <Error content='Id name is taken' /> : undefined}
                <Button title='Change id name' onclick={() => {
                    dispatch(changeIdNameFetch(IdName, profile?.id ?? ""))
                    dispatch(setWindowEditProfile())
                }} isDisable={!statusIdName} />
            </div>
        </div>
    </>
}

export default EditProfile