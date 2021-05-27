import {createSlice} from '@reduxjs/toolkit'

const editPostIt=({listPostIt},payload)=>{
    listPostIt[payload.index]=payload.postIt;
}


export const postItsSlice= createSlice({
    name: 'postIts',
    initialState:{
        listPostIt:[
            {id:1,note:"nota1"}, 
            {id:2,note:"nota2"},
            {id:3,note:"nota3"}
        ]
    },
    reducers:{

    }
});

export default postItsSlice.reducer