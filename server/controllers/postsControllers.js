import { prisma } from "../app.js"




class PostsControllers {
    async getPosts(req, res) {
        try {
            const userId = req.query.userId
            const id = req.query.id
            if (userId) {
                const UsersPosts = await prisma.post.findMany({
                    where: {
                        userId: userId
                    }
                })
                return res.json(UsersPosts)
            }else if(id){
                const post = await prisma.post.findUnique({
                    where: {
                        id
                    }
                })
                res.json(post)
            } else {
                const posts = await prisma.post.findMany({
                })

                res.json(posts)
            }
        } catch (error) {
            res.send('Error server')
        }
    }
    async create(req, res) {
        try {
            const userId = req.user.id
            const { title, content, toAnswer } = req.body
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
                    authorIdName: user.id_name,
                    toAnswer: toAnswer ? toAnswer : "",
                    toFix: false
                }
            })
            res.json(post)
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    async changePost(req, res) {
        try {
            const { idPost, fix } = req.body

            const post = await prisma.post.findUnique({
                where: {
                    id: idPost
                }
            })
            const updatePost = await prisma.post.update({
                where: {
                    id: idPost
                },
                data: {
                    toFix: fix != undefined ? Boolean(fix) : post.toFix
                }
            })
            res.json(updatePost)
        } catch (error) {
            res.send('server error')
        }
    }
    async deletePost(req, res) {
        // try {
            const idPost = req.query.idPost
            await prisma.post.delete({
                where: {
                    id: idPost
                }
            })
            res.send('good')
        // } catch (error) {
        //     res.send('server error')
        // }
    }
    async likePost(req, res){
        try {
            const userId = req.user.id
            const {idPost} = req.body
            
            await prisma.like.create({
                data: {
                    userId,
                    postId: idPost
                }
            })
            
            
            res.json({})
        } catch (error) {
            console.log(error);
            
            res.send('server error')            
        }
    }
    async unLikePost(req, res){
        try {
            const {idPost} = req.query
            const like = await prisma.like.findFirst({
                where: {
                    postId: idPost
                }
            })
            await prisma.like.delete({
                where: {
                    id: like.id
                }
            })            
            res.json({})
        } catch (error) {
            res.send('server error')
        }
    }
    async getLikes(req, res){
        try {
            const userId = req.user.id
            const posts = await prisma.like.findMany({
                where: {
                    userId
                }
            })
            res.json(posts)
        } catch (error) {
            res.send('server error')
        }
    }
}

export default new PostsControllers()