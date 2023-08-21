import React from "react";
import styles from "./Hero.module.scss";

export const Hero = () => {
	return (
		<section className={styles.Hero}>
			<div className={`${styles.Hero__container} container`}>
				<div className={styles.Hero__content}>
					<div className={styles.Hero__info}>
						<h1 className={`${styles.Hero__title} h1`}>
							Не упусти возможность войти в{" "}
							<b className='bold'>прибыльную нишу</b>
						</h1>
						<p className={`${styles.Hero__text} text-primary`}>
							Получи все нужные навыки для заработка на NFT всего за 28 дней!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
