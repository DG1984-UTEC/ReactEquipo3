import {Link} from 'react-router-dom';
import './TrashCan.css';
import empty_bin from "../assets/trashCan/recycle_bin_empty_small.png";
import full_bin from "../assets/trashCan/recycle_bin_full_small.png";
import {useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import {useToasts} from 'react-toast-notifications';



function TrashCan(){
    const {addToast}=useToasts();
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
    /*El history lo vamos a usar para cambiar el boton agregar/atras*/
    const history = useHistory();
    console.log("HISTORY",history.location.pathname);

    const goToTrashCan=(e)=>{
        if( PostIts.length===0){
        e.preventDefault()
        addToast('Papelera vacia',{appearance:'error', autoDismiss: true, autoDismissTimeout:1500})
        }       
    }
   
    return(
        <div className="trashCanContainer">
            <Link to="/deletedPostIts" className="TrashCan" onClick={goToTrashCan}>
                <img src={PostIts.length===0 ? empty_bin  : full_bin} alt="trash_bin" />
            </Link>
        </div>
    )
}

export default TrashCan;