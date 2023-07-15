import icon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import styles from "./ToDo.module.css";
import { useState } from "react";

interface TodoProps {
    completed: boolean;
    text: string;
}

export default function Todo({ completed, text }: TodoProps) {
    const [checked, setChecked] = useState(completed);

    return (
        <div className={styles.todoContainer}>
            <div className="checkbox check" onClick={ () => { setChecked(!checked) } }>
                { completed && checkIcon }
            </div>
            <p>{text}</p>
            <button className="delete-button">
                <img src={icon} alt="icon-cross" />
            </button>
        </div>
    );
}
