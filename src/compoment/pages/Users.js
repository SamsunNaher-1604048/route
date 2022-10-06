import React, { useState } from "react";
import {useSearchParams } from "react-router-dom";

const Users = () => {
  const [Searchparms,Setsearchparms]=useSearchParams()
  const [name, Setname] = useState("");
  
  const onHandel=(e)=>{
    e.preventDefault()
    Setsearchparms({name:name})

  }
  return (
    <div>
      <h1>user</h1>
      <form onSubmit={onHandel}>
        <input
          type="text"
          value={name}
          onChange={(e) => Setname(e.target.value)}
        />
        <button type="submit">Find User</button>
      </form>
       {<h1>{Searchparms.get('name')}</h1>} 
    </div>
  );
};

export default Users;
