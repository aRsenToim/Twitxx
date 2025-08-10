import { useEffect, useState, type FC } from "react"
import { login, LoginBlock } from "../entities/Auth"
import { useAppDispatch, useAppSelector } from "../App/AppStore"
import { Navigate } from "react-router-dom"



const Login: FC = () => {
    const dispatch = useAppDispatch()
    const token = localStorage.getItem('token')
    const [isRedirect, setIsRedirect] = useState<boolean>(false)
    if (isRedirect || token) return <Navigate to={`/`} />

    return <LoginBlock login={(email: string, password: string) => { 
        dispatch(login(email, password)) 
        setIsRedirect(true)
    }} />
}

export default Login