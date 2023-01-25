import React ,{useContext}from 'react'
import NoteContext from '../../context/notes/noteContext'

function About() {
    const context = useContext(NoteContext)
    return (
        <div>
            <h1>This the page about {context.name}</h1>
        </div>
    )
}

export default About
