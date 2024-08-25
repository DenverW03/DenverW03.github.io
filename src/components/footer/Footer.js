import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
	return(
		<div className={styles["footer-container"]}>
				<Link href="https://github.com/DenverW03" className={styles["footer-item"]}>GITHUB</Link>
				<Link href="https://www.linkedin.com/in/denver-whiteley-a1b5aa264/" className={styles["footer-item"]}>LINKEDIN</Link>
		</div>
	);
}
