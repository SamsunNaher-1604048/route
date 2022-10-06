import React, { useState } from "react";
import { Link } from "react-router-dom";
import Datas from "../../Data";

const Blog = () => {
  const [Blogs, Setblogs] = useState(Datas);

  const Strigcut=(str,num)=>{
    if(str.length > num){
      return str.slice(0,num)+"..."
    }
    else{
      return str
    }

  }

  return (
    <div>
      <h1>Blog page</h1>
      <section>
        {Blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h1>{title}</h1>
              <p>{Strigcut(body,100)}</p>
              <Link to={title} state={{body}}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blog;
