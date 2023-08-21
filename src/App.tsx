import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export const App = () => {
	return (
		<div className='App'>
			<div className='dark-background'>
				<div className='dark-background__abs'></div>
				<div className='dark-background__content'>
					<Header />
					<Hero />
				</div>
			</div>
		</div>
	);
};
