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

const addPostItAction=({newPostItPrueba},payload)=>{
    console.log("STATE", newPostItPrueba);
    console.log("PAYLOAD", payload);

    const listPostIt=localStorage.getItem("listaNotas");
    //const {listPostIt}=payload;
    //const newPostIt={id:4,note:"nota3"};

    localStorage.setItem("listaNotas",JSON.stringify(listPostIt));
    localStorage.setItem("newPostItPrueba",JSON.stringify(newPostItPrueba));
    
    
}




export const postItsSlice= createSlice({
    name: 'postIts',
    initialState:{
        listPostIt:JSON.parse(localStorage.getItem("listaNotas"))||[
            {id:1,note:"nota1"}, 
            {id:2,note:"nota2"},
            {id:3,note:"nota3"}
            
        ],newPostItPrueba:JSON.parse(localStorage.getItem("newPostItPrueba"))||{id:4,note:"nota4"}
        
    },
    reducers:{
        editPostIt: (state, action)=>editPostItAction(state, action.payload),
        addPostIt:(state, action)=>addPostItAction(state, action.payload)

    }
    
});

export const{
    editPostIt,
    addPostIt
}=postItsSlice.actions

export default postItsSlice.reducer