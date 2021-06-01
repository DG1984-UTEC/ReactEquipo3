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


export const postItsSlice= createSlice({
    name: 'postIts',
    initialState:{
        listPostIt:JSON.parse(localStorage.getItem("listaNotas"))||[
            {id:1,note:"nota1"}, 
            {id:2,note:"nota2"},
            {id:3,note:"nota3"}
            
        ]
    },
    reducers:{
        editPostIt: (state, action)=>editPostItAction(state, action.payload)
    }
});

export const{
    editPostIt
}=postItsSlice.actions

export default postItsSlice.reducer