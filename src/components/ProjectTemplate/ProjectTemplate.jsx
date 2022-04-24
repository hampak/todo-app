import React from "react";

// Importing Styles
import "./ProjectTemplate.scss";

const ProjectTemplate = ({children}) => {
	
	
	return(
		<div className="project-container">
			<div className="title-container">
				Todo List
			</div>
			<div>{children}</div>
		</div>
	)
}

export default ProjectTemplate;