import { motion } from "framer-motion";

function GameNavButton({ game }: { game: {title: string, color: string} }) {

    return (
        <div  style={{borderColor: game.color}} className='px-2 hover:border-l-[6px] border-neutral-50 py-1.5 hover:bg-neutral-100 cursor-pointer'>
            <motion.p whileHover={{ x: 5}} transition={{duration: 0.2}}>
                {game.title}
            </motion.p>
        </div>
    )
}

export default GameNavButton;