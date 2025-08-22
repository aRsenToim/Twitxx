import type { FC } from "react"
import { useParams } from "react-router-dom"


const Post: FC = () => {
    const { id } = useParams()
    return <div>
        {id}
    </div>
}


export default Post