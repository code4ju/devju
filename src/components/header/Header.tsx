import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

export const Header = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [mobileMenuClass, setMobileMenuClass] = useState("");
	const [burgerClass, setBurgerClass] = useState("");

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
			setBurgerClass("merge");
			setTimeout(() => {
				setBurgerClass("cross");
			}, 200);
		} else {
			setBurgerClass("merge");
			setTimeout(() => {
				setBurgerClass("");
			}, 200);
		}
	};

	return (
		<>
			<div className="outer">
				<div className="inner header-wrapper">
					<a
						className="menu-icon"
						href="/">
						<img
							src="/logo-m.png"
							alt=""
						/>
					</a>

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
					<div className="nav-login">
						<FontAwesomeIcon icon={faUser} />
					</div>

					<div
						className={`burger-menu ${burgerClass}`}
						onClick={() => toggleIsMobile()}>
						<div className="burger-top"></div>
						<div className="burger-middle"></div>
						<div className="burger-bottom"></div>
					</div>
				</div>
			</div>
			<div className={`mobile-nav ${mobileMenuClass}`}>
				<nav>
					<ul>
						{pages.map((page, index) => (
							<li
								key={`${page.name}-${index}`}
								className={`link ${
									location === page.href ? "link-active" : ""
								}`}>
								<NavLink to={page.href}>{page.name}</NavLink>
								<div className="link-underline"></div>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};
