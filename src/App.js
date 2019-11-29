import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//Page Imports
import HomePage from "./pages/HomePage";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<DefaultLayout path="/" exact component={HomePage} />
				<DefaultLayout component={HomePage} />
			</Switch>
		</Router>
	);
}

export default App;
