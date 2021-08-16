import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartMenu from '../pages/CartMenu'
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Payment from "../pages/Payment";

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={CartMenu} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/payment" component={Payment} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default PageRoutes