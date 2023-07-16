import { useState, KeyboardEvent, ChangeEvent } from "react";

import checkIcon from "../assets/images/icon-check.svg";

interface NewTodoInputProps {
    onSubmit?: (value: string, check: boolean) => void;
}

export default function NewTodoInput({ onSubmit }: NewTodoInputProps) {
    const [checked, setChecked] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const toggleChecked = () => setChecked(!checked);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && value.length > 0) {
            onSubmit && onSubmit(value.trim(), checked);
            setValue("");
        }
    };

    return (
        <div className="box flex-series">
            <div className={`checkbox ${checked ? "checked" : ""}`} onClick={toggleChecked}>
                {checked && <img src={checkIcon} alt="check" />}
            </div>
            <input
                style={{ width: "80%" }}
                value={value}
                type="text"
                name="title"
                id="todo-title"
                onKeyDown={handleSubmit}
                onChange={handleChange}
            />
        </div>
    );
}
