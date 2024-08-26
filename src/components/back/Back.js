'use client';
import { useRouter } from "next/navigation";
import styles from "./Back.module.css";
import Image from "next/image"

export default function Back() {
	const router = useRouter();

	return(
		<button onClick={() => router.back()} className={styles["back-container"]}>
			<Image src={"/back.webp"} alt={"back"} width={30} height={30} />
		</button>
	);
}
