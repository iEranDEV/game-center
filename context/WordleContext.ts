import { createContext } from 'react';

export const WordleContext = createContext({
    word: null as any,
    userInput: '',
    setUserInput: (userInput: string) => {},
    guesses: Array<string>(),
    setGuesses: (guesses: []) => {},
    handleUserInput: (key: string) => {}
});
