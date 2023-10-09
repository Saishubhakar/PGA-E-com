import "./Home.css";
import "./Images.css";
import "./About.css";
import "./SignUp.css";
import "./Categories.css";
import "./Cart.css";
import "./Settings.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Additions/Navbar";
import SignUp from "./Additions/SignUp";
import About from "./Additions/About";
import PGA from "./Additions/PGA";
import Footer from "./Additions/Footer";
import Categories from "./Additions/Categories";
import Cart from "./Additions/Cart";
import Login from "./Additions/Login";
import Settings from "./Additions/Settings";
import DeleteUser from "./Additions/DeleteUser";
import ProductCreate from "./Additions/Productcreate";
import CardTemplate from "./Additions/CardTemplate";
import Protected from "./Additions/Protected";

function App() {
  const loggedIn = localStorage.getItem("LoggedIn");
  console.log(loggedIn);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/PGA" exact component = {loggedIn ? PGA : Login}/>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>


          <Route path="/User-delete">
            <DeleteUser />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>

          <Route path = "/sellProducts">
            <ProductCreate />
          </Route>

          <Route path="/cardTemplate">
            <CardTemplate />
          </Route>

          <Route path="/">
            <Categories />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
