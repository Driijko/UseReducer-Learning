import React, {useContext} from "react";

import Context from "../../store/Context";

export default function UserProjects(props) {
 
  const {authState, projectsState} = useContext(Context)

  const userProjects = projectsState.filter(project => {
    return authState.userName === project.author;
  })

  const userProjectComponents = userProjects.map(project => {
    return (
      <div key={Math.random()}>
        <ul>
          <li>{project.title}</li>
          <li>{project.author}</li>
          <li>{project.content}</li>
        </ul>
        <hr />
      </div>
    )
  })

  return (
    <div>
      <h1>Your Projects</h1>
      {userProjectComponents}
    </div>
  )
}