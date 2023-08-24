import React from "react";
import style from "./ButtonSecondary.module.scss";

type PropsType = {
	text: string;
};

export const ButtonSecondary = ({ text }: PropsType) => {
	return (
		<button type='submit' className={style.ButtonSecondary}>
			{text}
		</button>
	);
};
