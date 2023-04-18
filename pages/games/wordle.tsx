import WordleBoardTile from "@/components/games/wordle/WordleBoardTile";
import WordleKeyboard from "@/components/games/wordle/WordleKeyboard";
import { WordleContext } from "@/context/WordleContext";
import { useAnimate } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from 'react-icons/ai';

export default function Wordle() {
    const [word, setWord] = useState<string | null>(null);
    const [userInput, setUserInput] = useState('');
    const [guesses, setGuesses] = useState(Array<string>());

    const [scope, animate] = useAnimate();

    const router = useRouter();

    useEffect(() => {
        const fetchRandomWord = async () => {
            const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
            if(response.ok) {
                const data = await response.json();
                setWord(data[0].toUpperCase());
            } else {
                router.push('/');
            }
        }

        fetchRandomWord();
    }, [])

    const handleUserInput = async (key: string) => {
        if(key === 'DELETE') {
            // User input backspace
            if(userInput.length > 0) {
                setUserInput((prev) => prev.slice(0, -1));
            } else {
                animate(scope.current, { x: [0, -10, 0, 10, 0]}, { duration: 0.2 });
            }

        } else if(key === 'ENTER') {
            // User input enter
            if(userInput.length === 5) {
                const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + userInput.toLowerCase());
                if(response.ok) {
                    setGuesses([...guesses, userInput]);
                    setUserInput('');
                } else {
                    animate(scope.current, { x: [0, -10, 0, 10, 0]}, { duration: 0.2 });
                }
            } else {
                animate(scope.current, { x: [0, -10, 0, 10, 0]}, { duration: 0.2 });
            }
        } else {
            // User input letter
            if(userInput.length < 5) setUserInput((prev) => prev + key);
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if(e.code.includes('Key')) {
                handleUserInput(e.code.slice(3));
            } else if(e.code === 'Backspace') {
                handleUserInput('DELETE');
            } else if(e.code === 'Enter') {
                handleUserInput('ENTER');
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [userInput, guesses, word]);

    const refProp = (row: number) => {
        if(row === guesses.length) return { ref: scope }
        return {}
    }

    return (
        <WordleContext.Provider value={{userInput, word, setUserInput, guesses, setGuesses, handleUserInput}}>
            {word !== null ? <div className='w-full h-full justify-between flex flex-col items-center pt-10'>

                {/* Wordle game board */}
                <div className="h-4/6 flex flex-col gap-2">
                    {Array.from({length: 6}, (_, row) => (
                        <div {...refProp(row)} className="flex gap-2" key={row}>
                            {Array.from({length: 5}, (_, col) => (
                                <WordleBoardTile key={col} row={row} col={col} />
                            ))}
                        </div>
                    ))}
                </div>

                <WordleKeyboard />

            </div> : <>
                <div className="w-full h-full flex justify-center items-center">
                    <AiOutlineLoading className="h-8 w-8 animate-spin text-neutral-300"></AiOutlineLoading>
                </div>
            </>}
        </WordleContext.Provider>
    )
}