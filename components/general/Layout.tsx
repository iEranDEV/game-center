import { Roboto } from 'next/font/google'
import NavBar from '../nav/NavBar';

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

function Layout({ children }: {children: JSX.Element}) {

    return (
        <main className={roboto.className + ' relative'}>
			<NavBar />
		
			<div className='w-full z-10 h-screen pt-14 p-3 overflow-hidden'>
				{children}
			</div>
		</main>
    )
}

export default Layout;