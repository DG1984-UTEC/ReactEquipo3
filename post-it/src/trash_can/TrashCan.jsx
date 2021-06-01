import { generatePath, Link, NavLink } from 'react-router-dom';
import './TrashCan.css'





function TrashCan(){
    console.log("it worked")

    function irPapelera(){
        console.log ("DEBERIA IR A TrashPostIt")
        
        return(
            <Link to="/TrashPostIt" className="trashLink">ir a trash</Link>
        
        
        )
       }
    
    return(
        
       
        <div className="trashCanContainer">
            <div onClick={irPapelera} className="TrashCan"></div>
            <Link to="/TrashPostIt" className="trashLink">ir a trash</Link>
           
           
        </div>
        
    )
}

export default TrashCan;