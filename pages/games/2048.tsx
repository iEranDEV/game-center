import GameTile from "@/components/games/2048/GameTile";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ConnectNumbersGame() {

    useEffect(() => {
        const handleArrowKey = (e: KeyboardEvent) => {
            if(e.key.includes('Arrow')) {
                console.log('clicked arrow');
            }
        }

        document.addEventListener('keydown', handleArrowKey);

        return () => {
            document.removeEventListener('keydown', handleArrowKey);
        }
    }, []);

    return (
        <div className='w-full h-full justify-center flex flex-col items-center pt-10 gap-2'>

            <h1 className="text-primary text-3xl">Score 0</h1>

            {/* Game board */}
            <div className="grid grid-rows-4 gap-2 w-[35rem] h-[35rem]">
                {Array.from({length: 4}, (_, row) => (
                    <div key={row} className="w-full grid grid-cols-4 gap-2">
                        {Array.from({length: 4}, (_, col) => (
                            <GameTile key={row + "_" + col} pos={{row: row, col: col}} />
                        ))}
                    </div>
                ))}
            </div>

        </div>
    )
}