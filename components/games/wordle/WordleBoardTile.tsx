import { WordleContext } from "@/context/WordleContext";
import { motion, useAnimate } from "framer-motion";
import { useContext, useEffect } from 'react';

type WordleBoardTileProps = {
    row: number, 
    col: number
}

function WordleBoardTile({ row, col }: WordleBoardTileProps) {

    const [scope, animate] = useAnimate();

    const wordleContext = useContext(WordleContext);
    const currentRow = wordleContext.guesses.length;

    useEffect(() => {
        if(row + 1 === currentRow) {

            const letter = wordleContext.guesses[row][col];
            let bgColor = '#a3a3a3';
            if(wordleContext.word[col] === letter) {
                // Same index
                bgColor = '#34d399';
            } else if(wordleContext.word.includes(letter)) {
                // Just includes
                bgColor = '#fdba74';
            } 
            animate(scope.current, { rotateY: 360, backgroundColor: bgColor, color: '#fafafa', borderWidth: 0 }, { duration: 0.2, delay: col * 0.1});
        }
    }, [wordleContext.guesses]);

    useEffect(() => {
        if(currentRow === row && wordleContext.userInput.length - 1 === col) {
            animate(scope.current, { scale: [1, 1.1, 1] }, { duration: 0.1 })
        }
    }, [wordleContext.userInput.length])

    return (
        <motion.div ref={scope}
            initial={{y: -20, opacity: 0, borderWidth: 1}}
            animate={{  
                        y: 0, 
                        opacity: 1, 
                    }}
            transition={{delay: row * 0.1 + col * 0.1, type: 'tween'}}
        className={'h-14 w-14 border-neutral-300 dark:border-slate-500 rounded-lg flex justify-center items-center text-2xl uppercase text-neutral-600 dark:text-neutral-200 font-bold'}>
            {currentRow === row && <span>
                {wordleContext.userInput[col]}
            </span>}

            {currentRow > row && <span>
                {wordleContext.guesses[row][col]}    
            </span>}
        </motion.div>
    )
}

export default WordleBoardTile;