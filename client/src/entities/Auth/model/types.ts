


export interface IProfile {
    id: string,
    email: string,
    name: string,
    avatar: string,
    desc: string,
    background: string
    id_name: string,
}

export interface IResponseProfile {
    token: string
    user: IProfile
}
