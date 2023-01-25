import React from 'react'
import "./home.css"

import AddNote from '../Notes/AddNote/AddNote'
import Notes from '../Notes/Notes'



function Home() {
  
    return (
        <div className='homePage'>
            <AddNote />
            <Notes />

        </div>
    )
}

export default Home
