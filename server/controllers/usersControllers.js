import { prisma } from "../app.js";



class UsersControllers {
    async getUsers(req, res) {
        try {
            const id = req.query.id
            if (id) {
                const user = await prisma.user.findUnique({
                    select: {
                        id: true,
                        id_name: true,
                        name: true,
                        email: true,
                        avatar: true,
                        desc: true,
                        background: true
                    },
                    where: {
                        id
                    }
                })
                if (!user) {
                    return res.code(404)
                }
                return res.send(user)
            }

            const users = await prisma.user.findMany({
                where: {
                    isHide: false
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    avatar: true,
                }
            })
            res.json(users)
        } catch (error) {
            res.send('server error')
        }
    }
}

export default new UsersControllers()