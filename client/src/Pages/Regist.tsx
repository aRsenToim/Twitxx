import { useState, type FC } from "react"
import { createProfile, RegistBlock } from "../entities/Auth"
import { useAppDispatch } from "../App/AppStore"
import { Navigate } from "react-router-dom"



const Regist: FC = () => {
    const dispatch = useAppDispatch()
    const token = localStorage.getItem('token')
    const [isRedirect, setIsRedirect] = useState<boolean>(false)
    if (isRedirect || token) return <Navigate to={`/`} />


    return <RegistBlock regist={(email: string, name: string, password: string) => {
        dispatch(createProfile(email, name, password))
        setIsRedirect(true)
    }} />
}


export default Regist