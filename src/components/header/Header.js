import Back from "../back/Back";
import styles from "./Header.module.css";
import ThemeToggle from "../theme-toggle/ThemeToggle";

export default function Header({ pageName }) {
	return (
		<div className={styles["header-container"]}>
			<Back />
			<div className={styles["text-container"]}>{pageName}</div>
		<div className={styles["right-spacer"]}>
			<ThemeToggle />
		</div>
		</div>
	);
}
