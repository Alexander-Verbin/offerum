import React from "react";
import styles from "./Nav.module.scss";

type PropsType = {
	links: Array<string>;
};

export const Nav = ({ links }: PropsType) => {
	return (
		<nav className={styles.Nav}>
			<ul className={styles.Nav__list}>
				{links.map((item) => (
					<li className={styles.Nav__item}>
						<a className={`${styles.Nav__link} text-primary`} href='#'>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
