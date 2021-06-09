import {BrowserRouter,Switch,Route} from "react-router-dom"
import ListPostIt from "../list_post_it/ListPostIt"
import TrashCan from "../trash_can/TrashCan"
import EditPostIt from "../editPostIt/EditPostIt"
import AddPostIt from "../addPostIt/AddPostIt"
/*import {ToastProvider} from 'react-toast-notifications'*/
import TrashCanList from "../trash_can_list/TrashCanList"









const Root=()=>{
   


    
    return(
            
            <BrowserRouter>
                <TrashCan/>
                <Switch>
                    <Route exact path="/">
                        <ListPostIt/>
                    </Route>
                    <Route path="/addPostIt">
                    <AddPostIt/>
                    </Route>
                    <Route path="/editPostIt">
                        <EditPostIt/>
                    </Route>
                    <Route path="/deletedPostIts">
                        <TrashCanList/>
                    </Route>
                    </Switch>
            </BrowserRouter>
        
    )
}

export default Root;