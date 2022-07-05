import { UserContext } from "./components/useContext/UserContext.js";
import { AppRouter } from "./AppRouter.js";
import { useState } from "react";

function App() {
  const[user,setUser] = useState({});

  return (
    <UserContext.Provider value={{user,setUser}}>
      <AppRouter />
    </UserContext.Provider> 
  );
}

export default App;
