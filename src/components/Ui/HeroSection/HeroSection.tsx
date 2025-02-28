import { HeroBrain } from "./HeroBrain"
import { HeroStorage } from "./HeroStorage"

export const HeroSection = () => {
    return (
        <div className="flex flex-col">
            <HeroBrain />
            <HeroStorage />
        </div>
    )
}