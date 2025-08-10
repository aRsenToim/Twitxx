import { Router } from "express";
import usersControllers from "../controllers/usersControllers.js";



const routesUsers = new Router()

routesUsers.get('/', usersControllers.getUsers)

export default routesUsers