import React from "react";
import style from "./Modal.module.scss";
import { ButtonSecondary } from "../ButtonSecondary";

type PropsType = {
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
};

export const Modal = ({ openModal, setOpenModal }: PropsType) => {
	const [value, setValue] = React.useState("");
	return (
		<div className={openModal ? `${style.Modal} ${style.active}` : style.Modal}>
			<div
				className={style.Modal__background}
				onClick={() => setOpenModal(!openModal)}></div>
			<dialog className={style.Modal__dialog}>
				<button
					onClick={() => setOpenModal(!openModal)}
					type='button'
					className={style.Modal__close}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='23'
						height='23'
						viewBox='0 0 23 23'
						fill='none'>
						<path
							d='M14.1439 11.5L22.2064 3.45623C22.5594 3.10316 22.7578 2.6243 22.7578 2.12498C22.7578 1.62567 22.5594 1.1468 22.2064 0.793732C21.8533 0.440662 21.3744 0.24231 20.8751 0.24231C20.3758 0.24231 19.897 0.440662 19.5439 0.793732L11.5001 8.85623L3.45638 0.793732C3.10331 0.440662 2.62445 0.24231 2.12513 0.24231C1.62581 0.24231 1.14695 0.440662 0.79388 0.793732C0.44081 1.1468 0.242458 1.62567 0.242458 2.12498C0.242458 2.6243 0.44081 3.10316 0.79388 3.45623L8.85638 11.5L0.79388 19.5437C0.618139 19.718 0.47865 19.9254 0.383459 20.1539C0.288267 20.3824 0.239258 20.6275 0.239258 20.875C0.239258 21.1225 0.288267 21.3676 0.383459 21.5961C0.47865 21.8245 0.618139 22.0319 0.79388 22.2062C0.968185 22.382 1.17556 22.5215 1.40405 22.6167C1.63253 22.7118 1.87761 22.7609 2.12513 22.7609C2.37265 22.7609 2.61773 22.7118 2.84621 22.6167C3.0747 22.5215 3.28207 22.382 3.45638 22.2062L11.5001 14.1437L19.5439 22.2062C19.7182 22.382 19.9256 22.5215 20.154 22.6167C20.3825 22.7118 20.6276 22.7609 20.8751 22.7609C21.1227 22.7609 21.3677 22.7118 21.5962 22.6167C21.8247 22.5215 22.0321 22.382 22.2064 22.2062C22.3821 22.0319 22.5216 21.8245 22.6168 21.5961C22.712 21.3676 22.761 21.1225 22.761 20.875C22.761 20.6275 22.712 20.3824 22.6168 20.1539C22.5216 19.9254 22.3821 19.718 22.2064 19.5437L14.1439 11.5Z'
							fill='white'
						/>
					</svg>
				</button>
				<div className={style.Modal__content}>
					<div className={style.Modal__info}>
						<h2 className={`${style.Modal__title} modal-title`}>
							Начни прямо сейчас!
						</h2>
						<p className={`${style.Modal__text} modal-text`}>
							Получи все нужные навыки для заработка на NFT всего за 28 дней!
						</p>
					</div>
					<form action=''>
						<div className={style.Modal__form}>
							<input
								onChange={(e) => setValue(e.target.value)}
								className={`${style.Modal__input} input`}
								name='Email'
								type='email'
								placeholder='Ваш email'
								value={value}
							/>
							<ButtonSecondary text='Оплатить' />
						</div>
					</form>
				</div>
			</dialog>
		</div>
	);
};
