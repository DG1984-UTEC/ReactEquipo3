import { screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { renderComponent } from '../utils/tests';
import TrashCanList from './TrashCanList';



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
        renderComponent({ store: store, component: <TrashCanList/> });
        const title = screen.getByText("Papelera");
        expect(title).toBeInTheDocument();
    });

    it('should render guardar button', () => {
        renderComponent({ store, component: <TrashCanList/> });
        const note1 = screen.getByText("nota4");
        expect(note1).toBeInTheDocument();
    });



})