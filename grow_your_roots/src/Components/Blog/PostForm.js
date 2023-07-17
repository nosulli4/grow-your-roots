import React from "react";

const PostForm = ({newPost, onChange, onClick}) => {
  return (
    <div>
    <form id="PostForm">
    <h3>Write a Post:</h3>
    <input type="text" name="comment" size="100" onChange={onChange} required/> <br/><br/>
    <input type="submit" value="Post" onClick={onClick} /><br /><br />

    </form>
    </div>
  );
}

export default PostForm;
