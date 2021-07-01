import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Posts } from "./components/endpoints/Posts";
import { Users } from "./components/endpoints/Users";
import { Comments } from "./components/endpoints/Comments";
import { Todos } from "./components/endpoints/Todos";
import { Albums } from "./components/endpoints/Albums";

function App() {
  return (
    <Router>
      <div className='links'>
        <Link to='/posts'>Posts</Link>
        <Link to='/comments'>Comments</Link>
        <Link to='/albums'>Albums</Link>
        <Link to='/users'>Users</Link>
        <Link to='/todos'>Todos</Link>
      </div>

      <div>
        <Switch>


          <Route path='/posts' component={Posts} />
          <Route path='/comments' component={Comments} />
          <Route path='/albums' component={Albums} />
          <Route path='/users' component={Users} />
          <Route path='/todos' component={Todos} />

          <Route path='/' exact>
            Main page
        </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
