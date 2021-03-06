import React, { useState } from 'react'
import styled from 'styled-components'

import NavLink from '../atoms/nav-link'
import NavLinks from '../molecules/nav-links'
import SiteSearch from '../molecules/site-search'

function NavBar(props) {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <Container>
            <NavLinks>
                <NavLink href="#Home">Home</NavLink>
                <NavLink href="#Blog">Blog</NavLink>
                <NavLink href="#About">About</NavLink>
            </NavLinks>
            <SearchIcon onClick={() => setShowSearch(!showSearch)} role="img" aria-label="search">🔍</SearchIcon>
            {
                showSearch &&
                <SearchWrapper>
                    <SiteSearch />
                </SearchWrapper>
            }
        </Container>
    )
}

const Container = styled.nav`
    background: #fafafa;
    padding: 8px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    border: 1px solid #ccc;
    position: relative;
`

const SearchWrapper = styled.div`
    position: absolute;
    top: calc(100% - 10px);
    right: 0;
    border: 1px solid #CCC;
    background: #FAFAFA;
    padding: 20px;
    border-radius: 6px;
`

const SearchIcon = styled.span`
    cursor: pointer;
`

export default NavBar