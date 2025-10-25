import { createContext, useContext, useState } from "react";

const WordContext = createContext();

export const useWordContext = () => {
    const context = useContext(WordContext);
    if (!context) {
        throw new Error('useWordContext must be used within a WordProvider');
    }
    return context;
};

export const WordProvider = ({ children }) => {
    const [words, setWords] = useState(["bundle", "horrible", "puzzle", "visible", "sprinkle", "tackle", "multiple", "article", "gurgle", "possible"]);

    const addWord = (newWord) => {
        if (newWord.trim() && !words.includes(newWord.toLowerCase())) {
            setWords(prev => [...prev, newWord.toLowerCase()]);
        }
    };

    const deleteWord = (wordToRemove) => {
        setWords(prev => prev.filter(word => word !== wordToRemove));
    };

    return (
        <WordContext.Provider value={{ words, addWord, deleteWord }}>
            {children}
        </WordContext.Provider>
    );
};

