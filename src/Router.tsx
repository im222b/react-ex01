import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./Routes/Coins";
import Coin from "./Routes/Coin";

function Router(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/:coinId">
                <Coin />
            </Route>
            <Route path="/">
                <Coins />
            </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default Router;