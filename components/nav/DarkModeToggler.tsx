import { motion, useAnimate } from "framer-motion";
import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function DarkModeToggler() {
    const [darkMode, setDarkMode] = useState(false);
    const [scope, animate] = useAnimate();

    const toggleDarkMode = () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.toggle('dark');
        setDarkMode(!darkMode);
        if(darkMode) animate(scope.current, { x: 0 });
        else animate(scope.current, { x: 24 });
    }

    return (
        <div className="flex gap-2 items-center justify-center">
            
            <BiSun></BiSun>

            {/* Toggler */}
            <div onClick={() => toggleDarkMode()} className="relative w-12 h-6 px-0.5 cursor-pointer rounded-full bg-neutral-300 dark:bg-zinc-500">
                <motion.div ref={scope}
                    initial={{y: 2}}
                    className="absolute h-5 w-5 bg-neutral-400 dark:bg-slate-300 rounded-full">

                </motion.div>
            </div>

            <BiMoon></BiMoon>

        </div>
    )
}