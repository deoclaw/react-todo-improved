import Todo from "./components/Todo";

function App(props) {
	// straight up, I am reading Mozilla's MDN docs
	// I am taking the aria tools as one thing I do want to better myself at is accessibility

	//lets create an array of Todos mapped from our task prop passed through from main.jsx
	//the ?. lets us perform optional chaining to check if props.tasks is undef. or null
	//key is a special prop for react -- we must always use a UNIQUE KEY
	const taskList = props.tasks?.map((task) => (
		<Todo
			id={task.id}
			name={task.name}
			completed={task.completed}
			key={task.id}
		/>
	));
	return (
		<div className="todoapp stack-large">
			<h1>ToDo List</h1>
			<form>
				<h2 className="label-wrapper">
					<label htmlFor="new-todo-input" className="label__lg">
						What're We Doing?
					</label>
				</h2>
				<input
					type="text"
					id="new-todo-input"
					className="input input__lg"
					name="text"
					autoComplete="off"
				/>
				<button type="submit" className="btn btn__primary btn__lg">
					Add
				</button>
			</form>
			<div className="filters btn-group stack-exception">
				<button type="button" className="btn toggle-btn" aria-pressed="true">
					<span className="visually-hidden">Show</span>
					<span>All</span>
					<span className="visually-hidden">tasks</span>
				</button>
				<button type="button" className="btn toggle-btn" aria-pressed="true">
					<span className="visually-hidden">Show</span>
					<span>Pending</span>
					<span className="visually-hidden">tasks</span>
				</button>
				<button type="button" className="btn toggle-btn" aria-pressed="true">
					<span className="visually-hidden">Show</span>
					<span>Completed</span>
					<span className="visually-hidden">tasks</span>
				</button>
			</div>
			<h2 id="list-heading">Tasks Remaining</h2>
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
