import styles from "./project-card.module.css";

export default function ProjectCard({name, description, languages, link}) {
	return(
		<div className={styles["card"]}>
			<h2>{name}</h2>
			<div className={styles["project-desc-container"]}>
				<p>{description}</p>
				<p>Languages: {languages}</p>
			</div>
		</div>
	);
}
