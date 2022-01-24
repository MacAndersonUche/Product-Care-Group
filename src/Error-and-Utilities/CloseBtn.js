
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai"
import styled from "styled-components";
import AppContext from "./AppContext";


const Cross = styled.div`
// width: 10%;
height: 100%;
text-decoration: underline;
cursor: pointer;
font-size: 1.2rem;
`

const CloseBtn = () => {
    const Context = useContext(AppContext)

    function closeBtnHandler() {
        Context.setIsEmailSent(false);
        Context.setError(false);
        Context.setEmailDetails("")
    }

    return (
        <Cross onClick={closeBtnHandler}>
            <AiOutlineClose /> Close

        </Cross>
    )
};


export default CloseBtn;