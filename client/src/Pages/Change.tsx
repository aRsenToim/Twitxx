import { useState, type FC } from "react"
import { ChangeInput, ChangeTextarea } from "../entities/profile"
import Button from "../widgets/ui/button/button"
import { useAppDispatch, useAppSelector } from "../App/AppStore"
import { changePicture, changeProfile } from "../entities/Auth"




const Change: FC = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(state => state.AuthSlice.profile)
    const [userName, setUserName] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [avatar, setAvatar] = useState<File>()
    const [background, setBackground] = useState<File>()

    return <div>
        <h1>Edit profile: </h1>
        <ChangeInput value={userName} setValue={(v) => setUserName(v)} placeholder="Change name" label="Name" />
        <ChangeTextarea value={desc} setValue={(v) => setDesc(v)} placeholder="Change desc" label="Desc" />
        <Button onclick={() => {
            dispatch(changeProfile(profile?.id ?? "", userName, desc))
        }} title="Change" />
        <input type="file" onChange={(e) => {
            setAvatar(e.target.files[0])
        }} />
        <input type="file" onChange={(e) => {
            setBackground(e.target.files[0])
        }} />
        <Button onclick={() => {
            dispatch(changePicture(profile?.id ?? "", avatar, background))
        }} title="Change Avatar" />
    </div>
}


export default Change