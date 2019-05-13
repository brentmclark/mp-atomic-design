import React from 'react'
import Button from '../atoms/button'
import Label from '../atoms/label'
import Input from '../atoms/input'

function SiteSearch(props) {
    return (
        <div className="site-search">
            <Label>Search The Site</Label>
            <div>
                <Input type="text" placeholder="Search Site" />
                <Button>Search</Button>
            </div>
        </div>
    )
}

export default SiteSearch