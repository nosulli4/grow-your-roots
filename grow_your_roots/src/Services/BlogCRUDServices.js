import Parse from "parse";

// CREATE operation - new post
export const createPost = async (newPost) => {

  const Post = Parse.Object.extend("Posts");
  const post = new Post();
  // using setter to UPDATE the object
  post.set("comment", newPost.comment);
  const locStore = JSON.parse(localStorage.getItem("Parse/FnFsABZT3nmw3g8Tx8Jwl0zeDLS3Yso1tTJ6P78R/currentUser"));
  const userId = locStore.objectId;
  post.set("user", { "__type": "Pointer", "className": "_User", "objectId": userId });


  let parseQueryUser = new Parse.Query('User');
  parseQueryUser.contains('objectId', userId);
  const userInfo = await parseQueryUser.find();
  console.log(userInfo[0]['attributes']['firstName']);
  post.set("userFirstName", userInfo[0]['attributes']['firstName']);
  post.set("userLastName", userInfo[0]['attributes']['lastName']);

  return post.save().then((result) => {
    return result;
  });
};

// READ operation - get post by ID
export const getById = (id) => {
  const Post = Parse.Object.extend("Posts");
  const query = new Parse.Query(Post);
  return query.get(id).then((result) => {
    // return Post object with objectId: id
  return result;
  });
};

// READ operation - get all posts in Parse class Post
export const getAllPosts = () => {
  const Post = Parse.Object.extend("Posts");
  const query = new Parse.Query(Post);
  return query.find().then((results) => {
    // returns array of Post objects
    return results;
  });
};
