import { WordleContext } from "@/context/WordleContext";
import { useContext, useEffect, useState } from 'react';

type KeyboardButtonProps = {
    letter: string,
    icon?: JSX.Element
}

function KeyboardButton({ letter, icon }: KeyboardButtonProps) {
    const [value, setValue] = useState('none');

    const wordleContext = useContext(WordleContext);

    useEffect(() => {
        if(wordleContext.word.includes(letter)) {
            let val = 'none';

            wordleContext.guesses.forEach((guess) => {
                for(let i = 0; i < 5; i++) {
                    if(guess[i] === letter && guess[i] === wordleContext.word[i]) {
                        val = 'onIndex';
                    }
                }
                if(guess.includes(letter) && val === 'none') {
                    val = 'includes';
                }
            })

            setValue(val);
        } else {
            let val = 'none';
            wordleContext.guesses.forEach((guess) => {
                if(guess.includes(letter)) val = 'noIncludes';
            });
            setValue(val);
        }

    }, [wordleContext.guesses])

    const getBgColor = () => {
        switch(value) {
            case 'none':
                return 'bg-neutral-200 dark:bg-zinc-600 text-neutral-500 dark:text-neutral-200';
            case 'includes':
                return 'bg-orange-300 text-neutral-50';
            case 'onIndex':
                return 'bg-emerald-400 text-neutral-50';
            case 'noIncludes':
                return 'bg-neutral-400 dark:bg-zinc-400 text-neutral-50 ';
        }
    }

    return (
        <div className={(icon ? 'w-16 md:w-16 ' : 'w-8 md:w-10 ') + getBgColor() + ' h-12 flex justify-center items-center md:text-lg rounded-lg hover:brightness-[0.85] cursor-pointer'}
            onClick={() => wordleContext.handleUserInput(letter)}
        >
            {icon ? icon : letter}
        </div>
    )
}

export default KeyboardButton;