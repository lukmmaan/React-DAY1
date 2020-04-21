import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import NewScreen from "./views/screen/NewScreen"
import TabelProduk from "./views/components/TabelProduk"
import CounterScreen from "./views/screen/CounterScreen"
import ProductCard from './views/components/ProductCard';
import Brave from "./brave.png"
import Crazy from "./crazy.png"
import Handmaid from "./handmaid.png"
import Educated from "./educated.png"
import '../src/views/components/bootstrap.css'
import InputScreen from './views/screen/InputScreen';
import LifeCycleScreen from './views/screen/LifeCycleScreen'
import HomeScreen from "./views/screen/HomeScreen"
import InputLayar from "./views/screen/InputLayar"
import PageNotFound from "./views/screen/PageNotFound"
import Navbar from "./views/components/Navbar"
import Navbar2 from "./views/components/navbar2"
import ProfileScreen from "./views/screen/ProfileScreen"
import Registrasi from '../src/views/screen/Registrasi';
import Login from "../src/views/screen/Login"
import Profile from "../src/views/screen/Profile"
import TodoScreen from "../src/views/screen/TodoReduxScreen"
import todo from './redux/reducers/todo';
function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"]
  // let arrBaru = ''
  // for (let i = 0; i < arr.length; i++) {
  //   arrBaru += arr[i] + ' '
  // }
  const renderArr = () =>{
     return arr.map(val => {
      return (
        // <>
        //   <p>{val}</p>
        //   {/* <NewScreen /> */}
        // </>
        <CounterScreen kota = {val}/>
      )
    })
  }
  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];
  const renderProduk = ()=>{
    return arrBooks.map((val)=>{
      return(
        <div className="col-6">
        <ProductCard productData={val}/>
        </div>
     )
    })
  }
  return (
    <>
    <Navbar2/>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/registrasi" component={Registrasi}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile/:username" component={Profile}/> 
        <Route exact path="/input" component={InputLayar}/>
        <Route exact path="/todo" component={TodoScreen}/>
        {/* <Route exact path="/counter" component={CounterScreen}/>
        <Route exact path="/input" component={InputLayar}/>
        <Route exact path="/profile/:username" component={ProfileScreen}/> */}
        <Route path="*" component={PageNotFound}/>
      </Switch>
      </>
  )
}

export default withRouter(App);
