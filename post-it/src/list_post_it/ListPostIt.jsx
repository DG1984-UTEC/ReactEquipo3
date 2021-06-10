import './list_post_it.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux';
import { deletePostIt} from '../reducers/postIts';
import {useToasts} from 'react-toast-notifications';





const ListPostIt=()=>{

    const {addToast}=useToasts();
    const dispatch=useDispatch();

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.listPostIt);
    const deletePostItButton=(postIt)=>{
        try {
            dispatch(deletePostIt(postIt));
            addToast('PostIt movido a papelera con éxito!',{appearance:'success', autoDismiss: true, autoDismissTimeout:3000})
        } catch (error) {
            addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:3000})
        }
        
    }


    if(PostIts.length!==0){
        return (
            <div className="postItContainer">
                <h1>Notas</h1>
                <div to="/editPostIt" className="postItWrap">
                    {
                        PostIts.map(element => (
                            <div  className="postIt" key={element.id}>
                                {element.note}
                                <div className="btnContainer">
                                    <Link to={{pathname:"/editPostIt/", state:{id:element.id, listNote:element.note}}} className="btn btnLinkList">Editar</Link>
                                    <button className="btn" onClick={()=>deletePostItButton(element)}>Borrar</button>
                                </div>
                            </div>
                        ))
                    } 
                            
                </div>
            </div>
        );
    }else{
        return(
            <div className="postItContainer">
                <h1>Notas</h1>
                <div to="/editPostIt" className="postItWrap">
                    <h3>Lista PostIts vacia</h3>
                            
                </div>
            </div>
        );
    }         

}




export default ListPostIt;