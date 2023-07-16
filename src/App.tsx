import desktopImageDark from "./assets/images/bg-desktop-dark.jpg";
import desktopImageLight from "./assets/images/bg-desktop-light.jpg";
import mobileImageDark from "./assets/images/bg-mobile-dark.jpg";
import mobileImageLight from "./assets/images/bg-mobile-light.jpg";

import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";

import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import ThemeProvider from "./components/ThemeProvider";

import "./index.css";
import "./App.css";

function App() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [imageUrl, setImageUrl] = useState("");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width < 750 && theme === "dark") {
                setImageUrl(mobileImageDark);
            } else if (width < 750 && theme === "light") {
                setImageUrl(mobileImageLight);
            } else if (width >= 750 && theme === "dark") {
                setImageUrl(desktopImageDark);
            } else if (width >= 750 && theme === "light") {
                setImageUrl(desktopImageLight);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [theme]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <img
                    className="background-image"
                    src={imageUrl}
                    alt="Background Picture"
                />
                <div className="todo-list-container">
                    <div className="separated-flex margin">
                        <h1>TODO</h1>
                        <button id="theme-changer" onClick={changeTheme}>
                            <img src={theme === "dark" ? sunIcon : moonIcon} alt="Sun icon" />
                        </button>
                    </div>
                    <TodoList />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
