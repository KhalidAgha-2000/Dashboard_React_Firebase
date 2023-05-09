import Navigation from "./Components/Navigation/Navigation.jsx"
import Main from "./Components/Main/Main.jsx"
import './App.css'
import { ThemeContext } from "./Context/ThemeContext.jsx";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login.jsx";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/Config.js";
function App() {

  const [darkTheme, setDarkTheme] = useState(false)
  const [userLoggedin, setUserLoggedin] = useState(false)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { setUserLoggedin(true) }
      else { setUserLoggedin(false) }
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>

      <div className="App">
        {userLoggedin ?
          <>
            <Navigation />
            <Main />
          </> :
          <Login />
        }
      </div>

    </ThemeContext.Provider>
  )
}

export default App
