import './EditPostIt.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPostIt } from '../reducers/postIts';
/*<Link to="/" className="btn linkBtn">Cancelar</Link>*/




const EditPostIt=()=>{

    /*const [id, setId]=useState(5);*/
    const [note, setNote]=useState("");
    const dispatch = useDispatch();

    const PostIts=useSelector((state)=>state.postIts.listPostIt);

    const formNote=()=>{
        const localPostIt=JSON.parse(localStorage.getItem("postIt"));
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

       dispatch(editPostIt(postItDispatch));
        

        console.log("Salio todo joya");
        
        
    }

    function handleChange(e){
        setNote(e.target.value);
    }

    /*onClick={()=>formNote()} */
    return (
        <div className="editContainer">
            <div className="editForm">
                <h1>Edit Your Post it!</h1>
                <textarea  onChange={handleChange}></textarea>
                <Link to="/" className="btnEdit linkBtn">Cancelar</Link>
                <Link to="/" className="btnEdit linkBtn" onClick={()=>formNote()}>Guardar</Link>
            </div>                          
        </div>
    )
}

export default EditPostIt;