import './TrashCanList.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import {restorePostIt} from '../reducers/postIts';
import { useHistory } from "react-router-dom";

function TrashCanList(){
    const history = useHistory();

    const dispatch=useDispatch();

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
    /*<Link to={{pathname:"/editPostIt/", state:{id:element.id, listNote:element.note}}} className="btn btnLinkList" onClick={()=>editPostIt(element)}>Editar</Link> */


    const restorePostItButton=(postIt)=>{
        try {
            dispatch(restorePostIt(postIt))
            if(PostIts.length===1){
                history.push("/");
            }
        
        } catch (error) {
            
        } 
        

    }

    return(
        <div className="postItContainer">
            <h1>Papelera</h1>
            <div to="/editPostIt" className="postItWrap">
                {
                    
                        PostIts.map(element => (
                            <div  className="postIt" key={element.id}>
                                {element.note}
                                <div className="btnContainer">
                                    <button className="btn btnTrashCanList" onClick={()=>restorePostItButton(element)}>Restaurar</button> 
                                    <button className="btn btnTrashCanList">Borrar</button>
                                </div>
                                    
                            </div>
                        ))
                    
                    

                    
                } 
                         
            </div>
        </div>
    )
}

export default TrashCanList;