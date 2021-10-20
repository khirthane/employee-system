import Layout from 'components/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { EmployeeProvider } from 'stores/context/employeeContext';
const App = () => {

    return (
        <EmployeeProvider>
            <Layout />
        </EmployeeProvider>)
}

export default App;
