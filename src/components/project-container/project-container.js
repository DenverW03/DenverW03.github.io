import ProjectCard from "../project-card/project-card";
import styles from "./project-container.module.css";

export default function ProjectContainer() {
	return(
		<div className={styles["container"]}>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
}
