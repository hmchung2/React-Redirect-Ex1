import React, { Component } from "react";
import { Redirect } from "react-router-dom";

function Profile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return <div>If you are here, you are allowed to be here!</div>;
}

export default Profile;
