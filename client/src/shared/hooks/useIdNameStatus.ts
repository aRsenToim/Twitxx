import { AuthApi } from "../../entities/Auth";



export function useIdNameStatus(idName: string){
    AuthApi.getIdNameStatus(idName).then((data) => {
        return data
    })
}