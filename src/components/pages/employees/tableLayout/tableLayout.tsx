import GridTable from '@nadavshaar/react-grid-table';
import intl from 'utils/locales/en.json';
import './tableLayout.scss';

const TableLayout = ({ list }): JSX.Element => {


    const employeeDetails = ({ data }) => {
        const imageUrl = require(`assets/images/profile/${data.profile}`);
        return (
            <div className="profile-details">
                <span className="table-profile-pic">
                    <img src={imageUrl.default} alt={data.preferredFullName}></img>
                </span>
                <span className="table-name"> {data.preferredFullName}</span>
            </div>
        )
    }

    const columns = [
        {
            id: 1,
            field: 'preferredFullName',
            label: intl.employeeName,
            cellRenderer: employeeDetails
        },
        {
            id: 2,
            field: 'userId',
            label: intl.employeeID,
        },
        {
            id: 3,
            field: 'dataofBirth',
            label: intl.dataofBirth,
        },
        {
            id: 4,
            field: 'position',
            label: intl.position,
        },
        {
            id: 5,
            field: 'subOrdinates',
            label: intl.noofSubOrdinates,
        }
    ]

    return (
        <div className="table-layout">
            <GridTable columns={columns} rows={list} />
        </div>
    )
}

export default TableLayout;