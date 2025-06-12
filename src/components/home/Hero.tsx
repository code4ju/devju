import "./Hero.scss";
import { introduction } from "../../texts/cvIntroduction.ts";
import { chapters } from "../../texts/cvChapters.ts";
export const Hero = () => {
	return (
		<>
			<div className="hero-wrapper">
				<div className="teaser-placeholder"></div>
				<div className="teaser">
					<div className="teaser-top">
						<h1>Ju-Yong Chang</h1>
						<p className="job-description">
							Software Developer | Front & Backend
						</p>
						{/* <div className="intro-text"> */}
						<p>
							I build accessible, pixel-perfect
							<br />
							digital experiences for the web.
						</p>

						{/* </div> */}
						<p>Let's chat...</p>
					</div>
					<div className="teaser-icons">
						<img
							src="/vscode-icons_file-type-vscode.svg"
							alt=""
						/>
						<img
							src="/logos_git-icon.svg"
							alt=""
						/>
						<img
							src="/vscode-icons_file-type-html.svg"
							alt=""
						/>
						<img
							src="/vscode-icons_file-type-css.svg"
							alt=""
						/>
						<img
							src="/logos_sass.svg"
							alt=""
						/>
						<img
							src="/vscode-icons_file-type-tailwind.svg"
							alt=""
						/>
						<img
							src="/logos_bootstrap.svg"
							alt=""
						/>
						<img
							src="/vscode-icons_file-type-js-official.svg"
							alt=""
						/>
						<img
							src="/logos_react.svg"
							alt=""
						/>
					</div>
				</div>
				<main>
					<section className="introduction">
						{introduction.de.map((intro, index) => (
							<p key={`${intro[22]}-${index}}`}>{intro}</p>
						))}
					</section>
					<section className="timeline">
						{chapters.map((chapter) => (
							<div className="chapter">
								<div className="time">
									<p>
										{chapter.start} - {chapter.end}
									</p>
								</div>
								<div className="chapter-content">
									<h3>{chapter.title.en}</h3>
									<p>{chapter.text.en}</p>
									<div className="techstack">
										{chapter.tech.map((i) => (
											<p>{i}</p>
										))}
									</div>
								</div>
							</div>
						))}
					</section>
				</main>
			</div>
		</>
	);
};
