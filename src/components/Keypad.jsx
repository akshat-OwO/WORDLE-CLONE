import { useEffect } from "react";
import { useState } from "react";
import { letters } from "../../data/db";

const Keypad = () => {
    const [letter, setLetter] = useState(null);

    useEffect(() => {
        setLetter(letters);
    }, []);

    return (
        <div className="keypad">
            {letter && letters.map((l) => {
                return (
                    <div key={l.key}>{l.key}</div>
                )
            })}
        </div>
    );
}
 
export default Keypad;