import './list_post_it.css';
/*import { post_it } from './model/post_it';*/
import React, { useState} from 'react';




export const ListPostIt= () => {
    const [list_post_it, setState] = useState([{id:1,note:"nota1"},{id:2,note:"nota2"}]);
    const [post_it, setCount] = useState({id:3,note:"nota3"});
   

    function editPostIt(postIt){
        console.log(postIt);
    }

    
    

    const  Add = (post_it) =>{

    setState(list_post_it=>[...list_post_it,(post_it)]);
    const notaid=post_it.id+1;
    setCount({id:post_it.id+1,note:"nota"+notaid});  
    }

    return (
        
        
        <div className="postItWrap">

           
            {
               list_post_it.map(element => (
                
                    <div className="postIt"  onClick={()=>editPostIt(element)} >{element.note}</div>
              
                    ))
               
            }
                    

                    <button className="btnadd"  onClick={() => Add(post_it)}>Agrega</button>   

                 
                    
        </div>

        
         
         
        
    );


}




//export default ListPostIt;