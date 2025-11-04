import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const useScoreContext = () => {
    const context = useContext(ScoreContext);

    if (!context) {
        throw new Error("Error for useScoreContext")
    };

    return context;
}

export const ScoreProvider = () => {
    const [score, setScore] = useState(0);

    const addPoints = (amount) => {
        setScore (score + amount);
    };

    return (
        <ScoreContext.Provider value={{addPoints}}>
            {children}
        </ScoreContext.Provider>
    )

};

