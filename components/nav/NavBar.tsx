import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from "framer-motion"
import GameNavButton from './GameNavButton';
import games from '@/games.json'
import { useRouter } from 'next/router';
import Link from 'next/link';
import DarkModeToggler from './DarkModeToggler';

function NavBar() {
    const [menu, setMenu] = useState(false);
    
    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
    }

    const router = useRouter();

    useEffect(() => {
        setMenu(false);
    }, [router.route]);

    return (
        <nav className="fixed bg-primary z-50 border-b text-neutral-800 dark:text-neutral-200 border-neutral-400 dark:border-slate-600 flex justify-between items-center w-full p-3">
            {/* Menu button */}
            <BiMenu onClick={() => setMenu(!menu)} className='h-7 w-7 cursor-pointer'></BiMenu>

            {/* Logo */}
            <h1 className="font-bebas text-2xl absolute left-1/2 -translate-x-1/2">GAME CENTER</h1>

            {/* Dark mode toggle */}
            <DarkModeToggler></DarkModeToggler>

            {menu && <>
                {/* Blur */}
                <div onClick={() => setMenu(false)} className={'absolute z-50 w-screen h-screen left-0 top-0 bg-neutral-300/30 dark:bg-slate-900/30 backdrop-blur-[1px]'}></div>

            </>}

            {/* Menu */}
            <motion.div 
                initial={{x: '-100%'}} 
                animate={{x: menu ? 0 : '-100%'}}
                className={'md:border-r-2 border-neutral-400 dark:border-slate-600 h-screen w-screen md:w-80 absolute z-50 left-0 top-0 bg-primary flex flex-col gap-5'}
            >
                {/* Close button */}
                <BiX onClick={() => setMenu(false)} className='h-7 w-7 cursor-pointer m-3'></BiX>

                {/* Pages / Games */}
                <div className='flex h-full flex-col justify-between'>
                    <div className='flex flex-col'>

                        <Link href={'/'} className='w-full flex justify-end px-2 underline decoration-neutral-300'>
                            <span className='text-secondary'>go to home page</span>
                        </Link>

                        <h1 className='text-primary mx-3'>Select game</h1>
                        {games.map((game) => (
                            <GameNavButton link={'/games/' + game.id} key={game.id} game={game} />
                        ))}
                    </div>

                </div>
            </motion.div>
        </nav>
    )
}

export default NavBar;