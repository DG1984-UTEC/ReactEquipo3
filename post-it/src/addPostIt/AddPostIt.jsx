/* import './EditPostIt.css'; */
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPostIt } from '../reducers/postIts';





function AddPostIt(){

    const list_post_it=useSelector((state)=>state.postIts.listPostIt);

    const NewPostItPrueba=useSelector((state)=>state.postIts.newPostItPrueba);
    const dispatch = useDispatch();
   
    const [list, setNote]=useState(list_post_it);
    

    const newNote=()=>{
 
    setNote(list=>[...list,(NewPostItPrueba)]);

    dispatch(addPostIt(list));
    
    //console.log(list)
    //console.log(NewPostItPrueba)
    //console.log(newPostIt)

    }
    return(
        
        <div >
            <button className="Add" onClick={()=>newNote()}>Agregar</button>
            
        </div>


    )
}

export default AddPostIt;