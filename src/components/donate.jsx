import {Link} from 'react-router-dom';
import '../styles/donate.css';

const Donate = () => {
    return (
        <div className="donate-container">
            <h2 className="donate-header">Stand with writers.</h2>
            <Link className="donate-link" to="/https://entertainmentcommunity.org/">Stand with writers.</Link>
        </div>
    );
}

export default Donate;