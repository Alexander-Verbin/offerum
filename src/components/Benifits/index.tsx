import React from "react";
import style from "./Benefits.module.scss";
import { Card } from "../Card";
import smile1 from "../../assets/images/smile1.png";
import smile2 from "../../assets/images/smile2.png";
import smile3 from "../../assets/images/smile3.png";
import smile4 from "../../assets/images/smile4.png";

export const Benifits = () => {
	return (
		<section className={style.Benefits}>
			<div className={`${style.Benefits__container} container`}>
				<div className={style.Benefits__content}>
					<div className={style.Benefits__info}>
						<h2 className={`${style.Benefits__title} h2`}>
							Что даст тебе обучение?
						</h2>
						<div className={style.Benefits__cards}>
							<div className={style.Benefits__card}>
								<Card
									imgSrc={smile1}
									text='Откроешь свой первый криптокошелек и научишься с ним работать'
								/>
							</div>
							<div className={style.Benefits__card}>
								<Card
									imgSrc={smile2}
									text='Поймёшь, как выбирать правильные дропы'
								/>
							</div>
							<div className={style.Benefits__card}>
								<Card
									imgSrc={smile3}
									text='Построишь план по&nbsp;быстрому приумножению заработанных средств'
								/>
							</div>
							<div className={style.Benefits__card}>
								<Card
									imgSrc={smile4}
									text='Узнаешь кто такие холдеры и флипперы'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
