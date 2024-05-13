import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header123 from './components/Header123';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Whyus from './components/Whyus';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Cart from './components/Cart';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header123/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Shop' element={<Shop/>}></Route>
          <Route path='/Whyus' element={<Whyus/>}></Route>
          <Route path='/Testimonial' element={<Testimonial/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Login' element={<h2>Login Page</h2>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Search' element={<h2>Search Page</h2>}></Route>
        </Routes>
       
      </BrowserRouter>
    )
  }
}
