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
		
			{children}
		</main>
    )
}

export default Layout;