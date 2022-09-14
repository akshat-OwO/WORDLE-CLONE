import { useEffect } from "react";
import { useState } from "react";
import { letters } from "../../data/db";

const Keypad = ( {usedKeys} ) => {
    const [letter, setLetter] = useState(null);

    useEffect(() => {
        setLetter(letters);
    }, []);

    return (
        <div className="keypad">
            {letter && letters.map((l) => {
                const color = usedKeys[l.key]
                return (
                    <div key={l.key} className={color}>{l.key}</div>
                )
            })}
        </div>
    );
}
 
export default Keypad;