import moment from 'moment/moment';
import Logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={Logo} alt="" className='mx-auto' />
            <h3>Journalism Without Fear or Favour </h3>
            <p>{moment().format('MMMM Do YYYY, h:mm a')}</p>
        </div>
    );
};

export default Header;