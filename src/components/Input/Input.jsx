import React, {useState, useCallback} from "react";

// Importing icons
import {GrAdd} from "react-icons/gr"

// Importing styles
import "./Input.scss"

const Input = ({onInsert}) => {
	
	const [value, setValue] = useState("")
	
	const onChange = (e) => {
		setValue(e.target.value)
	}
	
	const onSubmit = useCallback(
		e => {
			if(value) {
				onInsert(value);
				setValue("");
				e.preventDefault();
			} else {
				alert("Please type something you're going to do before submitting!")
				e.preventDefault();
			}
		},
		[value, onInsert]
	)

	
	return (
		<form className="input-container" onSubmit={onSubmit}>
			<input 
				placeholder="Type something you're going to do"
				value={value}
				onChange={onChange}
			/>
			<button>
				<GrAdd />
			</button>
		</form>
	)
}

export default Input;