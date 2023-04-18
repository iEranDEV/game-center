import { useEffect, useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from "framer-motion"
import GameNavButton from './GameNavButton';
import games from '@/games.json'
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavBar() {
    const [menu, setMenu] = useState(false);

    const router = useRouter();

    useEffect(() => {
        setMenu(false);
    }, [router.route]);

    return (
        <nav className="fixed bg-neutral-50 border-b text-neutral-800 border-neutral-400 flex justify-between items-center w-full p-3">
            {/* Menu button */}
            <BiMenu onClick={() => setMenu(!menu)} className='h-7 w-7 cursor-pointer'></BiMenu>

            {menu && <>
                {/* Blur */}
                <div onClick={() => setMenu(false)} className={'absolute z-50 w-screen h-screen left-0 top-0 bg-neutral-300/30 backdrop-blur-[0.5px]'}></div>

            </>}

            {/* Menu */}
            <motion.div 
                initial={{x: '-100%'}} 
                animate={{x: menu ? 0 : '-100%'}}
                className={'md:border-r border-neutral-400 h-screen w-screen md:w-80 absolute z-50 left-0 top-0 bg-neutral-50 flex flex-col gap-5'}
            >
                {/* Close button */}
                <BiX onClick={() => setMenu(false)} className='h-7 w-7 cursor-pointer m-3'></BiX>

                {/* Pages / Games */}
                <div className='flex h-full flex-col justify-between'>
                    <div className='flex flex-col'>

                        <Link href={'/'} className='w-full flex justify-end px-2 underline decoration-neutral-300'>
                            <span className='text-end text-xs text-neutral-300'>go to home page</span>
                        </Link>

                        <h1 className='font-bebas text-neutral-500 mx-3'>Select game</h1>
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