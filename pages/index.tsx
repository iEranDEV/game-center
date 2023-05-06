import GameCard from '@/components/general/GameCard'
import games from '@/games.json'

export default function Home() {
	return (
		<div className='h-full w-full overflow-auto flex flex-col items-center'>
			
			{/* Hero section */}

			{/* Games section */}
			<div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 mt-6 max-w-3xl gap-5">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>

			<div className='flex justify-center items-center pt-16'>
				<h2 className='text-neutral-400 text-sm font-mono'>More games coming soon</h2>
			</div>

		</div>
	)
}
