import React from "react";
import styles from "./ButtonAccent.module.scss";

type PropsType = {
	text: string;
	isActive?: boolean;
};

export const ButtonAccent = ({ text }: PropsType) => {
	const [active, setActive] = React.useState(false);
	const clickAction = (active: boolean) => {
		setActive(!active);
	};
	return (
		<button
			type='button'
			className={
				active ? `${styles.ButtonAccent} ${styles.active}` : styles.ButtonAccent
			}
			onClick={() => clickAction(active)}>
			{text}
		</button>
	);
};
