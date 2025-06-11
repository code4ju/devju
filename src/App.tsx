import "./App.css";
import { Header } from "./components/header/Header";
import "./styles/global.scss";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
