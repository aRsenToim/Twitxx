import type { FC } from 'react'
import s from './postBlock.module.scss'

interface IProps {
    title: string
    content: string
    date: Date
    authorName: string
    authorAvatar: string
    authorIdName: string
}

const PostBlock: FC<IProps> = ({ title, content, date, authorAvatar, authorName, authorIdName }) => {
    return <div className={s.PostBlock}>
        <div className={s.PostBlock__autor}>
            <img className={s.PostBlock__avatar} src={`http://localhost:3003/` + authorAvatar} alt="" />
            <div className={s.PostBlock__name}>
                <h1 className={s.PostBlock__title}>{authorName}</h1>
                <p className={s.PostBlock__id}>@{authorIdName}</p>
            </div>
        </div>
        <div className={s.PostBlock__content}>
            <h2 className={s.PostBlock__contentTitle}>{title}</h2>
            <p className={`${content.length < 100 ? s.PostBlock__textSmall : s.PostBlock__text}`}>
                {content}
            </p>
        </div>
        <div className={s.PostBlock__footer}>

        </div>
    </div>
}


export default PostBlock