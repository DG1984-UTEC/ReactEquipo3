import './list_post_it.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
/*import { post_it } from './model/post_it';*/

/*{id:4,note:"nota4"},{id:5,note:"nota5"},{id:6,note:"nota6"},{id:7,note:"nota7"}*/
/*
let list_post_it=[{id:1,note:"nota1"}, {id:2,note:"nota2"},{id:3,note:"nota3"}];
localStorage.setItem("listaNotas", JSON.stringify(list_post_it));
*/

/*onClick={()=>editPostIt(element)} */




function ListPostIt(){

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.listPostIt);
    
      
    /*console.log("LISTA OBTENIDA DESDE LOCAL",localStorage.getItem("listaNotas"));*/

    /*let listaPostIt=JSON.parse(localStorage.getItem("listaNotas"));*/



    

    function editPostIt(postIt){
        console.log(postIt);
        console.log("INDEX OF",PostIts.indexOf(postIt));
        localStorage.setItem("postIt",JSON.stringify(postIt));
        let localPostIt=JSON.parse(localStorage.getItem("postIt"));
        console.log("ID", localPostIt.id);
        
        console.log("INDEX OF localstorage",PostIts.findIndex(element=>element.id===localPostIt.id));

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