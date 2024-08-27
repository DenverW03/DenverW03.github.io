import Header from "@/components/header/Header";
import ProjectContainer from "@/components/project-container/project-container";
import styles from "./Projects.module.css";

export default function Projects() {
	return(
		<div className={styles["container"]}>
			<Header pageName="PROJECTS" />
			<ProjectContainer />
		</div>
	);
}
