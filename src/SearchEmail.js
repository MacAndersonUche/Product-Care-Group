import { useEffect } from "react";
import styled from "styled-components";


const Main = styled.div`
width: 100%;
height: 2rem;
display: flex;
justify-content: space-evenly;
`

const Input = styled.input`
width: 70%;
height: 100%;
`

const Btn = styled.button`
width: 20%;
height: 100%;
`


function SearchEmail() {
    async function sendEmail() {
        const data = {

            sourceRef: "recruit2022_macanderson",
            email: "macandy99@gmail.com",
        }
        try {
            const response = await fetch(" https://mailing-list.prototype.mmgrouptech.net/subscribe", {
                method: "POST",
                // body: JSON.stringify(data)
                headers: data
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        sendEmail();

    }, [])


    return (
        <Main>
            <Input placeholder="Enter your email address" />
            <Btn onClick={sendEmail}>Subscribe now</Btn>
        </Main>
    )
};

export default SearchEmail;