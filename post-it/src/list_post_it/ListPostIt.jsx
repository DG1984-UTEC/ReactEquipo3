import './list_post_it.css';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
/*import { post_it } from './model/post_it';*/

/*{id:4,note:"nota4"},{id:5,note:"nota5"},{id:6,note:"nota6"},{id:7,note:"nota7"}*/
/*
let list_post_it=[{id:1,note:"nota1"}, {id:2,note:"nota2"},{id:3,note:"nota3"}];
localStorage.setItem("listaNotas", JSON.stringify(list_post_it));
*/





function ListPostIt(){

    /*usamos Store*/
    const PostIts=useSelector((state)=>state.postIts.listPostIt);
    console.log("statePostit!!!", PostIts.listPostIt);
      
    console.log("LISTA OBTENIDA DESDE LOCAL",localStorage.getItem("listaNotas"));

    /*let listaPostIt=JSON.parse(localStorage.getItem("listaNotas"));*/

    

    function editPostIt(postIt){
        console.log(postIt);
        console.log("INDEX OF",PostIts.indexOf(postIt));

    }
    
    return (
        <div className="postItContainer">
            <h1>Notas</h1>
            <div to="/editPostIt" className="postItWrap">
                {
                    
                    PostIts.map(element => (
                        
                        <Link to="/editPostIt" onClick={()=>editPostIt(element)} className="postIt" key={element.id}>{element.note}</Link>
                    ))
                }           
            </div>
        </div>
    );


}




export default ListPostIt;