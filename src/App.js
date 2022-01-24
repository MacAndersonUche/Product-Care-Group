import { useState } from "react";
import AppContext from "./Error-and-Utilities/AppContext";
import SubmitOtherDetails from "./DetailsModal/SubmitOtherDetails";
import FirstSignUp from "./First-Signup";
import ErrorModal from "./Error-and-Utilities/ErrorModal";

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
        <FirstSignUp />
        {/* {!error && !isEmailSent && <FirstSignUp />} */}
        {isEmailSent && <SubmitOtherDetails />}
        {error && <ErrorModal />}

      </AppContext.Provider>

    </div>
  );
}

export default App;
