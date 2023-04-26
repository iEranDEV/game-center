import EndGameModal from "@/components/games/speedTyping/EndGameModal";
import { motion } from "framer-motion";
import randomWords from "random-words";
import { Fragment, useEffect, useRef, useState } from "react"

export default function SpeedTyping() {
    const [status, setStatus] = useState('none');
    const [time, setTime] = useState(60);
    const [words, setWords] = useState(Array<string>());
    const [userInput, setUserInput] = useState({
        currentWord: 0,
        input: '',
        history: Array<string>()
    });
    const [row, setRow] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        setWords(randomWords(50));
        (inputRef.current as any).focus();
    }, []);

    useEffect(() => {
        if(status === 'playing') {
            const timer = () => {
                if(time === 0) setStatus('end');
                else setTime(() => time - 1);
            }
            const timeout = setTimeout(timer, 1000);

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [status, time]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(status === 'none') {
            setStatus('playing');
            setUserInput({...userInput, input: e.target.value});
        } else if(status === 'playing') {
            setUserInput({...userInput, input: e.target.value});
        }
    }

    const submitWord = (e: React.KeyboardEvent) => {
        if(e.code === 'Space') {
            const wordElement = document.getElementById('word_' + (userInput.currentWord + 1));
            const currentWord = document.getElementById('word_' + (userInput.currentWord));

            const nextTop = wordElement?.getBoundingClientRect().top;
            const currentTop = currentWord?.getBoundingClientRect().top;

            if(nextTop && currentTop && nextTop > currentTop) {
                setRow((prev) => prev + 1);
            }
            setUserInput({currentWord: userInput.currentWord + 1, input: '', history: [...userInput.history, userInput.input.trim()]});
        }
    }

    return (
        <div className='w-full h-full justify-center flex flex-col items-center pt-10 gap-10'>

            <div className="w-full md:w-[35rem] flex flex-col gap-2">
                <h1 className="text-primary text-2xl">TIME LEFT: <span className="text-green-500">{time}</span> seconds</h1>
                {status === 'playing' ?
                    <motion.div className="bg-green-500 h-1 rounded-lg" initial={{width: '100%'}} animate={{width: '0'}} transition={{duration: 60, type: 'tween', ease: 'linear'}}>
                    </motion.div>
                :
                    <div className="h-1 w-full bg-primary">
                    </div>
                }
            </div>

            {/* Game board */}
            <div className="w-full flex justify-center flex-col items-center">
                <div className="w-full md:w-[35rem] h-[199px] border dark:border-slate-600 relative rounded-t-lg overflow-hidden">
                    <motion.div className="absolute w-full left-0 p-2 flex flex-wrap gap-x-1 gap-y-2" initial={{top: 0}} animate={{ top: -(row * 43) + 'px'}}>
                        {words.map((word, index) => (
                            <Fragment key={index}>
                                {index < userInput.currentWord ? 
                                    <motion.p id={'word_' + index} initial={{opacity: 0.5}} animate={{opacity: 1}} className={(userInput.history[index] === word ? 'bg-green-200' : 'bg-red-200') + ' text-sm md:text-xl rounded-lg px-2 flex justify-center items-center h-[35px]'}>
                                        {word}
                                    </motion.p>
                                :
                                    <p id={'word_' + index} className={(userInput.currentWord === index && ' bg-neutral-200 dark:text-current') + ' dark:text-neutral-300 text-sm md:text-xl rounded-lg px-2 flex justify-center items-center h-[35px]'}>
                                        {word}
                                    </p>
                                }
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
                <div className="bg-neutral-200 dark:bg-slate-500 w-full md:w-[35rem] rounded-b-lg p-2 border border-neutral-400">
                    <input onKeyDown={(e) => submitWord(e)} ref={inputRef} value={userInput.input} onChange={(e) => handleInputChange(e)} type="text" className="bg-neutral-200 dark:bg-slate-500 dark:text-neutral-200 w-full focus:outline-none" placeholder="Type here" onBlur={(e) => e.target.focus()} />
                </div>
                <p className="mt-2 text-neutral-300 dark:text-slate-500">Click SPACE to submit a word!</p>
            </div>

            {/* End game modal */}
            {status === 'end' && <EndGameModal words={words} userInput={userInput} />}

        </div>
    )
}