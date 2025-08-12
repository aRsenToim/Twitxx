import RegistBlock from "./ui/RegistBlock/RegistBlock";
import AuthSlice, { LogOut } from './model/AuthSlice'
import { changeIdNameFetch, changePicture, changeProfile, createProfile, getProfile, login } from "./actions/AuthAction";
import LoginBlock from "./ui/LoginBlock/LoginBlock";
import AuthApi from "./api/AuthApi";

export {
    RegistBlock,
    AuthSlice,
    createProfile,
    getProfile,
    LoginBlock,
    login,
    LogOut,
    changeProfile,
    changePicture,
    AuthApi,
    changeIdNameFetch
}