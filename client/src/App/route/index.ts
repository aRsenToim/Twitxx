import type React from "react"
import Home from "../../Pages/Home"
import Profile from "../../Pages/Profile"
import Users from "../../Pages/Users"
import Regist from "../../Pages/Regist"
import Login from "../../Pages/login"
import User from "../../Pages/User"
import News from "../../Pages/News"



export interface IRoute {
    path: string
    element: React.ElementType
}


enum RoutesNames {
    Home = '/',
    Profile = '/profile',
    Users = '/users',
    message = '/message',
    Regist = '/regist',
    login = '/login',
    Change = '/change',
    User = '/users/:id',
    News = '/news'
}


export const routes: IRoute[] = [
    {
        path: RoutesNames.Home,
        element: Home
    },
    {
        path: RoutesNames.Profile,
        element: Profile
    },
    {
        path: RoutesNames.Users,
        element: Users
    },
    {
        path: RoutesNames.User,
        element: User
    },
    {
        path: RoutesNames.News,
        element: News
    }
]

export const addRoutes: IRoute[] = [
    {
        path: RoutesNames.Regist,
        element: Regist
    },
    {
        path: RoutesNames.login,
        element: Login
    },
]
