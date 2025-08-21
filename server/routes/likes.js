import { Router } from "express";
import postsControllers from "../controllers/postsControllers.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";


const routesLikes = new Router()



routesLikes.post('/', AuthMiddleware, postsControllers.likePost)
routesLikes.get('/', AuthMiddleware, postsControllers.getLikes)
routesLikes.delete('/', postsControllers.unLikePost)

export default routesLikes