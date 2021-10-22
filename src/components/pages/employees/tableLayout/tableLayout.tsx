import GridTable from '@nadavshaar/react-grid-table';
import t from "utils/i18nProvider/translate";
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
            label: t('employeeName'),
            cellRenderer: employeeDetails
        },
        {
            id: 2,
            field: 'userId',
            label: t('employeeID'),
        },
        {
            id: 3,
            field: 'dateofBirth',
            label: t('dateofBirth'),
        },
        {
            id: 4,
            field: 'position',
            label: t('position'),
        },
        {
            id: 5,
            field: 'subOrdinates',
            label: t('noofSubOrdinates'),
        }
    ]

    return (
        <div className="table-layout">
            <GridTable columns={columns} rows={list} pageSize={8} />
        </div>
    )
}

export default TableLayout;