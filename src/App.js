import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './atoms/button'
import Label from './atoms/label'
import Input from './atoms/input'
import styled from 'styled-components'

import SiteSearch from './molecules/site-search'

function App() {
  return (
    <div className="App">
      <h2>Atoms</h2>
      <Section>
        <Label>Search The Site</Label>
        <SectionLabel>Label</SectionLabel>
      </Section>
      <Section>
        <Input type="text" placeholder="Search Site" />
        <SectionLabel>Input</SectionLabel>
      </Section>
      <Section>
        <Button>Search</Button>
        <SectionLabel>Button</SectionLabel>
      </Section>
      <br />
      <br />
      <br />
      <br />
      <h2>Molecules</h2>
      <Section>
        <SiteSearch />
        <SectionLabel>Site Search</SectionLabel>
      </Section>
    </div>
  );
}

const Section = styled.div`
  background: #EEE5E5;
  padding: 36px 24px;
  border:1px solid #DDCECD;
  width: 400px;
  display: flex;
  align-items: center;
`

const SectionLabel = styled.span`
  margin-left: auto;
  color: #DDCECD;
  text-transform: uppercase;
`

export default App;
