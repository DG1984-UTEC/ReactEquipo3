import './TrashCan.css'
import {Link} from 'react-router-dom';
import './TrashCan.css';
import empty_bin from "../assets/trashCan/recycle_bin_empty_small.png";
import full_bin from "../assets/trashCan/recycle_bin_full_small.png";
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {useToasts} from 'react-toast-notifications';
import { useState, React } from 'react';




function TrashCan(){
    const {addToast}=useToasts();
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
    /*Usamos history para poder cambiar boton */
    const history=useHistory();
    
    
    const[button,setButton]=useState("Crear Post It");

    history.listen((location)=>{
        if(location.pathname==="/"){
            setButton("Crear Post It");
        }else{
            setButton("Atras"); 
        }
})
        
    

const goToTrashCan=(e)=>{
        if( PostIts.length===0){
        e.preventDefault()
        addToast('Papelera vacia',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
        }       
    } 
    

    

    const switchBackAdd=(e)=>{
        if(button==="Atras"){
            e.preventDefault();
            history.push("/")
        }
   }

    return(
        <div className="trashCanContainer">
            <Link to="/addPostIt" onClick={switchBackAdd}  className="btnAdd btnEdit linkBtn ">{button}</Link>
            <Link to="/deletedPostIts" className="TrashCan" onClick={goToTrashCan}>
                <img src={PostIts.length===0 ? empty_bin  : full_bin} alt="trash_bin" />
            </Link>
        </div>
    )
}

export default TrashCan;