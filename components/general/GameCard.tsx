import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

export default function GameCard({ game }: { game: GameType}) {


    return (
        <motion.div  whileHover={{y: -2}} className='w-full h-72 overflow-hidden border border-b-4 border-neutral-300 rounded-lg'>
            <div className='w-full h-32 border-b-4 flex justify-center items-center' style={{backgroundColor: game.secondaryColor, borderColor: game.color}}>
                <Image src={'/game_icons/' + game.id + '.svg'} alt={game.title} height={80} width={80} />
            </div>

            <div className="w-full flex flex-col justify-between h-36 items-center p-2">
                <h1 className="text-2xl text-neutral-700  uppercase font-bebas">{game.title}</h1>
                <span className="text-neutral-400 text-sm">{game.description}</span>
                <Link href={'/games/' + game.id} className="w-2/3 rounded-lg py-1 flex justify-center items-center border border-neutral-300 hover:bg-neutral-900 hover:text-neutral-50 transition-all uppercase text-lg font-bebas text-neutral-700">
                    play
                </Link>
            </div>
        </motion.div>
    )
}