import React from "react";
import styles from "./ButtonSecondary.module.scss";

type PropsType = {
	text: string;
};

export const ButtonSecondary = ({ text }: PropsType) => {
	return (
		<button type='submit' className={styles.ButtonSecondary}>
			{text}
		</button>
	);
};
