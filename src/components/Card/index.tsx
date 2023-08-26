import React from "react";
import style from "./Card.module.scss";

type PropsType = {
	imgSrc: string;
	text: string;
};

export const Card = ({ imgSrc, text }: PropsType) => {
	return (
		<div className={style.Card}>
			<img
				loading='lazy'
				className={style.Card__image}
				src={imgSrc}
				alt='smile'
			/>
			<p className={`${style.Card__text} text-card`}>{text}</p>
		</div>
	);
};
