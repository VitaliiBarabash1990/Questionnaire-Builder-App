import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CreateQuiz, EditQuiz, Catalog, NotFoundPage } from "./pages";

export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Catalog />} />
					<Route path="/editQuiz/:id" element={<EditQuiz />} />
					<Route path="/newQuiz" element={<CreateQuiz />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
};
