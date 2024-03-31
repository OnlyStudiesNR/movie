import { useState } from "react";

import Profile from "./comonents/Profile";
// import Formulario from "./comonents/Formulario";
import ReposList from "./comonents/Repository_list";

function App() {
  // const  [formIsShow, setFormIsShow] = useState(true)
  const [userName, setUserName] = useState('')
  return (
    <>
      <input type="text" name="name" id="name" onBlur={ e => setUserName(e.target.value) } />
      
    { userName.length >= 4 && (
      <>
        <Profile userName={ userName } />
        <ReposList userName={ userName} />
      </>
    )}

      {/* { formIsShow && (
          <Formulario /> 
        )}

      <button onClick={ () => setFormIsShow(!formIsShow)} type="button">Toggle form</button> */}
    </>
  )
}

export default App
