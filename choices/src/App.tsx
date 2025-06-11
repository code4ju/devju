import "./App.css";

function App() {
	return (
		<>
			<div className="header-outer">
				<div className="header-content">
					<div className="content-left">
						<h1>choices</h1>
						<p>KULTUR. KINO. KÖLN.</p>
					</div>
					<div className="content-right"></div>
				</div>
				<nav>
					<div className="sm-icons">
						<p>Facebook</p>
						<p>Instagram</p>
						<p>X</p>
					</div>
					<div className="navigation">
						<ul>
							<li>Heute im Kino</li>
							<p>|</p>
							<li>Morgen im Kino</li>
							<p>|</p>
							<li>Neu im Kino</li>
							<p>|</p>
							<li>Forum</li>
							<p>|</p>
							<li>Alle Kinos</li>
							<p>|</p>
							<li>Anmelden</li>
						</ul>
						<div className="header-search">
							<input type="text" />
							<button>Suchen</button>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
}

export default App;
