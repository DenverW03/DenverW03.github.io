import ProjectCard from "../project-card/project-card";
import styles from "./project-container.module.css";

export default function ProjectContainer() {
	const cardData = [
    { name: 'platform-syncer', description: 'A platform syncing tool for your videogames!!', languages: 'Rust, JavaScript, HTML, CSS', link: 'https://github.com/DenverW03/platform-syncer' },
    { name: '', description: '', languages: '', link: '' },
    { name: '', description: '', languages: '', link: '' },
  ];

	return(
		<div className={styles["container"]}>
			{cardData.map((data) => (
        <ProjectCard name={data.name} description={data.description} languages={data.languages} link={data.link} />
      ))}
		</div>
	);
}
