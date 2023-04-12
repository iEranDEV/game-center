import { motion } from "framer-motion";
import Image from 'next/image'

export default function GameCard({ game }: { game: GameType}) {


    return (
        <motion.div  whileHover={{y: -2}} className='w-full h-72 overflow-hidden border border-b-4 border-neutral-300 rounded-lg'>
            <div className='w-full h-32 border-b-4 flex justify-center items-center' style={{backgroundColor: game.secondaryColor, borderColor: game.color}}>
                <Image src={'/game_icons/' + game.id + '.svg'} alt={game.title} height={80} width={80} />
            </div>

            <div className="w-full flex flex-col justify-between h-36 items-center p-2">
                <h1 className="text-xl text-neutral-700 font-bold uppercase font-mono">{game.title}</h1>
                <span className="text-neutral-400 text-sm">{game.description}</span>
                <button className="w-2/3 rounded-lg py-1 border border-neutral-300 hover:bg-neutral-900 hover:text-neutral-50 transition-all uppercase  font-mono text-neutral-700 font-extrabold">play</button>
            </div>
        </motion.div>
    )
}