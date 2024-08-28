'use client';

import Image from "next/image";
import styles from "./ThemeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button onClick={toggleTheme} className={theme === 'light' ? styles["toggle-button-light"] : styles["toggle-button-dark"]}>
			{theme === 'light' ? (
                <Image src="/theme-toggle-light.png" alt="Light Mode" width={30} height={30} />
            ) : (
                <Image src="/theme-toggle-dark.png" alt="Dark Mode" width={30} height={30} />
            )}
		</button>
	);
}
