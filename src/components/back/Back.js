'use client';
import { useRouter } from "next/navigation";
import styles from "./Back.module.css";
import Image from "next/image"
import { useContext } from "react";
import { ThemeContext } from "../theme-toggle/ThemeContext";

export default function Back() {
	const router = useRouter();
	const { theme } = useContext(ThemeContext);

	return(
		<button onClick={() => router.back()} className={styles["back-container"]}>
			{theme === 'light' ? (
                <Image src="/back-light.png" alt="Back" width={30} height={30} />
            ) : (
                <Image src="/back-dark.png" alt="Back" width={30} height={30} />
            )}

		</button>
	);
}
