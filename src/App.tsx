import { EmployeeProvider } from 'stores/context/employeeContext';
import Layout from 'components/layout/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => {
    return (
        <EmployeeProvider>
            <Layout />
        </EmployeeProvider>
    )
}

export default App;
