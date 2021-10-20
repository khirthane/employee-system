import { useState, useContext } from 'react';
import CardLayout from './cardLayout/cardLayout';
import TableLayout from './tableLayout/tableLayout';
import intl from 'utils/locales/en.json';
import { EmployeeContext } from 'stores/context/employeeContext';
import './employees.scss';

const Employees = (): JSX.Element => {

    const [isCardView, setIsCardView] = useState(false);
    const { employeesData } = useContext(EmployeeContext);

    return (
        <>
            <div className="header-container">
                <h2 className="page-header">{intl.employeesList}</h2>
                <div className="page-view">
                    <div className="button-group">
                        <button className={isCardView ? 'button' : 'button active'}
                            onClick={() => setIsCardView(false)}>{intl.tableView}</button>
                        <button className={isCardView ? 'button active' : 'button'}
                            onClick={() => setIsCardView(true)}>{intl.cardView}</button>
                    </div>
                </div>
            </div>

            {employeesData && isCardView
                ? <CardLayout list={employeesData} />
                : <TableLayout list={employeesData} />
            }
        </>
    );
}

export default Employees;