import React, { useState, useEffect } from "react";
import AuthService from "../service/auth.service";

function Profile(props) {
  let { currentUser, serCurrentUser } = props;
  // useEffect(() => {
  //   serCurrentUser(AuthService.getCurrentUser());
  // }, []);
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before getting your profile.</p>
          <button className="btn btn-secondary btn-lg">
            Submit to the login page
          </button>
        </div>
      )}
      {currentUser && (
        <div>
          <h1>
            Hi {currentUser.user.username}
            <br />
            Here's your profile page.
          </h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.user.username}</strong>
            </h3>
          </header>
          {/* <p>
            <strong>Token: {currentUser.token}</strong>
          </p> */}
          <p>
            <strong>ID: {currentUser.user._id}</strong>
          </p>
          <p>
            <strong>Emial: {currentUser.user.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
