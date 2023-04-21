import { motion, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

type MemoryGameTile = {
    pos: {row: number, col: number}
    board: Array<{row: number, col: number}>,
    status: string,
    setStatus: Function,
    userInput: Array<{row: number, col: number}>,
    setUserInput: Function
}

export default function MemoryGameTile({ pos, board, status, setStatus, userInput, setUserInput }: MemoryGameTile) {
    const [scope, animate] = useAnimate();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(false);

        let contains = false;
        board.forEach((item) => {
            if(item.col === pos.col && item.row === pos.row) contains = true;
        })

        if(contains) animate(scope.current, { rotateY: [0, 180, 180], backgroundColor: ['#3b82f6']}, { ease: 'linear' });

        setTimeout(() => {
            if(contains) {
                animate(scope.current, { rotateY: [0, -180, -180], backgroundColor: ['']}, { ease: 'linear', onComplete: setStatus(() => 'playing') });
            } 
        }, 1000);
    }, [board])

    const select = () => {
        if(status === 'playing') {
            let contains = false;
            board.forEach((item) => {
                if(item.col === pos.col && item.row === pos.row) contains = true;
            })

            if(contains) {
                setSelected(true);
                setUserInput([...userInput, {...pos}]);
                animate(scope.current, { rotateY: [0, 180, 180], backgroundColor: ['#10b981']}, { ease: 'linear' });
            } else {
                setStatus('end');
        }
        }
    }

    return (
        <motion.div id={"tile_" + pos.row + "_" + pos.col} 
            onClick={() => !selected && select()} 
            ref={scope} 
            className="w-full cursor-pointer bg-neutral-200 dark:bg-slate-500 aspect-square rounded-lg"
        ></motion.div>
    )
}