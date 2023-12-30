import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import App from "./App";

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <App />,
			errorElement: (
				<Error errorcode="404" errormessage="Element nicht gefunden." />
			),
			children: [
				{
					path: "home",
					element: <Home />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
