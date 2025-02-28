import { Logo } from "../../SVG/Logo"
import { Button } from "../Button"
import { NavLink } from "react-router-dom"
interface NavBar{
    button : string
    path: string
}
export const NavBar = (props: NavBar) =>{
    return (
        <div className="w-full max-h-20 items-center fixed flex justify-between p-5 z-10 backdrop-blur-md">
            <div className="text-3xl text-sans">
                <Logo />
            </div>
            {props.button==="yes"?<div className="flex gap-5">
                <NavLink to={props?.path}>
                    <Button variant={"primary"} text={"Get Started"} size={'lg'} />
                </NavLink>
            </div>:null}
            
        </div>
    
    )
}