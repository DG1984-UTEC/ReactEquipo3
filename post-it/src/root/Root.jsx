import {BrowserRouter,Switch,Route} from "react-router-dom"
import ListPostIt from "../list_post_it/ListPostIt"
import TrashCan from "../trash_can/TrashCan"
import EditPostIt from "../editPostIt/EditPostIt"
import AddPostIt from "../addPostIt/AddPostIt"
/*import {ToastProvider} from 'react-toast-notifications'*/








const Root=()=>{
   


    
    return(
         
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <TrashCan/>
                        <AddPostIt/>
                        <ListPostIt/>
                       
                    </Route>
                    <Route path="/editPostIt">
                        <EditPostIt/>
                    </Route>
                    </Switch>
            </BrowserRouter>
        
    )
}

export default Root;