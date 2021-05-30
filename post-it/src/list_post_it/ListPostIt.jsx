import './list_post_it.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'




function ListPostIt(){

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.listPostIt);
    
      
    function editPostIt(postIt){
        localStorage.setItem("postIt",JSON.stringify(postIt));
        

    }
    
    return (
        <div className="postItContainer">
            <h1>Notas</h1>
            <div to="/editPostIt" className="postItWrap">
            
                {
                    
                    PostIts.map(element => (
                        
                            <div  className="postIt" key={element.id}>{element.note}
                                <div className="btnContainer">
                                    <Link to="/editPostIt" className="btn btnLinkList" onClick={()=>editPostIt(element)}>Editar</Link>
                                    <button className="btn">Borrar</button>
                                </div>
                                
                            </div>
                        
                       
                        
                        
                    ))
                } 
                         
            </div>
        </div>
    );


}




export default ListPostIt;