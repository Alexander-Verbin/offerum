import React from "react";
import style from "./Header.module.scss";
import { Nav } from "../Nav";
import { ButtonAccent } from "../ButtonAccent";

export const Header = () => {
	const [openMenu, setOpenMenu] = React.useState(false);
	return (
		<header
			className={openMenu ? `${style.Header} ${style.active}` : style.Header}>
			<div className={`${style.Header__container} container`}>
				<div className={style.Header__content}>
					<a href='/' className={style.Header__logo}>
						<svg
							width='128'
							height='55'
							viewBox='0 0 128 55'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='Frame 3296' clipPath='url(#clip0_2_734)'>
								<circle
									id='Ellipse 26'
									cx='21.4021'
									cy='27.4021'
									r='20.026'
									transform='rotate(-25.7323 21.4021 27.4021)'
									fill='url(#paint0_radial_2_734)'
									stroke='url(#paint1_radial_2_734)'
								/>
								<g id='NFT'>
									<path
										d='M78.5782 13V42H75.0937L58.891 19.2305H58.6006V42H55V13H58.4845L74.7453 35.8262H75.0356V13H78.5782Z'
										fill='white'
									/>
									<path
										d='M84.5565 42V13H102.385V16.1152H88.1571V25.9141H101.05V29.0293H88.1571V42H84.5565Z'
										fill='white'
									/>
									<path
										d='M105.699 16.1152V13H128V16.1152H118.65V42H115.049V16.1152H105.699Z'
										fill='white'
									/>
								</g>
							</g>
							<defs>
								<radialGradient
									id='paint0_radial_2_734'
									cx='0'
									cy='0'
									r='1'
									gradientUnits='userSpaceOnUse'
									gradientTransform='translate(21.7179 8.77089) rotate(90.4621) scale(39.1585)'>
									<stop stopColor='#DEA8FF' />
									<stop offset='0.445112' stopColor='#9D6AD9' />
									<stop offset='1' stopColor='#7A2BF6' />
								</radialGradient>
								<radialGradient
									id='paint1_radial_2_734'
									cx='0'
									cy='0'
									r='1'
									gradientUnits='userSpaceOnUse'
									gradientTransform='translate(21.8389 10.37) rotate(80.1061) scale(38.1251)'>
									<stop stopColor='#E2C1FF' stopOpacity='0.53' />
									<stop offset='1' stopColor='#853DF2' stopOpacity='0.55' />
								</radialGradient>
								<clipPath id='clip0_2_734'>
									<rect width='128' height='55' fill='white' />
								</clipPath>
							</defs>
						</svg>
					</a>
					<div className={style.Header__controls}>
						<Nav links={["Главная", "Что даст обучение"]} />
						<div className={style.Header__button}>
							<ButtonAccent text='Личный кабинет' />
						</div>
					</div>
					<button
						onClick={() => {
							setOpenMenu(!openMenu);
						}}
						type='button'
						className={
							openMenu
								? `${style.Header__burger} ${style.open}`
								: style.Header__burger
						}>
						<span className={style.Header__burger_item}></span>
					</button>
				</div>
			</div>
		</header>
	);
};
