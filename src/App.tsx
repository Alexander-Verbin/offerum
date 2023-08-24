import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benifits } from "./components/Benifits";
import { Modal } from "./components/Modal";

export const App = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Hero openModal={open} setOpenModal={setOpen} />
				<Benifits />
				<Modal openModal={open} setOpenModal={setOpen} />
			</main>
		</div>
	);
};
