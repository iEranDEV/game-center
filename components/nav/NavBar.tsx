import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi'
import { motion } from "framer-motion"
import GameNavButton from './GameNavButton';

function NavBar() {
    const [menu, setMenu] = useState(false);
    const games = [{id: 'wordle', title: 'Wordle', color: '#6aaa64', status: 'New'}, {id: 'spellingBee', title: 'Spelling bee', color: '#f8cd0e', status: 'Coming soon'}]

    return (
        <nav className="fixed bg-neutral-50 border-b text-neutral-800 border-neutral-400 flex justify-between items-center w-full p-3">
            {/* Menu button */}
            <BiMenu onClick={() => setMenu(!menu)} className='h-7 w-7 cursor-pointer'></BiMenu>

            {/* Login, profile */}
            <div className='flex justify-end gap-4 items-center'>

                {/* Log in button */}
                <button className='uppercase text-sm py-1 px-5 border border-neutral-900 font-mono font-extrabold rounded hover:bg-neutral-900 hover:text-neutral-50 transition-all'>
                    Log in
                </button>
            </div>

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
                        <h1 className='font-mono font-extrabold text-neutral-500 mx-3'>Select game</h1>
                        {games.map((game) => (
                            <GameNavButton key={game.id} game={game} />
                        ))}
                    </div>

                </div>
            </motion.div>
        </nav>
    )
}

export default NavBar;