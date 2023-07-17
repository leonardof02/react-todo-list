import iconDelete from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";

import "./Todo.css";
import { useState, DragEvent } from "react";

interface TodoProps {
    id: number;
    onChange?: (actualValue: boolean, id: number) => void;
    onDelete?: (index: number) => void;
    check?: boolean;
    title: string;
    onDrop?: ( idFrom: number, idTo: number ) => void;
}

export default function Todo({ id, check, title, onChange, onDelete, onDrop }: TodoProps) {
    const [isDragging, setDragging] = useState<boolean>(false);
    const [isDragOver, setDragOver] = useState<boolean>(false);

    const handleChange = () => {
        onChange && onChange(!check || false, id);
    };

    const handleDelete = () => {
        onDelete && onDelete(id);
    };

    const handleDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        setDragging(true);
        event.dataTransfer.setData("text/plain",`${id}`);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const idFrom = Number.parseInt( event.dataTransfer.getData("text/plain") );
        const idTo = id;
        onDrop && onDrop( idFrom, idTo );
        setDragOver(false);
    }

    return (
        <div
            className={`flex-series todo
                ${isDragging ? "dragging" : ""}
                ${isDragOver ? "drag-over" : ""}`
            }
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={ handleDrop }
        >
            <div className={`checkbox ${check ? "checked" : ""}`} onClick={handleChange}>
                {check && <img src={checkIcon} alt="check" />}
            </div>
            <p className={`${check ? "checked" : ""}`}>{title}</p>
            <button
                style={{ marginLeft: "auto" }}
                className="delete-btn"
                onClick={handleDelete}
            >
                <img className="delete-btn" src={iconDelete} alt="Delete Icon" />
            </button>
        </div>
    );
}
