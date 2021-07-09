import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function AdminRoute({ component: Component, ...rest }) {
  const userSigninMentor = useSelector((state) => state.userSigninMentor);
  const { userInfoMentor } = userSigninMentor;
  return (
    <Route
      {...rest}
      render={(props) =>
        userInfoMentor && userInfoMentor.isAdmin ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/signin" />
        )
      }
    ></Route>
  );
}

export default AdminRoute;
