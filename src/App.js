import { useState } from "react";
import AppContext from "./AppContext";
import SubmitOtherDetails from "./DetailsModal/SubmitOtherDetails";
import FirstSignUp from "./First-Signup";

function App() {

  const [responseStat, setResponseStat] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [emailDetails, setEmailDetails] = useState("");

  const globalContext = {
    responseStat, setResponseStat,
    isEmailSent, setIsEmailSent,
    error, setError,
    emailDetails, setEmailDetails,
  }





  // setEmailDetails(e.target.value)


  return (
    <div>

      <AppContext.Provider value={globalContext}>
        {!error && !isEmailSent && <FirstSignUp />}
        {isEmailSent && <SubmitOtherDetails />}


      </AppContext.Provider>

    </div>
  );
}

export default App;
