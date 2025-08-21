import s from './noItems.module.scss'

const noItems = () => {
    return <div className={s.noItems}>
        <img src="" alt="" />
        <h1>No posts</h1>
        <p>Tell me how your day went</p>
    </div>
}

export default noItems