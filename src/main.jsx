import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
	<PersistGate loading={null} persistor={persistor}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</PersistGate>
);
