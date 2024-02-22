import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// creating const to hold the array of data that is our ToDo list
const TASKDATA = [
	{ id: "todo-0", name: "Eat", completed: true },
	{ id: "todo-1", name: "Sleep", completed: false },
	{ id: "todo-2", name: "Shop", completed: false },
];

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App tasks={TASKDATA} />
	</React.StrictMode>
);
