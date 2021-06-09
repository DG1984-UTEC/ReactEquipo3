import {createSlice} from '@reduxjs/toolkit'




const editPostItAction=({listPostIt},payload)=>{
    console.log("STATE", listPostIt);
    console.log("PAYLOAD", payload);
    const {index, newPostIt}=payload;
    /*console.log("LISTPOSTIT TOOLKIT",listPostIt);*/
    listPostIt[index]=newPostIt;

    localStorage.setItem("listaNotas",JSON.stringify(listPostIt));

    /*return {state};*/
}

const AddPostItAction=({listPostIt},payload)=>{
    console.log("STATE", listPostIt);
    console.log("PAYLOAD", payload);

    
    listPostIt.push(payload);

    
    localStorage.setItem("listaNotas",JSON.stringify(listPostIt));
   
    
}







export const postItsSlice= createSlice({
    name: 'postIts',
    initialState:{
        listPostIt:JSON.parse(localStorage.getItem("listaNotas"))||[
            {id:1,note:"nota1"}, 
            {id:2,note:"nota2"},
            {id:3,note:"nota3"}
            
            
        ],
        
        
        id:parseInt(localStorage.getItem("id"))||4

        //id:localStorage.setItem("id",JSON.stringify(id))||4
        
        //id:localStorage.setItem("id",4)||4
        //id:4       /* (localStorage.setItem("id",4)) */
        
    },
    reducers:{
        editPostIt: (state, action)=>editPostItAction(state, action.payload),
        addPostIt:(state, action)=>AddPostItAction(state, action.payload),
        increment:(state)=>{
            const idPostIt=state.id+=1;
          
           localStorage.setItem("id",idPostIt);
            
        }
            


    }
    
});

export const{
    editPostIt,
    addPostIt,
    increment
}=postItsSlice.actions

export default postItsSlice.reducer