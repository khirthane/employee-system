import './profileCard.scss';

const ProfileCard = ({ card }): JSX.Element => {

    const imageUrl = require(`assets/images/profile/${card.profile}`);

    return (
        <div className="profile-card">
            <div className="profile-pic">
                <img src={imageUrl.default} alt={card.preferredFullName}></img>
            </div>
            <h4 className="profile-name">{card.preferredFullName}</h4>
            <p className="profile-dob">{card.dateofBirth}</p>
            <p className="profile-position">{card.position}</p>
        </div>
    )
}

export default ProfileCard;