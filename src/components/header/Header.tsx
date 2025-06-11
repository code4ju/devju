import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [mobileMenuClass, setMobileMenuClass] = useState("");
	const [burgerClass, setBurgerClass] = useState("");
	//: prevent overflow when mobile nav is active
	const [noflow, setNoflow] = useState("");

	const pages = [
		{
			name: "HOME",
			href: "/",
		},
		{
			name: "CONTACT",
			href: "/contact",
		},
	];

	const location = useLocation().pathname;
	const toggleIsMobile = () => {
		const mobile = !isMobile;
		setIsMobile(mobile);
		setMobileMenuClass(mobile ? "mobile-menu-visible" : "");

		if (mobile) {
			setNoflow("noflow");
			setBurgerClass("merge");
			setTimeout(() => {
				setBurgerClass("cross");
			}, 200);
		} else {
			setNoflow("");
			setBurgerClass("merge");
			setTimeout(() => {
				setBurgerClass("");
			}, 200);
		}
	};

	return (
		<>
			<body className={noflow}>
				<div className="header-wrapper">
					{/* IMAGE */}
					<a
						className="menu-icon"
						href="/">
						<img
							src="/logo-full-xs-white.png"
							alt=""
						/>
					</a>
					{/* DESKTOP NAV */}
					<nav>
						<ul>
							{pages.map((page, index) => (
								<li
									key={`${page.name}-${index}`}
									className={`link ${
										location === page.href
											? "link-active"
											: ""
									}`}>
									<NavLink to={page.href}>
										{page.name}
									</NavLink>
									<div className="link-underline"></div>
								</li>
							))}
						</ul>
					</nav>
					{/* LOGIN */}
					<div className="nav-login">
						<FontAwesomeIcon icon={faUser} />
					</div>
				</div>
				{/* RESPONSIVE MOBILE BURGER */}
				<div
					className={`burger-menu ${burgerClass}`}
					onClick={() => toggleIsMobile()}>
					<div className="burger-top"></div>
					<div className="burger-middle"></div>
					<div className="burger-bottom"></div>
				</div>
				{/* RESPONSIVE MOBILE NAVIGATION */}
				<div className={`mobile-nav ${mobileMenuClass}`}>
					<nav>
						<ul>
							{pages.map((page, index) => (
								<li
									key={`${page.name}-${index}`}
									className={`link ${
										location === page.href
											? "link-active"
											: ""
									}`}>
									<NavLink to={page.href}>
										{page.name}
									</NavLink>
									<div className="link-underline"></div>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</body>
		</>
	);
};
