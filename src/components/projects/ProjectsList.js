// IMPORTS //////////////////////////////////////////////////////////////////////////////
import React, {useContext} from "react";

import Context from "../../store/Context";

import OtherProjects from "./OtherProjects";
import UserProjects from "./UserProjects";




export default function ProjectsList(props) {

  // PERSISTENT STATE ///////////////////////////////////////////////////////////////////////
  const {authState} = useContext(Context);

  return (
    <div>
      <UserProjects />
      <OtherProjects />
    </div>
  )
}