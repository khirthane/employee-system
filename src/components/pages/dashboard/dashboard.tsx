
import Card from 'components/features/card/card';
import './dashboard.scss'

const Dashboard = (): JSX.Element => {

    return (
        <div className="card-layout">
            <Card title="Protection Status"><p>Detials</p></Card>
            <Card title="Vulnerable Machines"><p>Detials</p></Card>
            <Card title="Patch Installation Status"><p>Detials</p></Card>
            <Card title="Cyber Protection"><p>Detials</p></Card>
        </div>
    )
};

export default Dashboard
