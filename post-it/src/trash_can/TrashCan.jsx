import './TrashCan.css'
import {Link} from 'react-router-dom';
import './TrashCan.css';
import empty_bin from "../assets/trashCan/recycle_bin_empty_small.png";
import full_bin from "../assets/trashCan/recycle_bin_full_small.png";
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {useToasts} from 'react-toast-notifications';
import { useState, React } from 'react';
import {clearTrashCan} from '../reducers/postIts';
import {useDispatch} from 'react-redux';




function TrashCan(){
    const {addToast}=useToasts();
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
    const dispatch=useDispatch();
    /*Usamos history para poder cambiar boton */
    const history=useHistory();
    
    
    const[button,setButton]=useState("Crear Post It");
    const[clearTrashCanDisplay, setClearTrashCan]=useState(false);

    history.listen((location)=>{
        if(location.pathname==="/"){
            setButton("Crear Post It");
            setClearTrashCan(false);
        }else if(location.pathname==="/deletedPostIts"){
            setClearTrashCan(true);
            setButton("Atras"); 
        }else{
            setClearTrashCan(false);
            setButton("Atras"); 
        }
        
})
        
    

    const goToTrashCan=(e)=>{
        if( PostIts.length===0){
        e.preventDefault()
        addToast('Papelera vacia',{appearance:'error', autoDismiss: true, autoDismissTimeout:3000})
        }       
    } 
    

    

    const switchBackAdd=(e)=>{
        if(button==="Atras"){
            e.preventDefault();
            history.push("/")
        }
   }

   const clearTrashCanButton=()=>{

        let ask=window.confirm("Estas seguro que quieres vaciar la papelera de forma permanente?")
        if(ask){
            try {
                dispatch(clearTrashCan());
                history.push("/");
                addToast('Papelera vaciada con éxito',{appearance:'error', autoDismiss: true, autoDismissTimeout:3000})
            } catch (error) {
                addToast('Ups, Algo salió mal',{appearance:'error', autoDismiss: true, autoDismissTimeout:3000})
            }
            
        }
        
   }

    return(
        <div className="trashCanContainer">
            <Link to="/addPostIt" onClick={switchBackAdd}  className="btnAdd btnEdit linkBtn ">{button}</Link>
            {clearTrashCanDisplay ? <button className="btn" onClick={clearTrashCanButton}>Vaciar Papelera</button> : null}
            <Link to="/deletedPostIts" className="TrashCan" onClick={goToTrashCan}>
                <img src={PostIts.length===0 ? empty_bin  : full_bin} alt="trash_bin" />
            </Link>
        </div>
    )
}

export default TrashCan;