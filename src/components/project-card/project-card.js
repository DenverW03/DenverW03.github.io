import styles from "./project-card.module.css";
import Link from "next/link";

export default function ProjectCard({key, name, description, languages, link}) {
	return(
		<div className={styles["card"]}>
			<h2>{name}</h2>
			<div className={styles["project-desc-container"]}>
				<p>{description}</p>
				<p>Languages: {languages}</p>
			</div>
			<div className={styles["link-container"]}>
				<Link href={link} className={styles["link"]}>check it out!</Link>
			</div>
		</div>
	);
}
