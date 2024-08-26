import Back from "../back/Back";
import styles from "./Header.module.css";

export default function Header({ pageName }) {
	return (
		<div className={styles["header-container"]}>
			<Back />
			<h1>{pageName}</h1>
		</div>
	);
}
