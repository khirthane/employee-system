import employees from 'assets/mock/employees.json';

export const fetchEmployeeList = () => {
    try {
        return employees; 
    } catch (error) {
        console.log(error);
    }
}
