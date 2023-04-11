import { Roboto } from 'next/font/google'
import NavBar from '@/components/general/NavBar'

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
  })

export default function Home() {
	return (
		<main className={roboto.className + ' h-[1000px]'}>
			<NavBar />
		
			<div className='w-full h-full flex justify-end items-end pt-10 bg-slate-300'>
				Hello world
			</div>
		</main>
	)
}
