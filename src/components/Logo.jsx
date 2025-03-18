import { NavLink } from "react-router-dom";

export const Logo = () => {
	return (
		<NavLink to="/">
			<img src="./logo.png" alt="Logo" width="149" height="50" />
		</NavLink>
	);
};
