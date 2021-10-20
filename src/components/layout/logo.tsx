import './layout.scss'
import logo from 'assets/images/logo.png';

const Logo = (): JSX.Element => {
    return (
        <div className="logo">
            <img src={logo} alt="Acronis logo" height="25px" />
        </div>
    )
}

export default Logo;