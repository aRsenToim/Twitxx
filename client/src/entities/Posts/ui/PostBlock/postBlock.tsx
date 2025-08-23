import { useState, type FC } from 'react'
import s from './postBlock.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
    title: string
    content: string
    date: Date
    authorName: string
    authorAvatar: string
    authorIdName: string
    toAnswer: string
    isProfile: boolean
    toFix?: boolean
    isGlobal?: boolean
    pinPost?: () => void
    deletePost?: () => void
    AnswerPost?: () => void
    likePost: () => void
    unlikePost: () => void
    changeGlobal?: () => void
    isLike: boolean
}

const PostBlock: FC<IProps> = ({ title, likePost, isGlobal, changeGlobal, unlikePost, content, toAnswer, isLike, date, AnswerPost, isProfile, deletePost, authorAvatar, toFix, pinPost, authorName, authorIdName }) => {
    const [isSettingBlog, setIsSettingBlock] = useState<boolean>()
    return <div className={s.PostBlock}>
        {toAnswer && <NavLink to={`/post/${toAnswer}`} className={s.PostBlock__answer}>
            <img src="/images/icons/answerPost.svg" alt="" />
            <span>Answer</span>
        </NavLink>}
        <div className={s.PostBlock__header}>
            <div className={s.PostBlock__autor}>
                <img className={s.PostBlock__avatar} src={`http://localhost:3003/` + authorAvatar} alt="" />
                <div className={s.PostBlock__name}>
                    <h1 className={s.PostBlock__title}>{authorName}</h1>
                    <p className={s.PostBlock__id}>@{authorIdName}</p>
                    {toFix && <img className={s.PostBlock__fix} src="/images/icons/fix.svg" alt="" />}
                </div>
            </div>
            {isProfile && <div className={s.SettingsPostBlock} onMouseOver={() => setIsSettingBlock(true)} onMouseLeave={() => setIsSettingBlock(false)}>
                <img src="/images/icons/settingPost.svg" className={s.SettingsPostBlock__btn} alt="" />
                {isSettingBlog && <ul className={s.SettingsPostBlock__items} >
                    <li className={s.SettingsPostBlock__item} onClick={pinPost}>
                        <img src="/images/icons/fix.svg" alt="" />
                        {toFix ? <span>unpin post</span> : <span>Pin post</span>}
                    </li>
                    <li className={s.SettingsPostBlock__item} onClick={deletePost}>
                        <img src="/images/icons/trash.svg" alt="" />
                        <span>Delete post</span>
                    </li>
                    <li className={s.SettingsPostBlock__item} onClick={changeGlobal}>
                        {isGlobal ? <>
                            <img src="/images/icons/hide.svg" alt="" />
                            <span>Hide</span>
                        </> : <>
                            <img src="/images/icons/unhide.svg" alt="" />
                            <span>Open</span>
                        </>}
                    </li>
                </ul>}
            </div>}
        </div>
        <div className={s.PostBlock__content}>
            <h2 className={s.PostBlock__contentTitle}>{title}</h2>
            <p className={`${content.length < 100 ? s.PostBlock__textSmall : s.PostBlock__text}`}>
                {content}
            </p>
        </div>
        <ul className={s.PostBlock__footer}>
            <li className={s.PostBlock__footerItem} onClick={AnswerPost}>
                <img src="/images/icons/answer.svg" alt="" />
            </li>
            {isLike ? <li className={s.PostBlock__footerItem} onClick={unlikePost}>
                <img src="/images/icons/toLike.svg" alt="" />
            </li> : <li className={s.PostBlock__footerItem} onClick={likePost}>
                <img src="/images/icons/like.svg" alt="" />
            </li>}
        </ul>
    </div>
}


export default PostBlock