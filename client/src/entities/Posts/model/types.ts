


export interface IPost {
    id: string
    Title: string
    content: string
    date: Date
    userId: string
    toFix: boolean
    authorName: string
    authorAvatar: string
    authorIdName: string
    toAnswer: string
}

export interface ILike {
    id: string
    postId: string
    userId: string
}