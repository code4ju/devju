import "./Hero.scss";

export const Hero = () => {
	const introduction = [
		[
			"I am a Junior Full Stack Developer focused on clean, scalable applications. I specialize in building pixel-perfect frontends and robust backend architechtures using JavaScript, React, Node.js and Express.",
			"After the 12-month Full-Stack Development Program at DCI - Digital Career Institute, I deepened my experience at Munich Software Studios, contributing to multiple projects built with React, Vue.js, and Next.js. I collaborated in agile teams, wrote reusable components and supported production-ready deployments.",
			"In the past I started by creating content for a startup. And after learning different skills ranging from product management to maintaining the wordpress-webshop, I proposed and executed the redesigning for the companies webshop, resulting in a 200% increase in profit over 2 years and stronger customer retention.",
			"In my spare time, I'm learning python and staying active, teaching and dancing salsa and ballroom.",
		],
		[
			"Ich bin ein Full-Stack-Developer in Ausbildung, mit dem Fokus auf sauberen, skalierbaren Anwendungen. Mein Spezialgebiet liegt in der Entwicklung pixelgenauer Frontends und stabiler Backend-Architekturen – unter Einsatz von JavaScript, React, Node.js und Express.",
			"Nach meinem 12-monatigen Full-Stack-Development-Programm am DCI – Digital Career Institute – konnte ich meine Fähigkeiten bei Munich Software Studios weiter vertiefen. Dort arbeitete ich an mehreren Projekten mit React, Vue.js und Next.js mit, entwickelte wiederverwendbare Komponenten und unterstützte produktionsreife Deployments – alles in agilen Teams.",
			"Zuvor war ich bei einem Startup tätig, wo ich zunächst Inhalte erstellte und verschiedene Aufgaben übernahm – vom Produktmanagement bis zur Pflege des WordPress-Shops. Schließlich schlug ich eine komplette Neugestaltung des Webshops vor und setzte diese erfolgreich um. Das Ergebnis: Eine Umsatzsteigerung von 200 % innerhalb von zwei Jahren sowie deutlich höhere Kundenbindung.",
			"In meiner Freizeit lerne ich Python und bleibe aktiv – ich unterrichte und tanze Salsa sowie Standard- und Lateinamerikanische Tänze.",
		],
	];

	const chapters = [
		{
			start: "03/2025",
			end: "05/2025",
			title: "Internship at Munich Software Studios",
			text: "During my internship at Munich Software Studios, I contributed to full-stack development projects in a fast-paced, agile environment. My work involved building responsive, user-friendly interfaces using React and Next.js, implementing server-side logic with Node.js and Express, and integrating MongoDB databases. I also participated in UI/UX refinement, delivering pixel-perfect components and proposing interaction improvements. This experience sharpened my ability to write clean, modular code, and strengthened my problem-solving and collaboration skills in real-world production workflows.",
			tech: [
				"JavaScript",
				"Typescript",
				"React",
				"Next.js",
				"Tailwind",
				"SCSS",
				"Node",
				"Express",
				"MongoDB",
				"Mongoose",
			],
		},
		{
			start: "03/2024",
			end: "03/2025",
			title: "Bootcamp Fullstack Development at DCI",
			text: "At DCI, I completed a comprehensive 12-month full-stack development program focused on modern web technologies. The curriculum covered HTML, CSS, JavaScript, React, Node.js, Express and MongoDB, along with tools like GitHub, Tailwind and Bootstrap. Through project-based learning and agile methodologies, I built scalable frontends and robust backend systems. The program also included career coaching and soft-skill development, preparing me to work confidently in team environments and technical settings.",
			tech: [
				"HTML",
				"CSS",
				"SCSS",
				"JavaScript",
				"React",
				"Tailwind",
				"Bootstrap",
				"Node",
				"Express",
				"MongoDB",
				"Mongoose",
			],
		},
		{
			start: "01/2023",
			end: "01/2024",
			title: "Maintain Wordpress Onlineshop at Libacco.de",
			text: "Following the redesign, I continued maintaining and optimizing the WordPress webshop. I handled content updates, plugin integrations and bug fixes. My role included ongoing performance monitoring and improvements, helping the platform remain stable, secure, and customer-friendly",
			tech: ["Wordpress", "HTML", "CSS", "JavaScript"],
		},
		{
			start: "06/2022",
			end: "01/2023",
			title: "Redesign Wordpress Onlineshop at Libacco.de",
			text: "I initiated ad led the complete redesign of Libacco's WordPress-based webshop. From design concept to final deployment, I implemented a more intuitive and visually appealing layout using WordPress with additional HTML, CSS, and JavaScript. The redesign resulted in a 200% increase in revenue over two years and significantly improved customer retention by enhanching the shopping experience.",
			tech: ["Wordpress", "HTML", "CSS", "JavaScript"],
		},
	];
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
						{introduction.map((intro, index) => (
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
									<h3>{chapter.title}</h3>
									<p>{chapter.text}</p>
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
