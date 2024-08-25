import Navbar from "@/components/navbar/Navbar";
import styles from "./Home.module.css";
import Footer from "@/components/footer/Footer";

export default function Home() {
	return (
    <>
			<Navbar></Navbar>

      <div className={styles["hero-container"]}>
        <div className="intro-text-box">
          <h1>Hi! I'm Denver.</h1>
          <div className="intro-text">
            I'm a <b>full stack</b> developer who likes to work closely with you to understand what you need.<br />
            I like to produce an intuitive <b>user experience</b> to make services a pleasure to use.<br />
            I have experience in fields ranging from <b>robotics</b> to <b>full stack</b> applications.
          </div>
        </div>
      </div>

			<Footer></Footer>
		</>
	);
}
