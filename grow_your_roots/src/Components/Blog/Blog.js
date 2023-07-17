import React, {useEffect, useState} from "react";
import Parse from "parse";
import PostForm from "./PostForm.js";
import {
  getAllPosts,
  createPost
} from "../../Services/BlogCRUDServices";
import HomeUserFooter from "../PlantHome/HomeUserFooter.js";
import Header from "../Header/Header.js";


const Blog = () => {

  const [postContent, setPostContent] = useState([]);
  const [newPost, setNewPost] = useState({
    comment: "",
    user: "",
    userFirstName: "",
    userLastName: ""

  });

  // Flags in the state to watch for adding a post
  const [add, setAdd] = useState(false);

  useEffect(() => {
    // Asynchronously loading in the data
    getAllPosts().then((response) => {
      setPostContent(response);
    });
  }, []);

  // UseEffect that runs when changes are made to the state variables/flags
    useEffect(() => {
      // Check for add flag and make sure post state variable is defined
      if (newPost.comment && add) {
        createPost(newPost).then((newPost) => {
          setAdd(false);
          setPostContent([...postContent, newPost]);
        });
      }


    }, [postContent, add]);


  // Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
  };

  // Handler to track changes to the child input text
  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const {name, value: newValue}  = e.target;

    setNewPost({
      ...newPost,
      [name]: newValue
    });
  };


    return (
        <div>
        <Header />
          <h1>The Grow Your Roots Community</h1>
          <PostForm newPost={newPost} onClick={onClickHandler} onChange={onChangeHandler}/>

        {postContent.length > 0 && (
          postContent.map(
            (post) => (
              <div className="each">
              <h4>{post.get('userFirstName')} {post.get('userLastName')}</h4>
              <p>{post.get("comment")}</p>
              </div>
            )
          ))}
          <HomeUserFooter />
        </div>
    );
}

export default Blog;
