import { motion } from "framer-motion";
import Image from 'next/image'
import Button from "./Button";

export default function GameCard({ game }: { game: GameType}) {


    return (
        <motion.div  whileHover={{y: -2}} className='w-full h-72 overflow-hidden border border-b-4 dark:bg-slate-700 border-neutral-200 dark:border-slate-800 rounded-lg'>
            <div className='w-full h-32 border-b-4 flex justify-center items-center' style={{backgroundColor: game.secondaryColor, borderColor: game.color}}>
                <Image src={'/game_icons/' + game.id + '.svg'} alt={game.title} height={60} width={60} />
            </div>

            <div className="w-full flex flex-col justify-between h-36 items-center p-2">
                <h1 className="text-2xl text-primary">{game.title}</h1>
                <span className="text-secondary text-center">{game.description}</span>
                <Button link={'/games/' + game.id} text={'play'}></Button>
            </div>
        </motion.div>
    )
}