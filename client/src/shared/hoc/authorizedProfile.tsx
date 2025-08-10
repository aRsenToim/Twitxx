import type { FC } from "react"
import { useAppSelector } from "../../App/AppStore"
import { Navigate } from "react-router-dom"


interface IProps {
 children?: React.ReactNode
};

export const AuthorizedProfile: FC<IProps> = ({ children }) => {
 const profile = useAppSelector(state => state.AuthSlice.profile)

 if (!profile) {
  return <Navigate to={`/login`} />
 }

 return <>
  {children}
 </>
}