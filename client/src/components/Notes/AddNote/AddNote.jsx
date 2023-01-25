import React, { useContext, useState } from 'react'
import "./AddNotes.css"
import NoteContext from '../../../context/notes/noteContext'


function AddNote() {
    const [btn, setBtn] = useState(true)
    const context = useContext(NoteContext);
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        setBtn(true)
        // if(note.title && note.description){
        //     addNote(note.title, note.description, note.tag)
        // }else{
        //     alert('you not give proper title and description ')
        // }
        
        addNote(note.title, note.description, note.tag)
        
        setNote({ title: "", description: "", tag: "" })



    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })


    }

    return (
        <>
            <div className='addNoteContainer mx-5 my-3 p-3 rounded w-75 mx-auto'>
                {btn ?
                    <>
                        <button type="button" className="btn btn-dark btn-lg" onClick={() => { setBtn(false) }}>Add Note</button>
                    </>

                    :
                    <form className='d-flex flex-column gap-3 align-items-center'>
                        <div className="  form-group  col-10 mb-3" >
                            <label htmlFor="exampleInputEmail1 ">Title</label>
                            <input type="text" className="form-control"style={{width: '100%'}} placeholder="Enter Note Title  " required name='title' onChange={onchange} />
                        </div>
                        <div className="d-flex flex-column form-group col-10 my-4">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <textarea className='form-control col-12' name='description' required onChange={onchange}></textarea>
                        </div>
                        <div className=' d-flex gap-3 form-group align-items-center  my-3' >
                            <label>Tag: </label>
                            <div className=' d-flex gap-md-3'>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="General" /> General</div>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="Favoraite" /> Favoraite</div>
                                <div className="tag"><input type="radio" onChange={onchange} name='tag' value="Mark" /> Mark   </div>
                            </div>
                        </div>
                        <button disabled={note.title.length<3 || note.description.length<1} type="submit" className="btn btn-primary w-25 " onClick={handleClick}>ADD</button>
                    </form>
                }

            </div>
        </>
    )
}

export default AddNote;
