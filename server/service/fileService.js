import * as path from 'path'
import fs from 'fs'
class FileService {
    saveFile(file, id) {
        try {
            const fileName = id + ".jpg"
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        } catch (error) {
            console.log(error);
        }
    }
    deleteFile(fileTitle) {
        try {
            const fileName = fileTitle + ".jpg"
            const filePath = path.resolve('static', fileName)
            fs.unlinkSync(filePath)
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new FileService()