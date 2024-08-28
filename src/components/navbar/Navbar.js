import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function Navbar() {
	return(
		<div className={styles['nav-container']}>
			<Link href="./about" className={styles['nav-item']}>
				ABOUT
			</Link>
			<Link href="./work" className={styles['nav-item']}>
				WORK
			</Link>
			<Link href="./projects" className={styles['nav-item']}>
				PROJECTS
			</Link>

			<div className={styles['theme-toggle-container']}>
				<ThemeToggle />
			</div>
		</div>
	);
}
