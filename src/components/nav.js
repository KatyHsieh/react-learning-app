import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HighlightIcon from "@mui/icons-material/Highlight";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddBoxIcon from "@mui/icons-material/AddBox";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import AuthService from "../service/auth.service";

function Nav(props) {
  let { currentUser, setCurrentUser } = props;

  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout successfully, now you are redirect to the hom page.");
    setCurrentUser(null);
    navigate("/");
  };
  return (
    <div class="navborder">
      <nav className="">
        <ul className="">
          <HighlightIcon fontSize="large" className="highlightIcon" />
          <li className="">
            <Link className="a active" to="/">
              <HomeIcon />
              Home
            </Link>
          </li>
          {!currentUser && (
            <li className="">
              <Link className="a " to="/register">
                <AddReactionIcon /> Register
              </Link>
            </li>
          )}
          {!currentUser && (
            <li className="">
              <Link className="a" to="/login">
                <AccountCircleIcon /> Login
              </Link>
            </li>
          )}

          {currentUser && (
            <li>
              <Link className="a" to="/profile">
                <AssignmentIndIcon /> Profile
              </Link>
            </li>
          )}
          {currentUser && (
            <li>
              <Link className="a" to="/course">
                <LocalLibraryIcon /> Course
              </Link>
            </li>
          )}
          {currentUser && currentUser.user.role === "student" && (
            <li>
              <Link className="a" to="/enroll">
                <SubscriptionsIcon /> Enroll
              </Link>
            </li>
          )}
          {currentUser && currentUser.user.role === "instructor" && (
            <li>
              <Link className="a" to="/postcourse">
                <AddBoxIcon /> Post New Course
              </Link>
            </li>
          )}
          {currentUser && (
            <div className="logout">
              <li className="">
                <Link onClick={handleLogout} className="a" to="#">
                  Logout <MeetingRoomIcon />
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
