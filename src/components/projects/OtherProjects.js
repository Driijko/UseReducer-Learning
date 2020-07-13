import React, {useContext} from "react";

import Context from "../../store/Context";

export default function OtherProjects(props) {

  const {authState, projectsState} = useContext(Context);

  const nonUserProjects = (
    projectsState.filter(project => {
      return authState.userName !== project.author;
    })
    .map(project => {
      return (
        <ul key={Math.random()}>
          <li>{project.title}</li>
          <li>{project.author}</li>
          <li>{project.content}</li>
        </ul>
      )
    })
  )


  return(
    <div>
      <h1>Other Projects</h1>
      {nonUserProjects}
    </div>
  )
}