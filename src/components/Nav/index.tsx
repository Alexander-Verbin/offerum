import React from "react";
import style from "./Nav.module.scss";

type PropsType = {
	links: Array<string>;
};

export const Nav = ({ links }: PropsType) => {
	return (
		<nav className={style.Nav}>
			<ul className={style.Nav__list}>
				{links.map((item, index) => (
					<li key={index} className={style.Nav__item}>
						<a className={`${style.Nav__link} text-primary`} href='#'>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
