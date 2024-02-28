import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function getStoredTasks() {
	const localValue = localStorage.getItem("ITEMS");
	if (localValue != null) return JSON.parse(localValue);
	return [];
}

// creating const to hold the array of data that is our ToDo list
const TASKDATA = getStoredTasks();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App tasks={TASKDATA} />
	</React.StrictMode>
);
