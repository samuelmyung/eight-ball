import React, { useState } from 'react';
import "./eightball.css";
import choice from "./helpers";

const initialMessage = 'Think of a Question';
const allAnswers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

/** Gives random message and sets corresponding background color of eightball.
 *
 * Props:
 * - answers: [{msg, color}...]
 *
 * State:
 * - msg: string
 * - color: backgroundColor
 *
 */

function EightBall({ answers = allAnswers }) {
    // keep track of color and message
    const [message, setMessage] = useState(initialMessage);
    const [color, setColor] = useState('black');
    const [answer, setAnswer] = useState({msg: initialMessage, color : "black"})

    // choose random message on click
    function handleClick() {
        const randomAnswer = choice(answers);
        setAnswer(randomAnswer);
    }
    // click changes color
    return (
        <div>
            <button
                className="magicEightBall"
                onClick={handleClick}
                style={{ backgroundColor: answer.color, color: 'white' }}>
                {answer.msg}
            </button>
        </div>
    );
}

export default EightBall;