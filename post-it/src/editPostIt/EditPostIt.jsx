import './EditPostIt.css';
import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPostIt } from '../reducers/postIts';
import {ToastProvider, useToasts} from 'react-toast-notifications'
/*<Link to="/" className="btn linkBtn">Cancelar</Link>*/




const EditPostIt=()=>{

    /*const [id, setId]=useState(5);*/
    const localPostIt=JSON.parse(localStorage.getItem("postIt"));
    const [note, setNote]=useState(localPostIt.note);
    const dispatch = useDispatch();

    const PostIts=useSelector((state)=>state.postIts.listPostIt);
    
    const {addToast}=useToasts();
    
    const formNote=()=>{

        const index=PostIts.findIndex(element=>element.id===localPostIt.id);

        const newPostIt={
            id: localPostIt.id,
            note: note
        }

        console.log("NOTA",note);
        let postItDispatch={
            index: index,
            newPostIt: newPostIt
        };

        try {
            dispatch(editPostIt(postItDispatch));
            addToast('PostIt editado con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:1500})
            console.log("Salio todo joya");
        } catch (error) {
            console.log("Estoy en error");
            addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
        }
        
        
    }

    function handleChange(e){
        setNote(e.target.value);
    }

    /*onClick={()=>formNote()} */
    const nodeRef=React.useRef(null);
    return (
        <ToastProvider nodeRef={nodeRef}>  
            <div ref={nodeRef} className="editContainer">
                <div className="editForm" ref={nodeRef}>
                    <h1>Edit Your Post it!</h1>
                    <textarea  onChange={handleChange} value={note}></textarea>
                    <Link to="/" className="btnEdit linkBtn">Cancelar</Link>
                    <Link to="/" className="btnEdit linkBtn" onClick={()=>formNote()}>Guardar</Link>
                </div>                          
            </div>
        </ToastProvider>
    )
}

export default EditPostIt;