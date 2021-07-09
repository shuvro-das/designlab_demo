import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signoutmentee, signoutmentor } from "./actions/UserAction.js";
import LogInMentorScreen from "./screen/LogInMentorScreen";
import LogInMenteeScreen from "./screen/LogInMenteeScreen.js";

import HomeScrren from "./screen/HomeScreen.js";

// import HomeScreen from "./screens/HomeScreen";

import MenteeRegistration from "./screen/MenteeRegistration.js";
import MentorRegistration from "./screen/MentorRegistration.js";
import MenteeRoute from "./components/MenteeRoute.js";
import MenteeJoinSessionScreen from "./screen/MenteeJoinSessionScreen.js";
import MentorRegistration_Part_Two from "./screen/MentorRegistration_Part_Two.js";
import AdminRoute from "./components/AdminRoute.js";
import MentorRoute from "./components/MentorRoute.js";
import MentorListScreen from "./screen/MentorListScreen.js";
import MenteeListScreen from "./screen/MenteeListScreen.js";
import MentorDetailsScreen from "./screen/MentorDetailsScreen.js";
import MentorEditScreen from "./screen/UserEDitScreen.js";
import VideoSession from "./screen/VideoSessionScreen.js";
import FindSession from "./screen/FindSessionScreen.js";
import createsession from "./screen/CreateSession.js";
import CreatedSession from "./screen/CreatedSessionScreen.js";
import RegisteredSession from "./screen/RegisteredSessionScreen.js";

function App() {
  const userSigninMentee = useSelector((state) => state.userSigninMentee);

  const { userInfoMentee } = userSigninMentee;

  const userSigninMentor = useSelector((state) => state.userSigninMentor);
  const { userInfoMentor } = userSigninMentor;

  const dispatch = useDispatch();
  const signoutHandlerMentee = () => {
    dispatch(signoutmentee());
  };

  const signoutHandlerMentor = () => {
    dispatch(signoutmentor());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              <span>Pipeline</span>
              <span style={{ color: "#000000" }}>Predator</span>
            </Link>
          </div>
          <div>
            {userInfoMentee ? (
              <div className="dropdown">
                <Link to="#">{userInfoMentee.name}</Link>
                <ul className="dropdown-content">
                  <li>
                    <li>
                      <Link to="/findsession">Find Session</Link>
                    </li>
                    <li style={{ display: "flex" }}>
                      <Link
                        to="/registeredsessions"
                        style={{ display: "flex" }}
                      >
                        Registered Sessions
                      </Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandlerMentee}>
                        Sign Out
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin-mentee">Mentee Sign In</Link>
            )}

            {userInfoMentor ? (
              <div className="dropdown">
                <Link to="#">{userInfoMentor.name}</Link>
                <ul className="dropdown-content">
                  <li style={{ display: "flex" }}>
                    <Link to="/createsession">Create Session</Link>
                  </li>
                  <li>
                    <Link to="/createdsessions">My Sessions</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandlerMentor}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin-mentor">Mentor sign in</Link>
            )}

            {userInfoMentor && userInfoMentor.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/mentorlist">Mentor List</Link>
                  </li>
                  <li>
                    <Link to="/menteelist">Mentee List</Link>
                  </li>
                  <li>
                    <Link to="/approve">Edit</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScrren} exact></Route>
          <Route path="/signin-mentee" component={LogInMenteeScreen} />
          <MenteeRoute
            path="/joinsession"
            component={MenteeJoinSessionScreen}
          />

          <Route
            path="/register-mentee"
            component={MenteeRegistration}
            exact
          ></Route>
          <Route
            path="/register-mentor"
            component={MentorRegistration}
            exact
          ></Route>
          <Route path="/findsession" component={FindSession} exact></Route>
          <Route path="/profile" component={MentorDetailsScreen}></Route>
          <Route
            path="/register-mentor/:id"
            component={MentorRegistration_Part_Two}
            exact
          ></Route>
          <AdminRoute path="/mentorlist" component={MentorListScreen} />
          <AdminRoute path="/approve/:id" exact component={MentorEditScreen} />
          <AdminRoute path="/menteelist" component={MenteeListScreen} />

          <MentorRoute path="/createsession" component={createsession} />
          <Route path="/signin-mentor" component={LogInMentorScreen} />
          <Route path="/videosession" component={VideoSession} />
          <MentorRoute
            path="/createdsessions"
            component={CreatedSession}
            exact
          />
          <Route
            path="/registeredsessions"
            component={RegisteredSession}
            exact
          />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
