import type { FC } from 'react'
import s from './error.module.scss'

interface IProps {
    content: string
}

const Error: FC<IProps> = ({content}) => {
    return <div className={s.Error}>
        {content}
    </div>
}

export default Error