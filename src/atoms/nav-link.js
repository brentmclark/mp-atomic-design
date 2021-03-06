import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
    margin: 0 8px;

    a {
        color: #28AFB0 !important;
        font-size: 10px;
        text-decoration: none;
        font-weight: bold;

        :hover {
            text-decoration: underline;
        }
    }
`

function NavLink(props) {
    const { children, className, ...rest} = props
    return (
        <Wrapper className={className}>
            <a {...rest}>{children}</a>
        </Wrapper>
    )
}

export default NavLink 