import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./component/NavBar";
import AddPost from "./container/AddPosts";
import ViewPosts from "./container/ViewPosts";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ViewPosts />
          </Route>
          <Route exact path="/addSurvey">
            <AddPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
