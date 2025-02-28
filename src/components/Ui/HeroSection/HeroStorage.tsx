import { SVG } from "../../SVG/SVG"
import { Motion } from "../Motion"

export const HeroStorage = () =>{
    return (
        <div className="flex py-44 min-h-screen justify-center gap-50">
            <div className="w-[40%] h-80">
                <Motion>
                    <SVG image="https://i.postimg.cc/Dzk2RTbL/6195498-3162835-removebg-preview.png"/>
                </Motion>
            </div>
            <div className="font-sans flex flex-col justify-center gap-2">
             <Motion>
                <div className="text-5xl text-gray-600">Second Brain.</div>
             </Motion>
             <Motion>
                <div className="text-3xl text-gray-400">The Storage Your Mind Deserves.</div>
             </Motion>
            </div>
        </div>
    )
}