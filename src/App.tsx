import desktopBackgroundImage from "./assets/images/bg-desktop-dark.jpg";
import mobileBackgroundImage from "./assets/images/bg-mobile-dark.jpg";

import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";

import "./index.css";
import "./styles/dark-theme.css";
import "./App.css";

function App() {
    return (
        <>
            <main>
                <img
                    className="background-image"
                    src={mobileBackgroundImage}
                    alt="Background Picture"
                />
                <div className="todo-list-container">
                    <div className="separated-flex">
                        <h1>TODO</h1>
                        <button>
                            <img src={sunIcon} alt="Sun icon" />
                        </button>
                    </div>
                    < TodoList />
                </div>
            </main>
        </>
    );
}

export default App;
