import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi'

function NavBar() {
    const [menu, setMenu] = useState(false);
    

    return (
        <nav className="fixed bg-neutral-50 border-b text-neutral-800 border-neutral-400 flex justify-between items-center w-full p-3">
            {/* Menu button */}
            <BiMenu onClick={() => setMenu(!menu)} className='h-7 w-7 cursor-pointer'></BiMenu>

            {/* Logo */}
            <p>Games</p>

            {/* Login, profile */}
            <div className='flex justify-end gap-4 items-center'>

                {/* Log in button */}
                <button className='uppercase text-sm py-1 px-5 border border-neutral-900 font-mono font-extrabold rounded hover:bg-neutral-900 hover:text-neutral-50 transition-all'>
                    Log in
                </button>
            </div>

            {/* Blur */}
            <div onClick={() => setMenu(false)} className={(menu ? 'block' : 'hidden') + ' absolute z-50 w-screen h-screen left-0 top-0 bg-neutral-300/30 backdrop-blur-[0.5px]'}></div>

            {/* Menu */}
            <div className={(menu ? 'left-0' : '-left-full') + ' md:border-r border-neutral-400 transition-all h-screen w-screen md:w-96 absolute z-50 top-0 bg-neutral-50 p-3 flex flex-col'}>
                {/* Close button */}
                <BiX onClick={() => setMenu(false)} className='h-7 w-7 cursor-pointer'></BiX>
            </div>
        </nav>
    )
}

export default NavBar;