import './list_post_it.css';
/*import { post_it } from './model/post_it';*/






function ListPostIt(){
    let list_post_it=[{id:1,note:"nota1"}, {id:2,note:"nota2"},{id:3,note:"nota3"},{id:4,note:"nota4"},{id:5,note:"nota5"},{id:6,note:"nota6"},{id:7,note:"nota7"}];  

    
    return (
        <div className="postItWrap">
            {
                list_post_it.map(element => (
                    
                    <div className="postIt" key={element.id}>{element.note}</div>
                ))
            }           
        </div>
    );


}




export default ListPostIt;