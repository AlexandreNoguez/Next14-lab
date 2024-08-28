// app/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>MyApp</h1>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    fontSize: "1.5rem",
  },
  nav: {
    display: "flex",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "2rem",
    fontSize: "1.1rem",
  },
};
