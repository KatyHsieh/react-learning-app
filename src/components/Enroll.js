import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../service/course.service";

function Enroll(props) {
  let { currentUser, setCurrentUser } = props;
  let [searchinput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  const navigate = useNavigate();
  let hpCgaracters = [];

  function handleToLogin() {
    navigate("/login");
  }
  function handleInput(e) {
    setSearchInput(e.target.value);
  }
  function handleSearch(e) {
    // const v = CourseService.toLowerCase().includes(searchinput);
    // CourseService.getCourseByName(searchinput)

    CourseService.getCourseByName(searchinput)
      .then((data) => {
        setSearchResult(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleEnroll(e) {
    CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Enrollment Successfully.");
        navigate("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>
            <strong>You must login fitst before search for courses.</strong>
          </p>
          <button onClick={handleToLogin} className="btn btn-secondary btn-lg">
            Submit to the login page
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role === "instructor" && (
        <div>
          <p>Only the students can enroll in course.</p>
        </div>
      )}
      {currentUser && currentUser.user.role === "student" && (
        <div className="search-bar search input-group mb-3">
          <input onChange={handleInput} type="text" className=" form-control" />
          <button onClick={handleSearch} className="btn btn-secondary">
            Search
          </button>
        </div>
      )}
      {currentUser && searchResult && searchResult.length !== 0 && (
        <div>
          {searchResult.map((course) => (
            <div key={course._id} className="course-box">
              <div className="card-body ">
                <h5 className="card-title">
                  <strong>{course.title}</strong>
                </h5>
                <p className="card-text">
                  <strong>{course.description}</strong>
                </p>
                <p>
                  <strong>Pricr: </strong>${course.price}
                </p>
                <p>
                  <strong>Student:</strong> {course.students.length}
                </p>
                <button
                  id={course._id}
                  onClick={handleEnroll}
                  className="btn btn-warning"
                >
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// function Enroll(props) {
//   const navigate = useNavigate();
//   let { currentUser, setCurrentUser } = props;
//   let [searchInpit, setSearchInput] = useState("");
//   let [searchResult, setSearchResult] = useState(null);

//   function handleTakeToLogin() {
//     navigate("/login");
//   }
//   function handleChangeInput(e) {
//     setSearchInput(e.target.value);
//   }
//   function handleSearch() {}
//   function handleEnroll(e) {}

//   return (

//       (
//       <div style={{ padding: "3rem" }}>
//         {!currentUser && (
//           <div>
//             <p>You must login first before searching for courses.</p>
//             <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
//               Take me to login page.
//             </button>
//           </div>
//         )}
//         {currentUser && currentUser.user.role == "instructor" && (
//           <div>
//             <h1>Only students can enroll in courses.</h1>
//           </div>
//         )}
//         {currentUser && currentUser.user.role == "student" && (
//           <div className="search input-group mb-3">
//             <input
//               onChange={handleChangeInput}
//               type="text"
//               class="form-control"
//             />
//             <button onClick={handleSearch} className="btn btn-primary">
//               Search
//             </button>
//           </div>
//         )}
//         {currentUser && searchResult && searchResult.length != 0 && (
//           <div>
//             <p>Data we got back from API.</p>
//             {searchResult.map((course) => (
//               <div key={course._id} className="card" style={{ width: "18rem" }}>
//                 <div className="card-body">
//                   <h5 className="card-title">{course.title}</h5>
//                   <p className="card-text">{course.description}</p>
//                   <p>Price: {course.price}</p>
//                   <p>Student: {course.students.length}</p>
//                   <a
//                     href="#"
//                     onClick={handleEnroll}
//                     className="card-text"
//                     className="btn btn-primary"
//                     id={course._id}
//                   >
//                     Enroll
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       )

//   );
// }

export default Enroll;
