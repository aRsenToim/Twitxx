import type { FC } from 'react'
import './ImageEdit.scss'

interface IProps {
    title: string
    onchange: (v: File) => void
}

const ImageEdit: FC<IProps> = ({title, onchange}) => {
    return <form>
        <label className="input-file">
            <input type="file" name="file" onChange={(e) => {
                if(e.target.files[0]){
                    onchange(e.target.files[0])
                }
            }} id="" />
            <span>{title}</span>
        </label>
    </form>
}


export default ImageEdit