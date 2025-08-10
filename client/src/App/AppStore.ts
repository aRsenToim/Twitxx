import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AuthSlice } from '../entities/Auth'
import { postsSlice } from '../entities/Posts'
import { usersSlice } from '../entities/Users'



const rootReducers = combineReducers({
    AuthSlice,
    postsSlice,
    usersSlice
})




export const setupStore = () => configureStore({
    reducer: rootReducers,
})

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
