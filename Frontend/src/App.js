import './Home.css';
import './Images.css'
import './About.css'
import './SignUp.css'
import './Categories.css'
import './Cart.css'
import './Settings.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './Additions/Navbar';
import SignUp from './Additions/SignUp';
import About from './Additions/About';
import Onepiece from './Additions/Onepiece';
import Footer from './Additions/Footer';
import Categories from './Additions/Categories';
import Cart from './Additions/Cart';
import Login from './Additions/Login';
import Settings from './Additions/Settings';
import DeleteUser from './Additions/DeleteUser';
import ProductCreate from './Additions/Productcreate';
import CardTemplate from './Additions/CardTemplate';

function App() {

  function searching(){
    const searcher = document.getElementById("input");
    searcher.addEventListener("input", (e)=>{
      const value = e.target.value
      // console.log(value)
      let inputValue = searcher.value
      console.log(inputValue)
      let cardBody = document.getElementsByClassName("card-body").innerText
      // Array.from(cardBody).forEach((element)=>{
      //   let cardTitle = element.getElementsByTagName("h4");
      //   console.log(cardTitle)
      // })
      
      if (inputValue.includes(cardBody)){
        console.log("MatchFound")
      }
      else{
        console.log("something went wrong")
      }
    });
  }


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/OnePiece">
            <Onepiece searchFunc = {searching}/>
          </Route>

          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path = "/login">
            <Login/>
          </Route>

          <Route path = "/User-delete">
            <DeleteUser/>
          </Route>

          <Route path="/cart">
            <Cart/>
          </Route>

          <Route path = "/settings">
            <Settings/>
          </Route>

          <Route path = "/productCreate">
            <ProductCreate/>
          </Route>

          <Route path = "/cardTemplate">
            <CardTemplate/>
          </Route>

          <Route path="/">
            <Categories />
          </Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
