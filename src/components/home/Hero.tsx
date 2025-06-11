import "./Hero.scss";

export const Hero = () => {
	const introduction = [
		"I am a Full Stack Developer Apprentice focused on clean, scalable applications. I specialize in building pixel-perfect frontends and robust backend architechtures using JavaScript, React, Node.js and Express.",

		"After the 12-month Full-Stack Development Program at DCI - Digital Career Institute, I deepened my experience at Munich Software Studios, contributing to multiple projects built with React, Vue.js, and Next.js. I collaborated in agile teams, wrote reusable components. and supproted production-ready deployments.",

		"In the past i started by creating content for a startup. And after learning different skills ranging from product management to maintaining the wordpress-webshop, I proposed and executed the redesigning for the companies webshop, resulting in a 20% increase in profit over 2 years and stronger customer retention.",

		"In my spare time, I'm exploring new programming languages and staying active, teaching and dancing salsa and ballroom, my original profession and one of my ongoing passions.",
	];

	const chapters = [
		{
			start: "03/2025",
			end: "05/2025",
			title: "Internship at Munich Software Studios",
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim fugit sint voluptate ab quo molestiae dicta earum. Molestias nisi quidem molestiae provident, repellat dolore ducimus animi ipsam minus impedit doloremque eum cupiditate fuga nulla quisquam, quaerat dolorum optio magnam. Amet error consectetur dolores quis dolorem hic sit, laborum enim!",
			tech: [
				"Javascript",
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
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim fugit sint voluptate ab quo molestiae dicta earum. Molestias nisi quidem molestiae provident, repellat dolore ducimus animi ipsam minus impedit doloremque eum cupiditate fuga nulla quisquam, quaerat dolorum optio magnam. Amet error consectetur dolores quis dolorem hic sit, laborum enim!",
			tech: [
				"HTML",
				"CSS",
				"SCSS",
				"Javascript",
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
			start: "06/2022",
			end: "01/2023",
			title: "Redesign Wordpress Onlineshop at Libacco.de",
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim fugit sint voluptate ab quo molestiae dicta earum. Molestias nisi quidem molestiae provident, repellat dolore ducimus animi ipsam minus impedit doloremque eum cupiditate fuga nulla quisquam, quaerat dolorum optio magnam. Amet error consectetur dolores quis dolorem hic sit, laborum enim!",
			tech: ["Wordpress", "HTML", "CSS", "Javascrip"],
		},
		{
			start: "01/2023",
			end: "01/2024",
			title: "Maintain Wordpress Onlineshop at Libacco.de",
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus enim fugit sint voluptate ab quo molestiae dicta earum. Molestias nisi quidem molestiae provident, repellat dolore ducimus animi ipsam minus impedit doloremque eum cupiditate fuga nulla quisquam, quaerat dolorum optio magnam. Amet error consectetur dolores quis dolorem hic sit, laborum enim!",
			tech: ["Wordpress", "HTML", "CSS", "Javascrip"],
		},
	];
	return (
		<>
			<div className="hero-wrapper">
				<div className="teaser-placeholder"></div>
				<div className="teaser">
					<h1 className="name">Ju-Yong Chang</h1>
					<p className="job-description">
						Software Developer | Frontend && Backend
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
