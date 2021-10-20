import { useEffect, useState } from 'react';
import { fetchEmployeeList } from 'stores/api';
import { EmployeesList } from 'utils/interfaces';
import CardLayout from './cardLayout/cardLayout';
import TableLayout from './tableLayout/tableLayout';
import intl from 'utils/locales/en.json';
import './employees.scss';

const Employees = (): JSX.Element => {

    const [employeeList, setEmployeeList] = useState<EmployeesList[]>([]);
    const [isCardView, setIsCardView] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const results = await fetchEmployeeList();
            setEmployeeList(results);
        }
        fetchData();
    }, []);

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

            {isCardView
                ? <CardLayout list={employeeList} />
                : <TableLayout list={employeeList} />
            }
        </>
    );
}

export default Employees;