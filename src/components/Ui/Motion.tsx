import {motion} from "framer-motion";
import { JSX } from "react";

interface Motion{
    children: JSX.Element
}

export const Motion = ({children}: Motion) =>{
    return (
        <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    >
                        {children}
                    </motion.div>
    )
}