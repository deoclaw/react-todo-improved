// we need to fix how submitting this form will work
// Form is a child of the parent App -- we cannot just pass our props down the same way
// instead, we need in our App some fxn to expect data from form and then pass that to Form: a callback prop

// useState takes a single argument determining initial value of state and returns array: first item is current val of state, second is fxn to update state
import { useState } from "react";

function Form(props) {
	const [name, setName] = useState("");
	const re = /^[a-zA-Z0-9 '.,]*$/g; //regex for alphanumerics and space button

	//fxn capture userinput of form
	function handleChange(event) {
		const val = event.target.value;

		if (val.match(re)) {
			setName(event.target.value); //the target of the event is the input, value is what's in it, setName is the fxn that by virtue of useState lets us change name
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (name === "") {
			alert("Must not be empty!");
		} else {
			props.addTask(name); //sends name, the value of the input, back to the App so we can add it to the array of tasks
			setName("");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
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
				value={name}
				onChange={handleChange}
			/>
			<button type="submit" className="btn btn__primary btn__lg">
				Add
			</button>
		</form>
	);
}

export default Form;
