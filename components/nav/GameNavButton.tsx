import { motion } from "framer-motion";
import Image from 'next/image'

const textMotion = {
    hover: {
        x: 5,
        transition: {
            duration: 0.2
        }
    }
}

const statusMotion = {
    hover: {
        y: [-2, 0, 2, 0, -2],
        transition: {
            repeat: Infinity,
            duration: 1
        }
    }
}

function GameNavButton({ game }: { game: {id: string, title: string, color: string, status?: string} }) {

    return (
        <motion.div whileHover="hover" style={{borderColor: game.color}} className='px-2 hover:border-l-[6px] border-neutral-50 py-1.5 hover:bg-neutral-100 cursor-pointer flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <Image src={'/game_icons/' + game.id + '.svg'} width={20} height={20} alt={game.title}></Image>
                <motion.p variants={textMotion}>
                    {game.title}
                </motion.p>
            </div>

            {game.status && 
                <motion.div variants={statusMotion} className={'text-xs rounded-full px-2 py-0.5 text-neutral-50 ' + (game.status === 'New' ? 'bg-lime-600' : 'bg-amber-500')}>
                    {game.status}
                </motion.div>
            }
        </motion.div>
    )
}

export default GameNavButton;