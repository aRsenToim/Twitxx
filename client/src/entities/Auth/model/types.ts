


export interface IProfile {
    id: string,
    email: string,
    name: string,
    avatar: string,
    desc: string,
    background: string
    id_name: string,
    isHide: boolean,
    Location: string,
    profession: string,
    dateCreate: Date
}

export interface IResponseProfile {
    token: string
    user: IProfile
}


export interface IResponseGetIdName {
    status: boolean
}