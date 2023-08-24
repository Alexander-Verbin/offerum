import React from "react";
import style from "./Hero.module.scss";
import manMob from "../../assets/images/manMob.png";
import man from "../../assets/images/man.png";
import { ButtonPrimary } from "../ButtonPrimary";

type PropsType = {
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
};

export const Hero = ({ openModal, setOpenModal }: PropsType) => {
	return (
		<section className={style.Hero}>
			<div className={`${style.Hero__container} container`}>
				<div className={style.Hero__info}>
					<h1 className={`${style.Hero__title} h1`}>
						Не упусти
						<br /> возможность войти в <b className='bold'>прибыльную нишу</b>
					</h1>
					<div className={style.Hero__abs}>
						<picture>
							<source media='(max-width: 767px)' srcSet={manMob} />
							<img className={style.Hero__man} src={man} alt='man' />
						</picture>
					</div>
					<p className={`${style.Hero__text} text-primary`}>
						Получи все нужные навыки для заработка на NFT всего за 28 дней!
					</p>
					<div className={style.Hero__button}>
						<ButtonPrimary
							openModal={openModal}
							setOpenModal={setOpenModal}
							text='Начать зарабатывать на NFT'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
