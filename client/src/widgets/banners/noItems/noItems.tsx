import s from './noItems.module.scss'

const NoItems = () => {
    return <div className={s.noItems}>
        <img src="/images/icons/sad.svg" alt="" />
        <h1 className={s.noItems__title}>No posts</h1>
        <p className={s.noItems__desc}>Tell me how your day went</p>
    </div>
}

export default NoItems