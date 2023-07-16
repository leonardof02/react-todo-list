import iconDelete from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

import "./Todo.css";

interface TodoProps {
    onChange?: (actualValue: boolean) => void;
    check?: boolean;
    title: string;
}

export default function Todo({ check, title, onChange }: TodoProps) {
    const handleChange = () => {
        onChange && onChange(check || false);
    };

    return (
        <div className="box flex-series todo">
            <div className={`checkbox ${check ? "checked" : ""}`} onClick={handleChange}>
                {check && <img src={checkIcon} alt="check" />}
            </div>
            <p>{title}</p>
            <button style={{ marginLeft: "auto" }} className="delete-btn">
                <img className="delete-btn" src={iconDelete} alt="Delete Icon" />
            </button>
        </div>
    );
}
