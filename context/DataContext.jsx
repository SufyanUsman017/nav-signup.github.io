
import { createContext, useState } from "react";

const Data = createContext();
const [users,setUsers] = useState();

function DataContext({children}) {
  return (
    <div>
      <Data.Provider value={users.setUsers}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default DataContext
