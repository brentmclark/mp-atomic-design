import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './atoms/button'
import Label from './atoms/label'
import Input from './atoms/input'

import SiteSearch from './molecules/site-search'

function App() {
  return (
    <div className="App">
      
        <div className="separator">
          <Label>Search The Site</Label>
        </div>
        <div className="separator">
          <Input type="text" placeholder="Search Site" />
        </div>
        <div className="separator">
          <Button>Search</Button>
        </div>
      <br />
      <br />
      <br />
      <br />

      <div className="separator">
        <SiteSearch />
      </div>
    </div>
  );
}

export default App;
