import { motion } from "framer-motion";
import Button from "./Button";

export default function GameCard({ game }: { game: GameType}) {


    return (
        <motion.div whileHover={{y: -2}} className='w-full overflow-hidden p-4 pl-20 relative border shadow-comic dark:shadow-comic-dark bg-primary border-neutral-200 dark:border-zinc-900 rounded-lg'>
            <div className="absolute h-full w-20 left-0 -translate-x-1/3 top-1/2 -translate-y-1/2" style={{backgroundColor: game.secondaryColor}}>

            </div>

            <div className="flex w-full flex-col h-full justify-between gap-2">
                <h1 className="text-3xl text-primary" style={{color: game.color}}>{game.title}</h1>
                <span className="text-secondary text-left">{game.description}</span>
                <div className="flex justify-end">
                    <Button link={'/games/' + game.id} text={'play'}></Button>
                </div>
            </div>
        </motion.div>
    )
}