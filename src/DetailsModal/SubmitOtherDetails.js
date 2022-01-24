import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import AppContext from "../Error-and-Utilities/AppContext";
import CloseBtn from "../Error-and-Utilities/CloseBtn";
import { BackDrop, Modal } from "../Error-and-Utilities/Modal";


const Header = styled.div`
display: flex;
justify-content: space-between;
align0-content: center;

`



export const Main = styled.form`
width: 100%;
height: 2rem;
display: flex;
justify-content: space-between;
 
`

const Input = styled.input`
width: 20%;
height: 100%;

&:focus {
   border: 2px solid red;
}
`

const Btn = styled.button`
width: 20%;
height: 100%;

&:focus {
    background-color: blue;
}
`


function SubmitOtherDetails() {
    const [details, setDetails] = useState({ name: "", phone: "", postcode: "" })

    const Context = useContext(AppContext)


    async function sendOtherDetails() {

        const data = {

            sourceRef: "recruit2022_macanderson",
            name: details.name,
            phone: details.phone,
            postcode: details.postcode
        }
        try {
            const response = await fetch(`https://mailing-list.prototype.mmgrouptech.net/subscribe/${Context.emailDetails && Context.emailDetails}`, {
                method: "PATCH",
                body: JSON.stringify(data),
            })

            if (response.ok) {
                Context.setIsEmailSent(true)
                console.log(response.status)

            } else {
                Context.setError(true);
                throw new Error("There was an error")
            }



        } catch (error) {
            console.log(error)
        }
    }

    function submit(e) {
        e.preventDefault()

        sendOtherDetails()

        setDetails({ name: "", phone: "", postcode: "" });


    }




    return (
        <div>
            <BackDrop />
            <Modal>
                <Header>
                    <h2>Thanks for signing up </h2>
                    <CloseBtn />
                </Header>
                <p>To help us send more relevant information add more details</p>
                <Main onSubmit={submit}>
                    <Input placeholder="Enter your name" type="text"
                        onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    <Input placeholder="Enter your phone number" type="number"
                        onChange={e => setDetails({ ...details, phone: e.target.value })} value={details.phone} />
                    <Input placeholder="Enter your postcode" type="text"
                        onChange={e => setDetails({ ...details, postcode: e.target.value })} value={details.postcode} />
                    <Btn type="submit">Submit more details</Btn>
                </Main>
            </Modal>
        </div>
    )
};

export default SubmitOtherDetails;
