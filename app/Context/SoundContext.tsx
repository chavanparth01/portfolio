import React, { useState, useContext, createContext } from 'react'
import playSound from '../utils/playSound';

type SoundContextType = {
    sound: boolean,
    setSound: React.Dispatch<React.SetStateAction<boolean>>
    toggle: () => void
}

const SoundContext = createContext<SoundContextType | null>(null);

export default function SoundContextProvider({ children }:
    { children: React.ReactNode }
) {

    const [sound, setSound] = useState(true);

    function toggle(){
        if(sound){
            playSound("/Sounds/ui-sound-off-270300.mp3")
            setSound(!sound);
        }
        else{
            playSound("/Sounds/ui-sound-on-270295.mp3")
            setSound(!sound); 
        }
    }

    return (
        <SoundContext.Provider value={{ sound, setSound , toggle }}>
            {children}
        </SoundContext.Provider>
    )
}

export function useSound(){
    const context = useContext(SoundContext)

    if(!context)
        throw new Error("To Play sound the conponent should be wrapped inside of the Sound COntext Provider");

    else return context;
}
