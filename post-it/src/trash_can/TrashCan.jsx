import './TrashCan.css'
import {Link} from 'react-router-dom'


function TrashCan(){
    return(
        <div className="trashCanContainer">
            <div className="TrashCan"></div>
            <Link to="/addPostIt" className="boton">Agregar Post It</Link>
        </div>
    )
}

export default TrashCan;