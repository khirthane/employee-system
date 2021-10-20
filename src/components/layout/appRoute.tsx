import { Route, Switch } from 'react-router-dom'
import Dashboard from 'components/pages/dashboard/dashboard';
import Employees from 'components/pages/employees/employees';

const AppRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/employees" component={Employees} />
        </Switch>
    )
}

export default AppRoute;