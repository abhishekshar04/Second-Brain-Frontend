import { NavLink } from "react-router-dom"
import { CloseDashboard } from "./CloseDashboard"
export const SideBar = () => {
    function logoutHandler() {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (
        <div className="flex min-w-[15%] flex-col">
        <div className="bg-[#375762] text-white">
            <CloseDashboard/>
        </div>
        <div className="h-screen flex flex-col justify-between py-5 bg-[#375762] text-white text-lg">
            <div>
            <ul>
                <li className="w-full text-center p-3 hover:underline"><NavLink to={'/dashboard/content'}>Content</NavLink></li>
                <li className="w-full text-center p-3 hover:underline"><NavLink to={'/dashboard/search'}>Search</NavLink></li>
                <li className="w-full text-center p-3 hover:underline"><NavLink to={'/settings'}>Settings</NavLink></li>
            </ul>
            </div>
            <div>
            <button onClick={logoutHandler} className="bg-[#FF735C] cursor-pointer rounded-2xl text-white py-2 w-full hover:bg-red-500 transition duration-200">
                <NavLink to={'/'}>Logout
                </NavLink>
            </button>

            </div>
        </div>
        </div>
    )
}