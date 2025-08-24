

export interface IUser {
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

export interface IUserItem {
    id: string
    name: string
    email: string
    avatar: string
}