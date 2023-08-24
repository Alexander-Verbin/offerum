import React from "react";
import style from "./ButtonAccent.module.scss";

type PropsType = {
	text: string;
	isActive?: boolean;
};

export const ButtonAccent = ({ text }: PropsType) => {
	const [active, setActive] = React.useState(false);
	return (
		<button
			type='button'
			className={
				active ? `${style.ButtonAccent} ${style.active}` : style.ButtonAccent
			}
			onClick={() => setActive(!active)}>
			{text}
		</button>
	);
};
