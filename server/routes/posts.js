import { Router } from "express";
import postsControllers from "../controllers/postsControllers.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";


const routesPosts = new Router()


routesPosts.get('/', postsControllers.getPosts)
routesPosts.post('/', AuthMiddleware, postsControllers.create)
routesPosts.patch('/', postsControllers.changePost)
routesPosts.delete('/', postsControllers.deletePost)

export default routesPosts