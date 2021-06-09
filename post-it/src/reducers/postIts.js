import {createSlice} from '@reduxjs/toolkit'




const editPostItAction=({listPostIt},payload)=>{
    console.log("STATE", listPostIt);
    console.log("PAYLOAD", payload);
    const {id, note}=payload;

    const index=listPostIt.findIndex(element=>element.id===id);


    
    /*console.log("LISTPOSTIT TOOLKIT",listPostIt);*/
    listPostIt[index]={id:id,note:note};

    localStorage.setItem("listaNotas",JSON.stringify(listPostIt));

    /*return {state};*/
}


const AddPostItAction=({listPostIt},payload)=>{
    console.log("STATE", listPostIt);
    console.log("PAYLOAD", payload);

    
    listPostIt.push(payload);

    
    localStorage.setItem("listaNotas",JSON.stringify(listPostIt));
   
    
}




const deletePostItAction=({listPostIt,deletedPostIt},payload)=>{
    
    
    const{id}=payload;
    const index=listPostIt.findIndex(element=>element.id===id);

    if(index!==-1){
        listPostIt.splice(index,1);
        deletedPostIt.push(payload);
    
        /*Cargo cambios en localStorage */
        localStorage.setItem("listaNotas",JSON.stringify(listPostIt));
        localStorage.setItem("deletedPostIts",JSON.stringify(deletedPostIt));

    }
   


}

const restorePostItAction=({listPostIt,deletedPostIt},payload)=>{

    const{id}=payload;
    const index=deletedPostIt.findIndex(element=>element.id===id);

    if(index!==-1){
        deletedPostIt.splice(index,1);
        listPostIt.push(payload);
    
        /*Cargo cambios en localStorage */
        localStorage.setItem("listaNotas",JSON.stringify(listPostIt));
        localStorage.setItem("deletedPostIts",JSON.stringify(deletedPostIt));

    }

}

const permanentDeletePostItAction=({deletedPostIt},payload)=>{
    const{id}=payload;
    const index=deletedPostIt.findIndex(element=>element.id===id);

    if(index!==-1){
        deletedPostIt.splice(index,1);
       
        /*Cargo cambios en localStorage */
        localStorage.setItem("deletedPostIts",JSON.stringify(deletedPostIt));

    }
}





export const postItsSlice= createSlice({
    name: 'postIts',
    initialState:{
        listPostIt:JSON.parse(localStorage.getItem("listaNotas"))||[
            {id:1,note:"nota1"}, 
            {id:2,note:"nota2"},
            {id:3,note:"nota3"}
        ],
        id:parseInt(localStorage.getItem("id"))||4,
        deletedPostIt:JSON.parse(localStorage.getItem("deletedPostIts"))||[]
        
    },
    reducers:{
        editPostIt: (state, action)=>editPostItAction(state, action.payload),
        addPostIt:(state, action)=>AddPostItAction(state, action.payload),
        increment:(state)=>{
            const idPostIt=state.id+=1;
          
           localStorage.setItem("id",idPostIt);
        },
        deletePostIt:(state,action)=>deletePostItAction(state,action.payload),
        restorePostIt:(state,action)=>restorePostItAction(state,action.payload),
        permanentDeletePostIt:(state,action)=>permanentDeletePostItAction(state,action.payload)
    },
});

export const{
    editPostIt,
    addPostIt,
    increment,
    deletePostIt,
    restorePostIt,
    permanentDeletePostIt
    }=postItsSlice.actions


export default postItsSlice.reducer