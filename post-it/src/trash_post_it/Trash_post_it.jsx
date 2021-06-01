
import './Trash_post_it.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'


function TrashPostIt(){

return(
    <div className="TrashPostItContainer">
    <hi>ACA VA LA LISTA DE BAJA LOGICA PARA PAPELERA</hi>
    <Link to="/" className="trashLink">To Menu</Link>
    </div>
)
}



export default TrashPostIt;