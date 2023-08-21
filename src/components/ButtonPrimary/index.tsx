import React from "react";
import styles from "./ButtonPrimary.module.scss";

type PropsType = {
	text: string;
	openModal: boolean;
	setOpenModal: (open: boolean) => void;
};

export const ButtonPrimary = ({ text, openModal, setOpenModal }: PropsType) => {
	return (
		<button
			onClick={() => setOpenModal(!openModal)}
			type='button'
			className={styles.ButtonPrimory}>
			{text}
		</button>
	);
};
