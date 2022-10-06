import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./compoment/pages/Blog";
import Contact from "./compoment/pages/Contact";
import Home from "./compoment/pages/Home";
import Error from "./compoment/pages/Error";
import Singleblog from "./compoment/pages/Singleblog";
import Navbar from "./compoment/Navbar";
import Users from "./compoment/pages/Users";
import Addblog from "./compoment/pages/Addblog";
import Protect from "./compoment/Protect";

const App = () => {

  const[Login,Islogin]=useState(false)
  return (

    <div>
      <BrowserRouter>
        <Navbar />
        {Login?<button onClick={()=>Islogin(!Login)}>LogOut</button>:<button onClick={()=>Islogin(!Login)}>Login</button>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:title" element={<Singleblog/>}/>
          <Route path="/user" element={<Users/>}/>
          <Route path="/Addblog" element={<Protect Login={Login}><Addblog/></Protect>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
