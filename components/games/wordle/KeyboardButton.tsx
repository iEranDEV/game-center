import { WordleContext } from "@/context/WordleContext";
import { useContext } from 'react';

type KeyboardButtonProps = {
    letter: string,
    icon?: JSX.Element
}

function KeyboardButton({ letter, icon }: KeyboardButtonProps) {

    const wordleContext = useContext(WordleContext);

    return (
        <div className={(icon ? 'w-12 md:w-16' : 'w-8 md:w-10') + ' h-12 bg-neutral-300 text-neutral-600 flex justify-center items-center md:text-lg rounded-lg hover:bg-neutral-400 cursor-pointer'}
            onClick={() => wordleContext.handleUserInput(letter)}
        >
            {icon ? icon : letter}
        </div>
    )
}

export default KeyboardButton;