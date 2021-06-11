import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostIt,increment  } from '../reducers/postIts';
import {useToasts} from 'react-toast-notifications'
import {Link} from 'react-router-dom'


const  AddPostIt=()=>{

   
    const dispatch = useDispatch();
    const [note, setNote]=useState();
    const {addToast}=useToasts();
    const id = useSelector((state) => state.postIts.id);

    const NewNote=(e)=>{
 
    const post={id,note}

   
   if(note){
        dispatch(addPostIt(post));
        dispatch(increment());
        addToast('PostIt agregado con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:3000})
    }else{
         e.preventDefault();
        addToast('Ups, Debes de completar el campo nota',{appearance:'error', autoDismiss: true, autoDismissTimeout:3000})
    }


}

    const handleChange=(e)=>{
        setNote(e.target.value);
        
    }
    return(
        
         <div  className='editContainer'>
                <div className='editForm'>
                    <h1>Add Your Post it!</h1>
                    <textarea maxLength='200'  onChange={handleChange} value={note}></textarea>
                    <Link to='/' className='btnEdit linkBtn'>Cancelar</Link>
                    <Link to='/' className='btnEdit linkBtn' onClick={NewNote}>Guardar</Link>
                </div>                          
            </div>
            


    


    )
}

export default AddPostIt;