import React, { useContext} from 'react'
import './note.css'
import NoteContext from '../../context/notes/noteContext';
import moment from 'moment';

function NotesItem({ Note,UpdateNote }) {
    const context=useContext(NoteContext);
    const {deleteNote}=context

   


    return (
        <>
            <div className=" NoteIndividual card  ">
                <div className="card-body">
                    <h5 className="card-title note_title">{Note.title?Note.title:'Untitled'}</h5>
                    <p className="card-text note_description text-wrap">{Note.description?Note.description:'-------'}</p>
                    <p className="card-text note_Tag">{Note.tag?Note.tag:'General'}</p>
                    <p className="card-text note_Date">{moment(Note.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <i className="fa-solid fa-trash-can mx-2" data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={()=>{deleteNote(Note._id)}}></i>
                    <i className="far fa-edit" data-toggle="tooltip" data-placement="bottom" title="Edit"  onClick={()=>{UpdateNote(Note)}}></i>
                  




                </div>
        
            </div>
        </>
    )
}

export default NotesItem;
