import React, {useState} from "react";

// importing styles
import "./List.scss";

// importing components
import TodoItem from "../TodoItem/TodoItem.jsx"

const List = ({todos, onRemove, onToggle}) => {
	
	return (
		<div className="list-container">
			{todos.map(todo => (
				<TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
			))}
		</div>
	)
}

export default List;