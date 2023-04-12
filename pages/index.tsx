import GameCard from '@/components/general/GameCard'
import games from '@/games.json'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<div className='w-full h-screen overflow-hidden flex flex-col pt-14 p-3 bg-neutral-50 items-center'>
			
			{/* Hero section */}

			{/* Games section */}
			<div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 mt-6 max-w-3xl gap-3">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}

				{/* Blank space */}
				<motion.div  whileHover={{y: -2}} className='w-full h-72 overflow-hidden border border-b-4 bg-neutral-100 border-neutral-200 rounded-lg'>
				</motion.div>
			</div>

			<div className='flex justify-center items-center pt-16'>
				<h2 className='text-neutral-400 text-sm font-mono'>More games coming soon</h2>
			</div>

		</div>
	)
}
