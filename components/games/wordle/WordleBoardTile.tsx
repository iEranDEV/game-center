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
        // animate(scope.current, { backgroundColor: 'red' })
        if(row + 1 === currentRow) {
            const letter = wordleContext.guesses[row][col];
            if(wordleContext.word[col] === letter) {
                // Same index
                animate(scope.current, { y: [0, -3, 0], backgroundColor: '#34d399', color: '#fafafa', borderWidth: 0 }, { duration: 0.2});
            } else if(wordleContext.word.includes(letter)) {
                // Just includes
                animate(scope.current, { y: [0, -3, 0], backgroundColor: '#fdba74', color: '#fafafa', borderWidth: 0 }, { duration: 0.2});
            }
        }
    }, [wordleContext.guesses]);

    return (
        <motion.div ref={scope}
            initial={{y: -20, opacity: 0, borderWidth: 1}}
            animate={{  
                        y: 0, 
                        opacity: 1, 
                        scale: (currentRow === row && wordleContext.userInput.length > col) ? [0.9, 1] : 1
                    }}
            transition={{delay: row * 0.1 + col * 0.1, type: 'tween'}}
        className={'h-14 w-14 border-neutral-300 rounded-lg flex justify-center items-center text-2xl uppercase text-neutral-600 font-bold'}>
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