import type { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { addRoutes, routes } from "."
import BaseLayout from "../layouts/baseLayout/baseLayout"



const AppRoutes: FC = () => {
    return <Routes>
        <Route path="/" element={<BaseLayout />}>
            {routes.map(route => <Route path={route.path} element={<route.element />} />)}
        </Route>
        {addRoutes.map(route => <Route path={route.path} element={<route.element />} />)}
    </Routes>
}


export default AppRoutes