import './TrashCanList.css'
import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import {restorePostIt, permanentDeletePostIt} from '../reducers/postIts';
import { useHistory } from "react-router-dom";
import {useToasts} from 'react-toast-notifications';

function TrashCanList(){
    const history = useHistory();
    const {addToast}=useToasts();
    const dispatch=useDispatch();

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
    /*<Link to={{pathname:"/editPostIt/", state:{id:element.id, listNote:element.note}}} className="btn btnLinkList" onClick={()=>editPostIt(element)}>Editar</Link> */


    const restorePostItButton=(postIt)=>{
        try {

            dispatch(restorePostIt(postIt))
            addToast('PostIt restaurado con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:1500})
            if(PostIts.length===1){
                history.push("/");
            }
        
        } catch (error) {
            addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
        } 
        

    }

    const permanentDeletePostItButton=(postIt)=>{
        
        let ask=window.confirm("Estas seguro que quieres eliminarla de forma permanente?")
        
        console.log(ask);

        if(ask===true){
            try {
                dispatch(permanentDeletePostIt(postIt));
                addToast('PostIt eliminado con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:1500})
                if(PostIts.length===1){
                    history.push("/");
                }
            
            } catch (error) {
                addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
            } 
        }
        

    }

    return(
        <div className="postItContainer">
            <h1>Papelera</h1>
            <div to="/editPostIt" className="postItWrap">
                {
                    
                        PostIts.map(element => (
                            <div id="noteContainer"key={element.id}> 
                                <div  className="postIt">
                                    {element.note}
                                </div>
                                <div className="btnContainer">
                                    <button className="btn btnTrashCanList" onClick={()=>restorePostItButton(element)}>Restaurar</button> 
                                    <button className="btn btnTrashCanList" onClick={()=>permanentDeletePostItButton(element)}>Borrar</button>
                                </div>
                            </div>
                        ))
                    
                    

                    
                } 
                         
            </div>
        </div>
    )
}

export default TrashCanList;