import EndGameModal from "@/components/games/visualMemory/EndGameModal";
import MemoryGameTile from "@/components/games/visualMemory/MemoryGameTiles";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function VisualMemory() {

    const [scope, animate] = useAnimate();

    const [level, setLevel] = useState(1);
    const [status, setStatus] = useState('preparingBoard');
    const [board, setBoard] = useState(Array<{row: number, col: number}>());
    const [userInput, setUserInput] = useState([]);

    const tilesCount = Math.round(level / 3) + 3;

    useEffect(() => {
        const getRandomPos = () => {
            return {
                row: Math.floor(Math.random() * tilesCount),
                col: Math.floor(Math.random() * tilesCount)
            }
        }

        setStatus(() => 'preparingBoard');

        const tempBoard = Array<{row: number, col: number}>();
        while(tempBoard.length < (level + 2)) {
            let rand = getRandomPos();
            let contains = false;
            tempBoard.forEach((item) => {
                if(item.row === rand.row && item.col === rand.col) {
                    contains = true;
                }
            })
            if(!contains) tempBoard.push(rand);
        }

        setTimeout(() => setBoard(tempBoard), 500)
    }, [level]);

    useEffect(() => {
        if(userInput.length === board.length && board.length > 0) {
            setStatus('nextStage');
            setTimeout(() => {
                setLevel((prev) => prev + 1);
                setBoard([]);
                setUserInput([]);
            }, 1500);

        }
    }, [userInput]);

    let tileProps = { board, status, setStatus, userInput, setUserInput};

    return (
        <div className='w-full h-full justify-center flex flex-col items-center pt-10 gap-2'>

            {status === 'nextStage' && <motion.div key={Math.random()} 
                className="fixed h-screen w-screen flex justify-center items-center top-0 left-0 z-50"
                initial={{backgroundColor: "transparent"}}
                animate={{backgroundColor: ['rgba(16,185,129,0)', 'rgba(110,231,183,0.2)', 'rgba(16,185,129,0)']}}
                transition={{repeat: 1, duration: 0.5}}
            >
            </motion.div>}

            <h1 className="text-primary text-3xl">Round {level}</h1>

            {/* Game board */}
            {level && <div className="w-full md:w-96 lg:w-[30rem] xl:w-[35rem] aspect-square bg-transparent flex flex-col gap-2">
                {Array.from({length: tilesCount}, (_, row) => (
                    <div key={row} className="w-full grid gap-2" style={{gridTemplateColumns: ' 1fr '.repeat(tilesCount)}}>
                        {Array.from({length: tilesCount}, (_, col) => (
                            <MemoryGameTile key={level + '_' + col} pos={{col: col, row: row}} {...tileProps}></MemoryGameTile>
                        ))}
                    </div>
                ))}
            </div>}

            {status === 'end' && <EndGameModal level={level}></EndGameModal>}

        </div>
    )
}