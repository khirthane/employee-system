
import './card.scss'

const Card = ({ title, children }): JSX.Element => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </>
    )
};

export default Card
