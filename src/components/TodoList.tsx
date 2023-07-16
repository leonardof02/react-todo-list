import Todo from "./Todo";
import NewTodoInput from "./NewTodoInput";

// TODO: Fix the bottom Screen of todo
// TODO: Round todo container corner
// TODO: Investigate how to controll screen size for mobile and desktop background

export default function TodoList() {
    return (
        <div className="flex-column">
            <NewTodoInput />
            <div style={{ padding: 0 }} className="box">
                <Todo title="Casa de mima" check />
                <Todo title="Casa de mima" />
                <Todo title="Casa de mima" />
                <Todo title="Casa de mima" />
                <div className="todo separated-flex" style={{ padding: "1rem" }}>
                    <p>items left</p>
                    <button>
                        Clear Completed
                    </button>
                </div>
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
