import { createContext } from 'react';

export const WordleContext = createContext({
    word: '',
    userInput: '',
    setUserInput: (userInput: string) => {},
    guesses: Array<string>(),
    setGuesses: (guesses: []) => {},
    handleUserInput: (key: string) => {}
});
