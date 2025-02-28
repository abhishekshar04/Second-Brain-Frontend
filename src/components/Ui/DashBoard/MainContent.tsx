import ContentList from "../Content/AllContent";
import { Motion } from "../Motion"
export const MainContent = () => {
    return (
        <div className="flex flex-col gap-5 w-full mt-10">
            {/* Name */}
            <Motion>
                <div className="flex justify-between px-3">
                <div className="text-[40px] from-neutral-700 font-exo text-gray-800">Welcome, Abhishek</div>
                </div>
            </Motion>
            <ContentList />
        </div>
    );
}