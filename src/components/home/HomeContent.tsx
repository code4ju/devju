import "./HomeContent.scss";
import { Hero } from "./Hero";

export const HomeContent = () => {
	return (
		<>
			<div className="outer">
				<div className="inner home-wrapper">
					<Hero />
				</div>
			</div>
		</>
	);
};
