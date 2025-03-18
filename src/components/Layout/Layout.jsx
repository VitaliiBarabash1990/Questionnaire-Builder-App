import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import s from "./Layout.module.css";

export const Layout = () => {
	return (
		<>
			<Header />
			<div className={s.wrapper}>
				<Outlet fallback={null} />
			</div>
		</>
	);
};
