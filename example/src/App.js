import React, { useState, useEffect } from "react";

import {
  Wefight_ExampleComponent,
  Wefight_ProgressBar,
  Wefight_Button
} from 'react_component_library'

import 'react_component_library/dist/index.css'

const App = () => {

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
  <>
    <Wefight_ExampleComponent text="Create React Library Example 😄" />
    <Wefight_ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    <Wefight_Button />
  </>
  )
}

export default App
