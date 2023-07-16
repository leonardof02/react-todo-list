import Todo from "./Todo";
import NewTodoInput from "./NewTodoInput";

export default function TodoList() {
    return (
        <div className="flex-column">
            <NewTodoInput />
            <div style={{ padding: 0 }} className="box">
                <Todo title="Casa de mima" check />
                <Todo title="Casa de mima" />
                <Todo title="Casa de mima" />
                <Todo title="Casa de mima" />
            </div>
            <div className="box flex-center options">
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div className="flex-center" style={{margin: "2rem"}}>
                <p>Drag and drop to reorder list</p>
            </div>
        </div>
    );
}
