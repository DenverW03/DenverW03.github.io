import ProjectCard from "../project-card/project-card";
import styles from "./project-container.module.css";

export default function ProjectContainer() {
	const cardData = [
    { name: 'platform-syncer', description: 'A platform syncing tool for your videogames!! Featuring both the frontend client application and the self-hostable backend', languages: 'Rust, JavaScript, HTML, CSS', link: 'https://github.com/DenverW03/platform-syncer' },
    { name: 'third year project', description: 'My dissertation project, a research project into swarm robotics, developing a new algorithm for the problem - "Protection of a VIP Agent using a Convoy Swarm with Incommunicado Constraints", awarded a mark of 100%', languages: 'C++, Python', link: 'https://github.com/DenverW03/ThirdYearProject' },
    { name: 'ultrasonic mapper', description: 'A cheap, short-range alternative to LIDAR made as a companion to a grander robotics project I was working on.', languages: 'Java, Embedded C (on the microcontroller)', link: 'https://github.com/DenverW03/UltrasonicMapper' },
  ];

	return(
		<div className={styles["container"]}>
			{cardData.map((data) => (
        <ProjectCard name={data.name} description={data.description} languages={data.languages} link={data.link} />
      ))}
		</div>
	);
}
