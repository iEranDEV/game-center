import { motion } from "framer-motion";
import randomWords from "random-words";
import { Fragment, useEffect, useRef, useState } from "react"

export default function SpeedTyping() {
    const [status, setStatus] = useState('none');
    const [time, setTime] = useState(30);
    const [text, setText] = useState(Array<string>());
    const [userInput, setUserInput] = useState({
        currentWord: 0,
        input: ''
    });
    const [row, setRow] = useState(0);

    const inputRef = useRef(null);

    useEffect(() => {
        setText(randomWords(50));
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

            setUserInput({currentWord: userInput.currentWord + 1, input: ''});
        }
    }

    return (
        <div className='w-full h-full justify-center flex flex-col items-center pt-10 gap-10'>

            <div className="w-full md:w-[35rem] flex flex-col gap-2">
                <h1 className="text-primary text-2xl">TIME LEFT: {time} seconds</h1>
                {status === 'playing' && 
                    <motion.div className="bg-green-500 h-0.5" initial={{width: '100%'}} animate={{width: '0'}} transition={{duration: 30, type: 'tween', ease: 'linear'}}>

                    </motion.div>
                }
            </div>

            {/* Game board */}
            <div>
                <div className="w-full md:w-[35rem] h-[199px] border relative rounded-t-lg overflow-hidden">
                    <div className="absolute left-0 p-2 flex flex-wrap gap-x-1 gap-y-2" style={{top: -(row * 43) + 'px'}}>
                        {text.map((word, index) => (
                            <Fragment key={index}>
                                {index < userInput.currentWord ? 
                                    <p id={'word_' + index} className={'bg-red-200 text-xl rounded-lg px-2 flex justify-center items-center h-[35px]'}>
                                        {word}
                                    </p>
                                :
                                    <p id={'word_' + index} className={(userInput.currentWord === index && ' bg-neutral-200') + ' text-xl rounded-lg px-2 flex justify-center items-center h-[35px]'}>
                                        {word}
                                    </p>
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className="bg-neutral-200 rounded-b-lg p-2">
                    <input onKeyDown={(e) => submitWord(e)} ref={inputRef} value={userInput.input} onChange={(e) => handleInputChange(e)} type="text" className="bg-neutral-200 w-full focus:outline-none" placeholder="Type here" onBlur={(e) => e.target.focus()} />
                </div>
                <p className="mt-2 text-neutral-300">Click SPACE to submit a word!</p>
            </div>

        </div>
    )
}