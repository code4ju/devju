import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);
