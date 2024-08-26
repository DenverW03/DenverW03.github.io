import Back from "../back/Back";
import styles from "./Header.module.css";

export default function Header({ pageName }) {
	return (
		<div className={styles["header-container"]}>
			<Back />
			<div className={styles["text-container"]}>{pageName}</div>
		</div>
	);
}
