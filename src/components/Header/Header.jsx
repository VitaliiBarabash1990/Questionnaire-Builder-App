import { Logo } from "../Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useMemo } from "react";
import s from "./Header.module.css";

export const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const title = useMemo(() => {
		switch (location.pathname) {
			case "/":
				return "Quiz Catalog";
			case "/newQuiz":
				return "Add Quiz";

			default:
				return "Edit Quiz";
		}
	}, [location.pathname]);

	const isMobile = useMediaQuery({
		query: "(max-width: 620px)",
	});

	return (
		<div className={s.HeaderSection}>
			<div className={s.HeaderWrapper}>
				<Logo />
				{/* Check when size is mobile and location is not 'Dashboard' =>> render title */}
				{isMobile && title !== "Quiz Catalog" && (
					<h1 className={s.Title}>{title}</h1>
				)}
				{!isMobile && <h1 className={s.Title}>{title}</h1>}
				{title === "Quiz Catalog" && (
					<button className={s.Button} onClick={() => navigate("/newQuiz")}>
						Add Quiz
					</button>
				)}
			</div>
		</div>
	);
};
