import { useState } from "react";
import FirstSignUp from "./First-Signup";

function App() {
  const [emailDetails, setEmailDetails] = useState("");


  return (
    <div>

      <FirstSignUp />
    </div>
  );
}

export default App;
