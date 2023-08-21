import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benifits } from "./components/Benifits";

export const App = () => {
	return (
		<div className='App'>
			<Header />
			<main className='main'>
				<Hero />
				<Benifits />
			</main>

			{/* <div className='dark-background'>
				<div className='dark-background__abs'></div>
				<div className='dark-background__content'>
					
				</div>
			</div> */}
		</div>
	);
};
