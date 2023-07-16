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
        </div>
    );
}
