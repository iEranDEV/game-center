import Button from "@/components/general/Button";
import JSConfetti from "js-confetti";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EndGameModal({ level }: { level: number}) {

    const router = useRouter();

    useEffect(() => {
        const confetti = new JSConfetti();
        confetti.addConfetti();
    }, []);

    return (
        <div className="top-0 left-0 bg-neutral-300/30 dark:bg-slate-900/30 backdrop-blur-[1px] fixed w-screen h-screen flex justify-center items-center">
            <div className="bg-primary w-80 p-3 rounded-lg border border-neutral-400 dark:border-slate-600 flex flex-col gap-2 justify-center items-center">
                {/* Main header */}
                <h1 className="font-bebas text-3xl text-emerald-400">you lost</h1>
                <span className="text-secondary">Good job anyway</span>


                <hr className="border-neutral-300 darK:border-slate-600 border-1/2 w-full" />

                <p className="text-neutral-400 mb-5">You have completed <span className="text-neutral-600 dark:text-neutral-200 text-bebas font-bold">{level}</span> levels</p>

                <Button text="play again" onClick={() => router.reload()}></Button>
                <Button text="find other games" link="/"></Button>
            </div>
        </div>
    )
}