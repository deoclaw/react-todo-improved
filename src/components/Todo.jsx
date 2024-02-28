import { useState } from "react";

// we pass props (properties) in so we can grab values and pass them in
// unlike in Astro, we don't have the little --- fenced area --- necessarily so we will have to basically keep track of props
function Todo(props) {
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState("");
	const re = /^[a-zA-Z0-9 '.,]*$/g; //regex for alphanumerics and space button

	function handleChange(e) {
		const val = event.target.value;

		if (val.match(re)) {
			setNewName(e.target.value);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (newName === "") {
			alert("Must not be empty!");
		} else {
			props.editTask(props.id, newName);
			setNewName("");
			setEditing(false);
		}
	}

	function createSubTask() {
		const pID = props.id;
		props.addTask(`New Subtask for ${props.name}`, pID, true);
	}

	const editMode = (
		<form className="stack-small" onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="todo-label" htmlFor={props.id}>
					Edit {props.name}
				</label>
				<input
					id={props.id}
					className="todo-text"
					type="text"
					value={newName}
					onChange={handleChange}
				/>
			</div>
			<div className="btn-group">
				<button
					type="button"
					className="btn todo-cancel"
					onClick={() => setEditing(false)}
				>
					Cancel
					<span className="visually-hidden">editing {props.name}</span>
				</button>
				<button type="submit" className="btn btn__primary todo-edit">
					Save
					<span className="visually-hidden">new edit for {props.name}</span>
				</button>
			</div>
		</form>
	);

	const viewMode = (
		<div className="stack-small">
			<div className="c-cb">
				<input
					id={props.id}
					type="checkbox"
					defaultChecked={props.completed}
					parentID={props.parentID}
					child={props.child}
					// the anon fxn allows us to Make A Call to the fxn?
					onChange={() => props.toggleTaskCompleted(props.id)}
				/>
				<label className="todo-label" htmlFor={props.id}>
					{props.name}
				</label>
			</div>
			<div className="btn-group">
				<button
					type="button"
					className="btn btn__primary"
					onClick={() => setEditing(true)}
				>
					Edit <span className="visually-hidden">{props.name}</span>
				</button>
				<button
					type="button"
					className="btn btn__danger"
					onClick={() => props.deleteTask(props.id)}
				>
					Delete <span className="visually-hidden">{props.name}</span>
				</button>
				<button
					type="button"
					className="btn btn__edit"
					onClick={() => createSubTask()}
				>
					Make Subtask
				</button>
			</div>
		</div>
	);

	return <li className="todo">{isEditing ? editMode : viewMode}</li>;
}

export default Todo;
