import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from '../utils/tests';
import EditPostIt from './EditPostIt';



describe('ListPostIt',()=>{
    const initialState={
        postIts:{
            listPostIt:[
                {id:1,note:"nota1"}, 
                {id:2,note:"nota2"},
                {id:3,note:"nota3"}
            ],
            deletedPostIt:[{id:4,note:"nota4"}]
        }
    }

    const mockStore = configureStore();
    let store = mockStore(initialState);

    it('should render Title', () => {
        renderComponent({ store: store, component: <EditPostIt/> });
        const title = screen.getByText("Edit Your Post it");
        expect(title).toBeInTheDocument();
    });

    it('should render guardar button', () => {
        renderComponent({ store, component: <EditPostIt/> });
        const note1 = screen.getByText("Guardar");
        expect(note1).toBeInTheDocument();
    });



})