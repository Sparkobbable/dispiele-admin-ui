import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Menu() {
	const navigate = useNavigate();

	const { pathname } = useLocation();

	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		setIsHome(pathname === "/");
	}, [pathname]);

	function navigateTo(path) {
		navigate(path);
	}

	return (
		<>
			<div className="flex flex-col justify-between h-full bg-grey opacity-90">
				<div className="block h-3/4">
					<div
						className={
							!isHome
								? "hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey flex flex-col justify-center"
								: "font-bold h-1/10 border-b-2 border-grey flex flex-col justify-center"
						}
						onClick={() => navigateTo("/")}
					>
						<p className="text-center -translate-y-1/4">
							{isHome ? "Menu" : "Home"}
						</p>
					</div>
					{/* <div
						onClick={() => navigateTo("/about")}
						className="hover:bg-bgdark hover:cursor-pointer h-1/10 border-b-2 border-grey flex flex-col justify-center"
					>
						<p className="text-center -translate-y-1/4">Über uns</p>
					</div> */}
				</div>
				<img src={logo} alt="Deutsch-Irische Spielemanufaktur"></img>
			</div>
		</>
	);
}
