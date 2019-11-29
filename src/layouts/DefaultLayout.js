import React from "react";
import { Route } from "react-router-dom";

const DefaultLayout = ({ component: Component, path, ...rest }) => {
	return (
		<Route
			{...rest}
			path={path}
			render={matchProps => (
				<div className="flex flex-col min-h-screen leading-normal ">
					<Component {...matchProps} />
				</div>
			)}
		/>
	);
};

export default DefaultLayout;
