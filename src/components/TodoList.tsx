import Todo from "./Todo";
import NewTodoInput from "./NewTodoInput";
import { FilterMode, Todo as TodoType } from "../types/app";
import { useState } from "react";

// TODO: Fix the bottom Screen of todo
// TODO: Investigate how to controll screen size for mobile and desktop background

export default function TodoList() {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [filterMode, setFilterMode] = useState<FilterMode>("All");

    const handleChange = (newValue: boolean, id: number) => {
        const newTodos = [...todos];
        newTodos[id].checked = newValue;
        setTodos(newTodos);
    };

    const handleSubmit = (value: string, check: boolean) => {
        const newTodo: TodoType = {
            title: value,
            checked: check
        };
        setTodos([...todos, newTodo]);
    };

    const handleDelete = (todoIndex: number) => {
        setTodos(todos.filter((_todo, index) => todoIndex != index));
    };

    const deleteCompletedTodos = () => {
        setTodos(filterTodos("Active"));
    };

    const filterTodos = (filterMode: FilterMode): TodoType[] => {
        const allTodos = [...todos];

        switch (filterMode) {
            case "Active":
                return allTodos.filter(todo => todo.checked === false);
                break;
            case "Completed":
                return allTodos.filter(todo => todo.checked === true);
                break;
            case "All":
            default:
                return allTodos;
        }
    };

    return (
        <div className="flex-column">
            <NewTodoInput onSubmit={handleSubmit} />
            <div style={{ padding: 2 }} className="box todos-container">
                {filterTodos(filterMode).map((todos, index) => (
                    <Todo
                        key={index}
                        id={index}
                        title={todos.title}
                        check={todos.checked}
                        onChange={handleChange}
                        onDelete={handleDelete}
                    />
                ))}
                <div
                    className="todo separated-flex"
                    style={{ padding: "1rem", borderBottom: "none", cursor: "default" }}
                >
                    <p>{todos.length - todos.filter(todo => todo.checked).length} items left</p>
                    <button onClick={deleteCompletedTodos}>Clear Completed</button>
                </div>
            </div>
            <div className="box flex-center options">
                <button
                    onClick={() => setFilterMode("All")}
                    className={filterMode === "All" ? "text-active" : ""}
                >
                    All
                </button>
                <button
                    onClick={() => setFilterMode("Active")}
                    className={filterMode === "Active" ? "text-active" : ""}
                >
                    Active
                </button>
                <button
                    onClick={() => setFilterMode("Completed")}
                    className={filterMode === "Completed" ? "text-active" : ""}
                >
                    Completed
                </button>
            </div>
            <div className="flex-center" style={{ margin: "2rem" }}>
                <p>Drag and drop to reorder list</p>
            </div>
        </div>
    );
}
