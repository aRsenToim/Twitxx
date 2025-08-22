import { useState, type FC } from 'react'
import s from './CreatePost.module.scss'
import Input from '../../../../widgets/ui/input/input'


interface IProps {
    createPost: (title: string, content: string) => void
    toAnswer: string
    setToAnswer: () => void
}


const CreatePost: FC<IProps> = ({ createPost, toAnswer, setToAnswer }) => {
    const [content, setContent] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [height, setHeight] = useState<number>(150)
    return <div className={s.CreatePost}>
        {toAnswer && <div className={s.CreatePost__answer} onClick={setToAnswer}>
            <img src="/images/icons/answerPost.svg" alt="" />
            <span>Answer post</span>
        </div>}
        <div className={s.CreatePost__form}>
            <Input value={title} onChange={(v) => { setTitle(v) }} placeholder='Title post' />
            <textarea className={s.CreatePost__input} value={content} onChange={(e) => setContent(e.currentTarget.value)}
                style={{
                    height: `${height}px`
                }}
                onFocus={() => {
                    setHeight(500)
                }}
                onBlur={() => {
                    if (content.length == 0) {
                        setHeight(150)
                    }
                }}
                placeholder='Create new tweet' />
        </div>
        <div className={s.CreatePost__footer}>
            <ul className={s.CreatePost__items}></ul>
            <button className={s.CreatePost__btn} onClick={() => {
                setTitle("")
                setContent("")
                createPost(title, content)
            }}>Tweet</button>
        </div>
    </div>
}

export default CreatePost