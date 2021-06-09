import './EditPostIt.css';
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { editPostIt} from '../reducers/postIts';
import {useToasts} from 'react-toast-notifications'




const EditPostIt=()=>{
    const dispatch = useDispatch();
   
    const location=useLocation();
    const {id, listNote}=location.state;
    const [note, setNote]=useState(listNote);
    const {addToast}=useToasts();
    
    const formNote=()=>{
        const postItDispatch={
            id: id,
            note: note
        };


        try {
            console.log("Dispatch")
            dispatch(editPostIt(postItDispatch));
            
           
            addToast('PostIt editado con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:1500})
            console.log("Salio todo joya");
        } catch (error) {
            console.log("Estoy en error");
            addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
        }
        
        
    }

    const handleChange=(e)=>{
        setNote(e.target.value);
    }

   
    
    return (
         
            <div  className="editContainer">
                <div className="editForm" >
                    <h1>Edit Your Post it!</h1>
                    <textarea  onChange={handleChange} value={note}></textarea>
                    <Link to="/" className="btnEdit linkBtn">Cancelar</Link>
                    <Link to="/" className="btnEdit linkBtn" onClick={()=>formNote()}>Guardar</Link>
                </div>                          
            </div>
        
    )
}

export default EditPostIt;