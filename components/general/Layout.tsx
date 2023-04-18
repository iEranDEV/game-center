import { Roboto } from 'next/font/google'
import NavBar from '../nav/NavBar';

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

function Layout({ children }: {children: JSX.Element}) {

    return (
        <main className={roboto.className}>
			<NavBar />
		
			<div className='w-full h-screen pt-14 p-3 bg-neutral-50 overflow-hidden'>
				{children}
			</div>
		</main>
    )
}

export default Layout;