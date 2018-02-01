import React from "react"
import styled from "styled-components"

const border = "2em";
export default styled.button`
    border-radius: ${border};
    background-color: green;
    ${ props => props.block ? `color:red` : null }
`