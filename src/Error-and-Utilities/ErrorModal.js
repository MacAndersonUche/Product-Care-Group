import { useContext } from "react"
import styled from "styled-components"
import AppContext from "./AppContext"
import CloseBtn from "./CloseBtn"
import { BackDrop, Modal } from "./Modal"


const Main = styled.div`
color: white;

`


const ErrorModal = () => {
    const Context = useContext(AppContext)


    return (
        <div>
            <BackDrop />
            <Modal>
                <Main>
                    <h3>There were an error </h3>
                    <div>
                        <p>The error code is: {Context.responseStat}. This means the email is either already present in the database
                            or isnt present at all</p>
                        <CloseBtn />
                    </div>

                </Main>
            </Modal>

        </div>
    )
};

export default ErrorModal;