import {BrowserRouter,Switch,Route} from "react-router-dom"
import ListPostIt from "../list_post_it/ListPostIt"
import TrashCan from "../trash_can/TrashCan"
import EditPostIt from "../editPostIt/EditPostIt"
import TrashPostIt from "../trash_post_it/Trash_post_it"
/*import {ToastProvider} from 'react-toast-notifications'*/








const Root=()=>{
   


    
    return(
         
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <TrashCan/>
                        <ListPostIt/>
                       
                    </Route>
                    <Route path="/editPostIt">
                        <EditPostIt/>
                    </Route>
                    <Route path="/TrashPostIt">
                        <TrashPostIt/>
                    </Route>
                    </Switch>
            </BrowserRouter>
        
    )
}

export default Root;