// we pass props (properties) in so we can grab values and pass them in
// unlike in Astro, we don't have the little --- fenced area --- necessarily so we will have to basically keep track of props
function Todo(props) {
	return (
		<li className="todo stack-small">
			<div className="c-cb">
				<input
					id={props.id}
					type="checkbox"
					defaultChecked={props.completed}
					// the anon fxn allows us to Make A Call to the fxn?
					onChange={() => props.toggleTaskCompleted(props.id)}
				/>
				<label className="todo-label" htmlFor={props.id}>
					{props.name}
				</label>
			</div>
			<div className="btn-group">
				<button type="button" className="btn">
					Edit <span className="visually-hidden">{props.name}</span>
				</button>
				<button
					type="button"
					className="btn btn__danger"
					onClick={() => props.deleteTask(props.id)}
				>
					Delete <span className="visually-hidden">{props.name}</span>
				</button>
			</div>
		</li>
	);
}

export default Todo;
