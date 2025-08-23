import Router from "express";
import authControllers from "../controllers/authControllers.js";
import { check } from "express-validator";
import AuthMiddleware from "../middleware/AuthMiddleware.js";

const routesAuth = new Router()

routesAuth.post('/regist', [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer that 3 and shorter than 12').isLength({ min: 3, max: 12 })
], authControllers.registration)
routesAuth.post("/login", authControllers.login)
routesAuth.get('/getAuth', AuthMiddleware, authControllers.auth)
routesAuth.patch('/profile', AuthMiddleware, authControllers.change)
routesAuth.post('/profilePicture', AuthMiddleware, authControllers.changePicture)
routesAuth.patch('/profileIdName', AuthMiddleware, authControllers.changeIdName)
routesAuth.get('/profileIdName', authControllers.getIdName)
routesAuth.patch('/hideProfile', AuthMiddleware, authControllers.changeHideProfile)
export default routesAuth