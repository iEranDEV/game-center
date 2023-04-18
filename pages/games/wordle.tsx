import WordleKeyboard from "@/components/games/wordle/WordleKeyboard";
import { motion } from "framer-motion";

export default function Wordle() {

    const word = 'wordle';

    return (
        <div className='w-full h-full justify-between flex flex-col items-center'>
            
            <h1 className="pt-2 font-bebas text-4xl">WORDLE</h1>

            <div className="h-4/6 flex flex-col gap-2">
                {Array.from({length: 6}, (_, i) => (
                    <div className="flex gap-2" key={i}>
                        {Array.from({length: 5}, (_, j) => (
                            <motion.div key={j}
                                initial={{y: -20, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: i * 0.1 + j * 0.1, type: 'tween'}}
                            className="h-14 w-14 border border-neutral-300 rounded-lg">

                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            <WordleKeyboard />

        </div>
    )
}