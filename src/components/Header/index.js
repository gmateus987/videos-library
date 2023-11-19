import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>MetFlix</span>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Library</a>
                <a href="/#">About Us</a>
            </nav>
        </header>
    )
}

export default Header;
