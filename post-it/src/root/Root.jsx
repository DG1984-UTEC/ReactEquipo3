import {BrowserRouter,Switch,Route} from "react-router-dom"
import ListPostIt from "../list_post_it/ListPostIt"
import TrashCan from "../trash_can/TrashCan"
import EditPostIt from "../editPostIt/EditPostIt"
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
                    </Switch>
            </BrowserRouter>
        
    )
}

export default Root;