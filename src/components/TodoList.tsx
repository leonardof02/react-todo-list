import { useEffect, useState } from "react";
import Todo from "./Todo";
import NewTodoInput from "./NewTodoInput";
import { FilterMode, Todo as TodoType } from "../types/app";


export default function TodoList() {

    const [todos, setTodos] = useState<TodoType[]>([]);
    const [filterMode, setFilterMode] = useState<FilterMode>("All");

    useEffect( () => {
        const JSONTodos: string | null = localStorage.getItem('todos');
        setTodos( JSONTodos ? JSON.parse(JSONTodos) : [] );
    }, [])


    const handleChange = (newValue: boolean, id: number) => {
        const newTodos = [...todos];
        newTodos[id].checked = newValue;
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const handleSubmit = (value: string, check: boolean) => {
        const newTodo: TodoType = {
            title: value,
            checked: check
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const handleDelete = (todoIndex: number) => {
        setTodos(todos.filter((_todo, index) => todoIndex != index));
        localStorage.setItem("todos", JSON.stringify(todos))
    };

    const deleteCompletedTodos = () => {
        setTodos(filterTodos("Active"));
        localStorage.setItem("todos", JSON.stringify(todos))
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

    const handleDrop = ( idFrom: number, idTo: number ) => {
        const todoFrom = todos[idFrom];
        const newTodos = todos.filter( (_todo, index) => index != idFrom );
        newTodos.splice( idTo, 0, todoFrom );
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

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
                        onDrop={ handleDrop }
                    />
                ))}
                <div
                    className="separated-flex"
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
