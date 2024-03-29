import styled from 'styled-components';

export const BtnContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
font-family: "Oswald", sans-serif;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
border-color : ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
padding: 0.2rem 0.5rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus {
    outline:none;
}
`