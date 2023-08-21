import React from "react";
import styles from "./Hero.module.scss";
import manMob from "../../assets/images/manMob.png";
import man from "../../assets/images/man.png";
import { ButtonPrimary } from "../ButtonPrimary";

export const Hero = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<section className={styles.Hero}>
			<div className={`${styles.Hero__container} container`}>
				<div className={styles.Hero__info}>
					<h1 className={`${styles.Hero__title} h1`}>
						Не упусти возможность войти в{" "}
						<b className='bold'>прибыльную нишу</b>
					</h1>
					<div className={styles.Hero__abs}>
						<picture>
							<source media='(max-width: 767px)' srcSet={manMob} />
							<img className={styles.Hero__man} src={man} alt='man' />
						</picture>
					</div>
					<p className={`${styles.Hero__text} text-primary`}>
						Получи все нужные навыки для заработка на NFT всего за 28 дней!
					</p>
					<div className={styles.Hero__button}>
						<ButtonPrimary
							openModal={open}
							setOpenModal={setOpen}
							text='Начать зарабатывать на NFT'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
