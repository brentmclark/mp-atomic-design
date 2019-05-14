import React from 'react'
import Button from '../atoms/button'
import Label from '../atoms/label'
import Input from '../atoms/input'
import styled from 'styled-components'

function SiteSearch(props) {
    return (
        <Form
            onSubmit={event => {
                event.preventDefault();
                const searchTerm = event.target.elements[0].value
                alert(`Searching for ${searchTerm}`)
            }}
        >
            <Label>Search The Site</Label>
            <div>
                <Input type="text" placeholder="Enter Keyword" />
                <Button
                    type="submit"
                >
                    Search
                </Button>
            </div>
        </Form>
    )
}

const Form = styled.form`
    text-align: left;

    ${Label} {
        margin: 0 0 4px;
        display: inline-block;
    }

    ${Input} {
        margin: 0 4px 0 0;
    }

`

export default SiteSearch