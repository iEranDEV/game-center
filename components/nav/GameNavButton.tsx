import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";

const textMotion = {
    hover: {
        x: 5,
        transition: {
            duration: 0.2
        }
    }
}

function GameNavButton({ game, link }: { game: GameType, link: string }) {

    return (
        <Link href={link}>
            <motion.div whileHover="hover" style={{borderColor: game.color}} className='px-2 hover:border-l-[6px] border-neutral-50 dark:border-slate-700 py-1.5 hover:bg-neutral-100 dark:hover:bg-slate-600 cursor-pointer flex justify-between items-center'>
                <div className="flex items-center gap-2">
                    <Image src={'/game_icons/' + game.id + '.svg'} width={20} height={20} alt={game.title}></Image>
                    <motion.p variants={textMotion}>
                        {game.title}
                    </motion.p>
                </div>

                {game.status && 
                    <div className={'text-xs rounded-full px-2 py-0.5 text-neutral-50 ' + (game.status === 'New' ? 'bg-emerald-400' : 'bg-orange-300')}>
                        {game.status}
                    </div>
                }
            </motion.div>
        </Link>
    )
}

export default GameNavButton;