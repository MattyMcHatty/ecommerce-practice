import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.ul`
background: lightgray;
display: flex;
justify-content: space-evenly;
padding: 2em;`

const NavLinks = styled.li`
font-size:1.5em;
a:visited {color: #996600}
a:hover {color: black}

`


const NavBar = () => {

    return(
        <NavContainer>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/basket">Basket</Link>
            </NavLinks>
        </NavContainer>
    );


}

export default NavBar