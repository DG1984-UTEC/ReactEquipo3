import {Link} from 'react-router-dom';
import './TrashCan.css';
import empty_bin from "../assets/trashCan/recycle_bin_empty_small.png";
import full_bin from "../assets/trashCan/recycle_bin_full_small.png";
import {useSelector} from 'react-redux';



function TrashCan(){
    const PostIts=useSelector((state)=>state.postIts.deletedPostIt);
   
    return(
        <div className="trashCanContainer">
            <Link to="/deletedPostIts" className="TrashCan" onClick={PostIts.length===0 ? e => e.preventDefault():function(){}}>
                <img src={PostIts.length===0 ? empty_bin  : full_bin} alt="trash_bin" />
            </Link>
        </div>
    )
}

export default TrashCan;