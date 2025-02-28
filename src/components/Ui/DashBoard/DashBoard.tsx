import { SideBar } from "./SideBar"
import { Outlet } from "react-router-dom"
interface Props {}
function DashBoard(props: Props) {
    const {} = props

    return (
        <>
        <div className="flex font-xo max-h-screen">
            <SideBar />
            <Outlet />
        </div>
        </>
    )
}

export default DashBoard
