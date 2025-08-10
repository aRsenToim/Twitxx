import { prisma } from "../app.js"




class PostsControllers {
    async getPosts(req, res) {
        try {
            const userId = req.query.userId
            if (userId) {
                const UsersPosts = await prisma.post.findMany({
                    where: {
                        userId: userId
                    }
                })
                return res.json(UsersPosts)
            } else {
                const posts = await prisma.post.findMany()

                res.json(posts)
            }
        } catch (error) {
            console.log(error);

            res.send('Error server')
        }
    }
    async create(req, res) {
        try {
            const userId = req.user.id
            const { title, content } = req.body
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            const post = await prisma.post.create({
                data: {
                    Title: title,
                    content,
                    userId,
                    authorName: user.name,
                    authorAvatar: user.avatar,
                    authorIdName: user.id_name
                }
            })
            res.json(post)
        } catch (error) {
            res.send({ message: error.message })
        }
    }
}

export default new PostsControllers()