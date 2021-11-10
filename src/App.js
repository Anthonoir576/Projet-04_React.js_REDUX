import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <h1>BLOG SPACE</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">CONTENU</div>
        <User />
      </div>
    </div>
  );
};

export default App;
