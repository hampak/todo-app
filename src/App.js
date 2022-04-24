import React, {useState, useCallback, useRef, useEffect} from "react";

// Importing nanoId to use it for id's on individual todo item + also use it for key props
import { nanoid } from 'nanoid'

// Importing container component;
import ProjectTemplate from "./components/ProjectTemplate/ProjectTemplate.jsx";

// Importing needed components
import Input from "./components/Input/Input.jsx";
import List from "./components/List/List.jsx";

const App = () => {
	
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("items")) || [
		{
			id: 1,
			text: "Let's learn the basics of React!",
			checked: true,
		},
		{
			id: 2,
			text: "Let's learn the basics of Redux!",
			checked: false,
		},
		{
			id: 3,
			text: "Let's learn the basics of Next JS!",
			checked: false,
		},
	])


	// Stringifying todo's so that we'll be able to store them in localStorage	
	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(todos))
		// localStorage.clear();
	}, [todos])
	
	// function that will be called when submitting a new todo in Insert.jsx
	const onInsert = useCallback(
		text => { // receive "value" variable from Insert.jsx
			const newTodo = {
				id: nanoid(10), // limiting nanoid length to 10 characters
				text,
				checked: false,
			}
			setTodos(todos => todos.concat(newTodo));
		},
		[]
	)
	
	// function that will remove clicked todo item
	const onRemove = useCallback(
		id => {
			setTodos(todos => todos.filter(todo => todo.id !== id));
		},
		[]
	)
	
	// function that will change the "checked" key of todo object to other boolean value;
	const onToggle = useCallback(
		id => {
			setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
		},
		[]
	)
	
	return (
		<div className="container">
			<ProjectTemplate>
				<Input onInsert={onInsert}/>
				<List todos={todos} onRemove={onRemove} onToggle={onToggle}/>
			</ProjectTemplate>
		</div>
	)
}

export default App;