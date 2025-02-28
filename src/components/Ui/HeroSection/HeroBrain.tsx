import { SVG } from "../../SVG/SVG"
import { Motion } from "../Motion";
export const HeroBrain = () => {
    return (
        <div className="flex font-primary min-h-screen items-center justify-center gap-20">
            <div className="w-[40%] h-80 flex items-center">
                <Motion>
                    <SVG image="https://i.postimg.cc/prGWS5DL/33756686-8105942-removebg-preview.png"/>
                </Motion>
            </div>
            <div className="font-sans flex flex-col justify-center gap-2">
                    <Motion>
                        <div className="text-5xl text-gray-800">
                            Your Ideas, Safely Stored.
                        </div>
                    </Motion>
                    <Motion>
                    <div className="text-3xl text-gray-400">
                            Forever.
                        </div>
                    </Motion>
            </div>
        </div>
    )
}