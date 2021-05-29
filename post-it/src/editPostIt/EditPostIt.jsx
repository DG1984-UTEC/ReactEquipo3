import './EditPostIt.css';
import {Link} from 'react-router-dom'



const EditPostIt=()=>{
    return (
        
        <form className="editContainer">
            <h1>EditPostIt Works!</h1>
            <textarea></textarea>
            <Link to="/" className="btn linkBtn">Cancelar</Link>
            <input className="btn" type="submit" value="Guardar"></input>
        </form>
        
    )
}

export default EditPostIt;