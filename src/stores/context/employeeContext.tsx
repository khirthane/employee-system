import { Dispatch, SetStateAction } from 'react';
import { EmployeesList } from '@interfaces';
import { useEffect, useState, createContext } from 'react';
import { fetchEmployeeList } from 'stores/api';

type ContextData = {
    employeesData: EmployeesList[],
    setEmployeesData: Dispatch<SetStateAction<EmployeesList[]>>
}
export const EmployeeContext = createContext<ContextData>(null);

export const EmployeeProvider = ({ children }) => {

    const [employeesData, setEmployeesData] = useState<EmployeesList[]>(null);

    useEffect(() => {
        async function fetchData() {
            const results = await fetchEmployeeList();
            setEmployeesData(results);
        }
        fetchData()
    }, []);

    return (
        <EmployeeContext.Provider value={{ employeesData, setEmployeesData }}>
            {children}
        </EmployeeContext.Provider >
    );

}