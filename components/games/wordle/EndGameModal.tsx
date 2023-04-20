import Button from "@/components/general/Button";
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
        <div className="top-0 left-0 bg-neutral-300/30 dark:bg-slate-900/30 backdrop-blur-[1px] fixed w-screen h-screen flex justify-center items-center">
            <div className="bg-primary w-80 p-3 rounded-lg border border-neutral-400 dark:border-slate-600 flex flex-col gap-2 justify-center items-center">
                {/* Main header */}
                {status === 'win' && <>
                    <h1 className="font-bebas text-3xl text-emerald-400">YOU WON!</h1>
                    <span className="text-secondary">Congratulations</span>
                </>}

                {status === 'lost' && <>
                    <h1 className="font-bebas text-3xl flex gap-2 text-red-400">YOU LOST <HiOutlineEmojiSad></HiOutlineEmojiSad></h1>
                    <span className="text-secondary">Good luck next time</span>
                </>}

                <hr className="border-neutral-300 darK:border-slate-600 border-1/2 w-full" />

                <p className="text-neutral-400 mb-5">Secret word was: <span className="text-neutral-600 dark:text-neutral-200 text-bebas font-bold">{wordleContext.word}</span></p>

                <Button text="play again" onClick={() => router.reload()}></Button>
                <Button text="find other games" link="/"></Button>
            </div>
        </div>
    )
}

export default EndGameModal;