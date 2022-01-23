import { useContext, useState } from "react";
import styled from "styled-components";
import AppContext from "../AppContext";


const Main = styled.form`
width: 100%;
height: 2rem;
display: flex;
justify-content: space-between;
`

const Input = styled.input`
width: 70%;
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


function SubmitEmail() {


    const Context = useContext(AppContext)


    async function sendEmail() {
        const data = {

            sourceRef: "recruit2022_macanderson",
            email: Context.emailDetails,
        }
        try {
            const response = await fetch(" https://mailing-list.prototype.mmgrouptech.net/subscribe", {
                method: "POST",
                body: JSON.stringify(data)
            })

            if (response.status !== 200) {
                throw new Error("There was an error")

            } else {
                Context.setResponseStat(response.status)
                Context.setIsEmailSent(true)
                console.log(response.status)
            }



        } catch (error) {
            console.log(error)
        }
    }

    function submit(e) {
        e.preventDefault()

        sendEmail()

        // Context.setEmailDetails("")


    }

    function handleInput(e) {
        Context.setEmailDetails(e.currentTarget.value)

    }





    return (
        <Main onSubmit={submit}>
            <Input placeholder="Enter your email address" type="email"
                onChange={handleInput} value={Context.emailDetails} />
            <Btn type="submit">Subscribe now</Btn>
        </Main>
    )
};

export default SubmitEmail;