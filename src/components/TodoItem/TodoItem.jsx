import React from "react";

// Importing other needed things
import cn from "classnames";

// Importing icons
import {MdCheckBoxOutlineBlank, MdOutlineRemoveCircleOutline, MdCheckBox } from "react-icons/md"

// Importing styles
import "./TodoItem.scss"

const TodoItem = ({todo, onRemove, onToggle}) => {
	
	const {text, checked, id} = todo
	
	return (
		<div className="item-container">
			<div className={cn("checkbox-text-container", {checked})} onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
			</div>
			<div className={cn("todo-text", {checked})}>{text}</div>
			<div className="remove-container" onClick={() => onRemove(id)}>
				<MdOutlineRemoveCircleOutline />
			</div>
		</div>
	)
}

export default React.memo(TodoItem);