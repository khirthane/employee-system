import React, { useState, useEffect } from 'react';
import { ProfileCard } from 'components/features';
import { EmployeesList } from '@interfaces'
import './cardLayout.scss';

const CardLayout = ({ list }): JSX.Element => {
    const [employees, setEmployees] = useState<EmployeesList[]>([]);
    const [defaultList, setdefaultList] = useState<EmployeesList[]>([]);

    console.log('list', list);

    useEffect(() => {
        setEmployees(list);
        setdefaultList(list);
    }, [list]);

    const searchProfile = (e) => {
        if (e.target.value.length > 0) {
            setEmployees(list.filter(res => res.preferredFullName.toLowerCase().match(e.target.value.toLowerCase())))
        } else {
            setEmployees(defaultList);
        }
    }

    return (
        <>
            <div className="search-profiles">
                <input type="text" placeholder="Search..." onChange={searchProfile} className="form-control" id="search-profile" />
            </div>
            <div className="profiles-layout">
                {employees && employees.map((res, i) => (
                    <React.Fragment key={i}>
                        <ProfileCard card={res} />
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default CardLayout;