import { Link } from 'react-router-dom';
import './TrashCan.css'



function TrashCan(){
    console.log("it worked")
    return(
        
       
        <div className="trashCanContainer">
            <div to="TrashPostIt" className="TrashCan"></div>
            <Link to="/TrashPostIt" className="trashLink">To trash</Link>
            
        </div>
        
    )
}

export default TrashCan;