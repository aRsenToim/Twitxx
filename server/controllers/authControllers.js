import { validationResult } from "express-validator";
import { prisma } from "../app.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4, v4 } from 'uuid';
import fileService from "../service/fileService.js";



class AuthController {
    async registration(req, res) {
        try {
            const error = validationResult(req)
            if (!error.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", error })
            }
            const { email, password, name } = req.body

            const candidate = await prisma.user.findMany({
                where: {
                    email
                }
            })

            if (candidate[0]) {
                return res.status(400).json({ message: `User with email ${email} already exist` })
            }
            const hashPassword = await bcrypt.hash(password, 10)
            await prisma.user.create({
                data: {
                    email,
                    password: hashPassword,
                    Location: "Russia, Moscow",
                    profession: "Marginal",
                    id_name: v4(),
                    avatar: "baaseAva.png",
                    name,
                    desc: "Desc",
                    background: "baseBG.jpg",
                    isHide: false
                }
            })
            let user = await prisma.user.findMany({
                where: {
                    email
                }
            })
            user = user[0]
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY || 'Pidoras', { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    id_name: user.id_name,
                    avatar: user.avatar,
                    desc: user.desc,
                    background: user.background,
                    Location: user.Location,
                    profession: user.profession,
                    dateCreate: user.dateCreate
                }
            })
        } catch (error) {
            console.log(error);
            res.send({ message: "Error Server" })
        }
    }
    async login(req, res) {
        try {
            const { email, password } = req.body
            let user = await prisma.user.findMany({
                where: {
                    email
                }
            })
            user = user[0]

            if (!user) {
                return res.code(404).json({ message: "user not found" })
            }
            const isPassValid = bcrypt.compare(password, user.password)
            if (!isPassValid) {
                return res.code(400).json({ message: "password invalid" })
            }
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY || 'Pidoras', { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    id_name: user.id_name,
                    avatar: user.avatar,
                    desc: user.desc,
                    background: user.background
                }
            })
        } catch (error) {

        }
    }
    async auth(req, res) {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: req.user.id
                }
            })
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY || 'Pidoras', { expiresIn: "1h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    avatar: user.avatar,
                    desc: user.desc,
                    id_name: user.id_name,
                    background: user.background,
                    isHide: user.isHide,
                    Location: user.Location,
                    profession: user.profession,
                    dateCreate: user.dateCreate
                }
            })
        } catch (error) {
            console.log(error)
            res.send({ message: "Server error" })
        }
    }
    async change(req, res) {
        try {
            const userId = req.user.id
            const { desc, userName, id_name, Location, profession } = req.body

            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            const userUpdate = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    desc: desc ?? user.desc,
                    name: userName ?? user.name,
                    id_name: id_name,
                    Location: Location ?? user.Location,
                    profession: profession ?? user.profession
                }
            })
            await prisma.post.updateMany({
                where: {
                    userId: userId,
                },
                data: {
                    authorName: userName ?? user.name,
                    authorIdName: id_name
                }
            })
            res.json(userUpdate)
        } catch (error) {
            console.log(error);
        }
    }
    async changePicture(req, res) {
        try {
            const userId = req.user.id
            let filenameAvatar = null
            let filenameBackground = null
            const { avatar, background } = req?.files
            if (avatar) {
                filenameAvatar = fileService.saveFile(avatar, `${userId}_av`)
            }
            if (background) {
                filenameBackground = fileService.saveFile(background, `${userId}_bc`)
            }

            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            const userUpdate = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    background: filenameBackground ?? user.background,
                    avatar: filenameAvatar ?? user.avatar,
                }
            })
            await prisma.post.updateMany({
                where: {
                    userId: userId,
                },
                data: {
                    authorAvatar: filenameAvatar ?? user.avatar,
                }
            })
            res.json(userUpdate)
        } catch (error) {

        }
    }
    async changeIdName(req, res) {
        try {
            const id = req.user.id
            const id_name = req.body.id_name
            console.log(id, id_name);
            
            const userUpdate = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    id_name
                }
            })
            await prisma.post.updateMany({
                where: {
                    userId: id,
                },
                data: {
                    authorIdName: id_name
                }
            })
            res.json(userUpdate)
        } catch (error) {
            res.send('server error')
        }
    }
    async getIdName(req, res) {
        try {
            const id_name = req.query.idName
            const user = await prisma.user.count({
                where: {
                    id_name: id_name
                }
            })
            if (user != 0) {
                return res.json({ status: false })
            }
            res.json({status: true})

        } catch (error) {
            res.send('server error')
        }
    }
    async changeHideProfile(req, res){
        try {
            const id = req.user.id
            const isHide = req.body.isHide 

            const user = await prisma.user.update({
                where: {
                    id
                },
                data: {
                    isHide
                }
            })
            res.json(user)
        } catch (error) {
            res.send('server error')   
        }
    }
}


export default new AuthController()