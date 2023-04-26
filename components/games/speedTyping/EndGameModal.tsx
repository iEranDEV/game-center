import Button from "@/components/general/Button";
import JSConfetti from "js-confetti";
import { useRouter } from "next/router";
import { useEffect } from "react";

type EndGameModal = {
    words: Array<string>,
    userInput: {
        currentWord: number,
        input: string,
        history: Array<string>,
    }
}

export default function EndGameModal({ words, userInput }: EndGameModal) {
    
    const router = useRouter();

    useEffect(() => {
        const confetti = new JSConfetti();
        confetti.addConfetti();
    }, []);

    const getWPM = (): number => {
        let count = 0;
        words.forEach((word, index) => {
            if(userInput.history[index] === word) count += 1;
        })
        return count;
    }

    const getCPM = (): number => {
        let count = 0;
        words.forEach((word, index) => {
            if(userInput.history[index] === word) count += word.length;
        })
        return count;
    }

    const getAccuracy = () => {
        let count = getWPM();
        return parseFloat(count / userInput.history.length * 100 + '').toFixed(1);
    }

    return (
        <div className="top-0 left-0 bg-neutral-300/30 dark:bg-slate-900/30 backdrop-blur-[1px] fixed w-screen h-screen flex justify-center items-center">
            <div className="bg-primary w-96 p-3 rounded-lg border border-neutral-400 dark:border-slate-600 flex flex-col gap-2 justify-center items-center">
                {/* Main header */}
                <h1 className="font-bebas text-3xl text-emerald-400">end of time</h1>
                <span className="text-secondary">Check your stats below</span>


                <hr className="border-neutral-300 darK:border-slate-600 border-1/2 w-full" />

                <div className="px-5 w-full flex flex-col gap-2">
                    {/* Words per minute */}
                    <div className="w-full flex justify-between items-center">
                        <b>WPM</b>
                        <span className="text-neutral-500">{getWPM()}/min</span>
                    </div>

                    {/* Characters per minute */}
                    <div className="w-full flex justify-between items-center">
                        <b>CPM</b>
                        <span className="text-neutral-500">{getCPM()}/min</span>
                    </div>

                    {/* Accuracy */}
                    <div className="w-full flex justify-between items-center">
                        <b>Accuracy %</b>
                        <span className="text-neutral-500">{getAccuracy()}%</span>
                    </div>
                </div>

                <Button text="play again" onClick={() => router.reload()}></Button>
                <Button text="find other games" link="/"></Button>
            </div>
        </div>
    )
}