import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../service/course.service";

function PostCourse(props) {
  let { currentUser, setCurrentUser } = props;
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState(0);
  let [message, setMessage] = useState("");
  let navigate = useNavigate();

  function handleToLogin() {
    navigate("/login");
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleContent(e) {
    setDescription(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function hendlePost() {
    CourseService.post(title, description, price)
      .then(() => {
        window.alert("New course has been created.");
        navigate("/course");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data);
      });
  }

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before posting a new course.</p>
          <button className="btn btn-primary btn-lg" onClick={handleToLogin}>
            Take me to login page.
          </button>
        </div>
      )}
      {message && (
        <div className="alert alert-warning" role="alert">
          {message}
        </div>
      )}
      <br />
      <br />
      {currentUser && currentUser.user.role !== "instructor" && (
        <div>
          <p>Only instrcutors can post new courses.</p>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div className="form-group">
          <label for="exampleforTitle">Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleTitle}
          />
          <br />
          <label for="exampleforContent">Content</label>
          <textarea
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="content"
            onChange={handleContent}
          />
          <br />
          <label for="exampleforPrice">Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleforPrice"
            onChange={handlePrice}
          />
          <br />
          <button className="btn btn-primary" onClick={hendlePost}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default PostCourse;
