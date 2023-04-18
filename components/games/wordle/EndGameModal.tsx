import { WordleContext } from "@/context/WordleContext";
import JSConfetti from "js-confetti";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { HiOutlineEmojiSad } from 'react-icons/hi';

type EndGameModalProps = {
    status: string
}

function EndGameModal({ status }: EndGameModalProps) {

    const wordleContext = useContext(WordleContext);
    const router = useRouter();

    useEffect(() => {
        if(status === 'win') {
            const confetti = new JSConfetti();
            confetti.addConfetti();
        }
    }, []);

    return (
        <div className="top-0 left-0 bg-neutral-300/30 backdrop-blur-[0.5px] fixed w-screen h-screen flex justify-center items-center">
            <div className="bg-neutral-50 w-80 p-3 rounded-lg border border-neutral-400 flex flex-col gap-2 justify-center items-center">
                {/* Main header */}
                {status === 'win' && <>
                    <h1 className="font-bebas text-3xl text-emerald-400">YOU WON!</h1>
                    <span className="text-sm text-neutral-400">Congratulations</span>
                </>}

                {status === 'lost' && <>
                    <h1 className="font-bebas text-3xl flex gap-2 text-red-400">YOU LOST <HiOutlineEmojiSad></HiOutlineEmojiSad></h1>
                    <span className="text-sm text-neutral-400">Good luck next time</span>
                </>}

                <hr className="border-neutral-300 border-1/2 w-full" />

                <p className="text-neutral-400 mb-5">Secret word was: <span className="text-neutral-600 text-bebas font-bold">{wordleContext.word}</span></p>
                
                <button onClick={() => router.reload()} className="w-2/3 rounded-lg py-1 flex justify-center items-center border border-neutral-300 hover:bg-neutral-900 hover:text-neutral-50 transition-all uppercase text-lg font-bebas text-neutral-700">
                    PLAY AGAIN
                </button>

                <Link href='/' className="w-2/3 rounded-lg py-1 flex justify-center items-center border border-neutral-300 hover:bg-neutral-900 hover:text-neutral-50 transition-all uppercase text-lg font-bebas text-neutral-700">
                    find other games
                </Link>
            </div>
        </div>
    )
}

export default EndGameModal;