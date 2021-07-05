import { Route, Switch } from "react-router-dom";

import { Posts } from "./endpoints/posts/Posts";
import { Users } from "./endpoints/users/Users";
import { Comments } from "./endpoints/Comments";
import { Todos } from "./endpoints/Todos";
import { Albums } from "./endpoints/Albums";
import { UserDetails } from "./endpoints/users/UsersDetails";

export const Routs = () => {
    return (
        <Switch>
            <Route path={'/users/:id'} component={UserDetails} />
            <Route path='/users' component={Users} />

            <Route path='/posts' component={Posts} />
            <Route path='/comments' component={Comments} />
            <Route path='/albums' component={Albums} />
            <Route path='/todos' component={Todos} />

            <Route path='/' exact>
                Main page
            </Route>
        </Switch>
    )
}
