import reactLogo from "../assets/react.svg";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Apply dark mode when state changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={reactLogo} alt="Company Logo" />
                <h1 className="brand-name">PoraPoraKhela</h1>
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <a href="/">Home</a>
                <a href="/courses">Courses</a>
                <a href="/quizzes">Quizzes</a>
            </div>

            {/* Dark Mode Toggle */}
            <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle Dark Mode"
            >
                {darkMode ? "🌙" : "☀️"}
            </button>

            {/* Mobile Menu Toggle */}
            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                ☰
            </button>
        </nav>
    );
}

export default Navbar;
