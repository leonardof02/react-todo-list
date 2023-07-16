import iconDelete from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

import "./Todo.css";

interface TodoProps {
    id: number;
    onChange?: (actualValue: boolean, id: number) => void;
    onDelete?: (index: number) => void; 
    check?: boolean;
    title: string;
}

export default function Todo({ id, check, title, onChange, onDelete }: TodoProps) {
    const handleChange = () => {
        onChange && onChange(!check || false, id);
    };

    const handleDelete = () => {
        onDelete && onDelete(id);
    }

    return (
        <div className="flex-series todo">
            <div className={`checkbox ${check ? "checked" : ""}`} onClick={handleChange}>
                { check && <img src={checkIcon} alt="check" /> }
            </div>
            <p className={`${check ? "checked" : ""}`}>{title}</p>
            <button style={{ marginLeft: "auto" }} className="delete-btn" onClick={handleDelete}>
                <img className="delete-btn" src={iconDelete} alt="Delete Icon" />
            </button>
        </div>
    );
}
