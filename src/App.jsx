// props as a way to communicate between components, we can think of state as a way to give components "memory" – information they can hold onto and update as needed. -- MDN

import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { useState } from "react";

function App(props) {
	//for creating unique IDs
	let uID = new Date().getTime();
	function uniqueID() {
		uID++;
		return "id" + uID;
	}

	function addTask(name) {
		//we need to make a newTask object to add to the array tasks
		const newTask = { id: `${uniqueID()}`, name, completed: false };
		// ...tasks copies the existing task array and then we add our newTask obj. at the end
		setTasks([...tasks, newTask]);
	}

	const [tasks, setTasks] = useState(props.tasks); //can use this in the addTask fxn
	// straight up, I am reading Mozilla's MDN docs
	// I am taking the aria tools as one thing I do want to better myself at is accessibility

	//lets create an array of Todos mapped from our task prop passed through from main.jsx
	//the ?. lets us perform optional chaining to check if props.tasks is undef. or null
	//key is a special prop for react -- we must always use a UNIQUE KEY
	const taskList = tasks?.map((task) => (
		<Todo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
		/>
	));
	const taskNoun = taskList.length !== 1 ? "tasks" : "task";
	const headingTxt = `${taskList.length} ${taskNoun} left`;
	return (
		<div className="todoapp stack-large">
			<h1>ToDo List</h1>
			<Form addTask={addTask} />
			<div className="filters btn-group stack-exception">
				<FilterButton />
				<FilterButton />
				<FilterButton />
			</div>
			<h2 id="list-heading">{headingTxt}</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading"
			>
				{taskList}
			</ul>
		</div>
	);
}

export default App;
